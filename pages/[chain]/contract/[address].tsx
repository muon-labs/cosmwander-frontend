import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { useAsync } from "react-use";
import { GroupButtons } from "../../../components/Buttons";
import CodeSchema from "../../../components/CodeSchema";
import ContractDetails from "../../../components/ContractDetails";
import TabsContainer from "../../../components/TabsContainer";
import Transactions from "../../../components/Transactions";
import { ContractDetails as IContractDetails } from "../../../interfaces/contract-details";
import { useTheme } from "../../../providers/ThemeProvider";
import { getContractDetails } from "../../../services/cosmwander";
import { Chain } from "../../../interfaces/chains";
import NotExist from "../../../components/NotExist";
import { JSONSchema } from "../../../interfaces/json-schema";
import { useWallet } from "../../../providers/WalletProvider";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const createTabs = (txs: number, chain?: Chain) => {
  return [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Transactions<span className={`bg-chain-${chain}-400 text-cw-grey-850 px-2 rounded-[40px] text-xs font-bold`}>{txs}</span>
        </p>
      ),
      key: "transactions",
    },
  ];
};

const Contract: React.FC = () => {
  const {
    query: { chain: queryChain, address: contractAddr },
  } = useRouter();
  const { changechainColor } = useTheme();
  const { chain } = useWallet();

  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");
  const [contractDetails, setContractDetails] = useState<IContractDetails | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const activeSkeleton = useMemo(() => !contractDetails, [contractDetails]);

  useAsync(async () => {
    setSearched(false);
    setContractDetails(null);
    if (!contractAddr || !chain) return;
    changechainColor(queryChain as Chain);
    try {
      const contractDetails = await getContractDetails(chain.chainName, contractAddr as string);
      setContractDetails(contractDetails);
    } catch (e) {}
    setSearched(true);
  }, [contractAddr, queryChain, chain]);

  if (searched && !contractDetails) {
    return <NotExist searchValue={contractAddr as string} />;
  }

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-11 mb-16">
        <div className="border-t border-cw-grey-700 w-full" />
        <ContractDetails skeleton={activeSkeleton} details={contractDetails} color={queryChain as Chain} />
        <div className="mt-11">
          <GroupButtons
            skeleton={activeSkeleton}
            selectedTab={activeCodeTab}
            handlerTab={setActiveCodeTab}
            tabs={createTabs(0, queryChain as Chain)}
            color={queryChain as Chain}
          />
        </div>
        <div className="border-t border-cw-grey-700 w-full" />
        <div className="min-h-[27rem]">
          <TabsContainer
            selectedTab={activeCodeTab}
            options={[
              {
                key: "see-contract",
                container: (
                  <CodeSchema
                    init_msg={contractDetails?.init_msg as JSONSchema}
                    contractAddr={contractAddr as string}
                    codeDetails={contractDetails?.code_details}
                    color={queryChain as Chain}
                    skeleton={activeSkeleton}
                  />
                ),
              },
              {
                key: "transactions ",
                container: <Transactions />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
