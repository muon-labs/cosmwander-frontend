import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAsync } from "react-use";
import { GroupButtons } from "../../../components/Buttons";
import CodeSchema from "../../../components/CodeSchema";
import ContractDetails from "../../../components/ContractDetails";
import TabsContainer from "../../../components/TabsContainer";
import Transactions from "../../../components/Transactions";
import SkeletonCodeOrContract from "../../../components/Skeletons";
import { ContractDetails as IContractDetails } from "../../../interfaces/contract-details";
import { useClient } from "../../../providers/ClientProvider";
import { getContractDetails } from "../../../services/cosmwander";
import { Chain } from "../../../interfaces/chains";

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
          Transactions<span className={`bg-chain-${chain}-400 text-cw-grey-850 px-2  rounded-[40px]`}>{txs}</span>
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
  const { changeChainByPrefix, changeJsonViewerColor, getChainByChainId } = useClient();

  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");
  const [contractDetails, setContractDetails] = useState<IContractDetails | null>(null);

  useEffect(() => {
    setContractDetails(null);
  }, []);

  useEffect(() => {
    changeJsonViewerColor(queryChain as Chain);
  }, [changeJsonViewerColor]);

  useAsync(async () => {
    if (contractAddr) {
      changeChainByPrefix(contractAddr as string);
      const contractDetails = await getContractDetails(queryChain as Chain, contractAddr as string);
      setContractDetails(contractDetails);
    }
  }, [contractAddr, queryChain]);

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {contractDetails ? (
        <>
          <div className="border-t border-cw-grey-700 w-full py-9">
            <ContractDetails details={contractDetails} color={queryChain as Chain} />
            <div className="mt-[7.75rem] mb-3">
              <GroupButtons
                selectedTab={activeCodeTab}
                handlerTab={setActiveCodeTab}
                tabs={createTabs(0, queryChain as Chain)}
                color={queryChain as Chain}
              />
            </div>
          </div>
          <div className="border-t border-cw-grey-700 w-full py-9 min-h-[54rem]">
            <TabsContainer
              selectedTab={activeCodeTab}
              options={[
                {
                  key: "see-contract",
                  container: (
                    <>
                      {contractDetails?.init_msg && (
                        <>
                          <div>
                            <p className="text-gray-400">Instantiate Message</p>
                          </div>
                          <div className="w-full min-h-[400px]">
                            <ReactJson src={contractDetails.init_msg} theme="ashes" />
                          </div>
                        </>
                      )}
                      <CodeSchema codeId={contractDetails?.code_id} color={queryChain as Chain} />
                    </>
                  ),
                },
                {
                  key: "transactions ",
                  container: <Transactions />,
                },
              ]}
            />
          </div>
        </>
      ) : (
        <SkeletonCodeOrContract />
      )}
    </div>
  );
};

export default Contract;
