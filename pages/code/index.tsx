import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { GroupButtons } from "../../components/Buttons";
import Contracts from "../../components/Contracts";
import TabsContainer from "../../components/TabsContainer";
import CodeDetails from "../../components/CodeDetails";
import CodeSchema from "../../components/CodeSchema";

const CodeView: NextPage = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");

  const codeTabGroup = [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Contracts<span className="bg-cw-purple-400 text-cw-grey-850 px-2  rounded-[40px]">23</span>
        </p>
      ),
      key: "contracts",
    },
  ];

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Code View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="border-t border-cw-grey-700 w-full py-9">
        <CodeDetails />
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
              container: <CodeSchema />,
            },
            {
              key: "contracts",
              container: <Contracts />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CodeView;
