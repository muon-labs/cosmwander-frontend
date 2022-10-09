import Head from "next/head";
import React, { useState } from "react";
import { GroupButtons } from "../../components/Buttons";
import CodeSchema from "../../components/CodeSchema";
import ContractDetails from "../../components/ContractDetails";
import TabsContainer from "../../components/TabsContainer";
import Transactions from "../../components/Transactions";

const Contract: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");

  const codeTabGroup = [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Transactions<span className="bg-cw-purple-400 text-cw-grey-850 px-2  rounded-[40px]">23</span>
        </p>
      ),
      key: "transactions",
    },
  ];

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="border-t border-cw-grey-700 w-full py-9">
        <ContractDetails />
        <div className="mt-[7.75rem] mb-3">
          <GroupButtons selectedTab={activeCodeTab} handlerTab={setActiveCodeTab} tabs={codeTabGroup} />
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
                  <CodeSchema />
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
