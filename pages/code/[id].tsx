import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GroupButtons } from "../../components/Buttons";
import Contracts from "../../components/Contracts";
import TabsContainer from "../../components/TabsContainer";
import CodeDetails from "../../components/CodeDetails";
import CodeSchema from "../../components/CodeSchema";
import { useRouter } from "next/router";
import { useAsync } from "react-use";
import { getCodeDetails } from "../../services/cosmwander";
import { useClient } from "../../providers/ClientProvider";
import { CodeDetails as ICodeDetails } from "../../interfaces/code-details";
import { Chain } from "../../interfaces/chains";

const buildTabs = (contractNumber?: number, chain?: Chain) => {
  return [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Contracts<span className={`bg-chain-${chain}-400 text-cw-grey-850 px-2  rounded-[40px]`}>{contractNumber ?? 0}</span>
        </p>
      ),
      key: "contracts",
    },
  ];
};

const CodeView: NextPage = () => {
  const {
    query: { id: codeId },
  } = useRouter();
  const { chain, changeSearchedChain, searchedChain } = useClient();

  const [codeDetails, setCodeDetails] = useState<ICodeDetails | null>(null);

  useAsync(async () => {
    if (codeId) {
      changeSearchedChain(chain);
      const codeDetails = await getCodeDetails(chain, codeId as string);
      setCodeDetails(codeDetails);
    }
  }, [codeId]);

  useEffect(() => {
    setCodeDetails(null);
  }, [chain]);

  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Code View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="border-t border-cw-grey-700 w-full py-9">
        <CodeDetails codeDetails={codeDetails} />
        <div className="mt-[7.75rem] mb-3">
          <GroupButtons
            selectedTab={activeCodeTab}
            color={searchedChain}
            handlerTab={setActiveCodeTab}
            tabs={buildTabs(codeDetails?.contracts.length, searchedChain)}
          />
        </div>
      </div>
      <div className="border-t border-cw-grey-700 w-full py-9 min-h-[54rem]">
        <TabsContainer
          selectedTab={activeCodeTab}
          options={[
            {
              key: "see-contract",
              container: <CodeSchema codeId={codeId as string} />,
            },
            {
              key: "contracts",
              container: <Contracts contracts={codeDetails?.contracts || []} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CodeView;
