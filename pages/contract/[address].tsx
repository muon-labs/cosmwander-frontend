import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAsync } from "react-use";
import { GroupButtons } from "../../components/Buttons";
import CodeSchema from "../../components/CodeSchema";
import ContractDetails from "../../components/ContractDetails";
import TabsContainer from "../../components/TabsContainer";
import Transactions from "../../components/Transactions";
import { ContractDetails as IContractDetails } from "../../interfaces/contract-details";
import { useClient } from "../../providers/ClientProvider";
import { getContractDetails } from "../../services/cosmwander";

const createTabs = (txs: number) => {
  return [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Transactions<span className="bg-cw-purple-400 text-cw-grey-850 px-2  rounded-[40px]">{txs}</span>
        </p>
      ),
      key: "transactions",
    },
  ];
}

const Contract: React.FC = () => {
  const { query: { address: contractAddr } } = useRouter();
  const { chain } = useClient();
  
  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");
  const [contractDetails, setContractDetails] = useState<IContractDetails | null>(null);

  useAsync(async () => {
    if (contractAddr) {
      const contractDetails = await getContractDetails(chain, contractAddr as string);
      setContractDetails(contractDetails);
    }
  }, [contractAddr]);

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="border-t border-cw-grey-700 w-full py-9">
        <ContractDetails details={contractDetails}/>
        <div className="mt-[7.75rem] mb-3">
          <GroupButtons selectedTab={activeCodeTab} handlerTab={setActiveCodeTab} tabs={createTabs(0)} />
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
                  <div>
                    <p className="text-gray-400">Instantiate Message</p>
                  </div>
                  <div className="w-full min-h-[400px]"></div>
                  <CodeSchema codeId={String(contractDetails?.code_id)}/>
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
    </div>
  );
};

export default Contract;
