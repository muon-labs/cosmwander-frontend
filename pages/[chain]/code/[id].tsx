import React, { useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GroupButtons } from "../../../components/Buttons";
import Contracts from "../../../components/Contracts";
import TabsContainer from "../../../components/TabsContainer";
import CodeDetails from "../../../components/CodeDetails";
import CodeSchema from "../../../components/CodeSchema";
import { useRouter } from "next/router";
import { useAsync } from "react-use";
import { getCodeDetails } from "../../../services/cosmwander";
import { CodeDetails as ICodeDetails } from "../../../interfaces/code-details";
import { Chain } from "../../../interfaces/chains";
import { useClient } from "../../../providers/ClientProvider";

const buildTabs = (contractNumber?: number, chain?: Chain) => {
  return [
    {
      content: "See contract",
      key: "see-contract",
    },
    {
      content: (
        <p className="flex items-center justify-center gap-4">
          Contracts
          <span className={`bg-chain-${chain}-400 text-cw-grey-850 px-2 rounded-[40px] text-xs font-bold`}>{contractNumber ?? 0}</span>
        </p>
      ),
      key: "contracts",
    },
  ];
};

const CodeView: NextPage = () => {
  const {
    query: { chain: queryChain, id: codeId },
  } = useRouter();
  const { changeChain } = useClient();

  const [codeDetails, setCodeDetails] = useState<ICodeDetails | null>(null);

  const activeSkeleton = useMemo(() => !codeDetails, [codeDetails]);

  useAsync(async () => {
    setCodeDetails(null);
    if (codeId) {
      changeChain(queryChain as Chain);
      const codeDetails = await getCodeDetails(queryChain as Chain, codeId as string);
      setCodeDetails(codeDetails);
    }
  }, [codeId, queryChain]);

  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");
  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Code View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="border-t border-cw-grey-700 w-full py-9">
        <CodeDetails skeleton={activeSkeleton} codeDetails={codeDetails as ICodeDetails} color={queryChain as Chain} />
        <div className="mt-[7.75rem] mb-3">
          <GroupButtons
            skeleton={activeSkeleton}
            selectedTab={activeCodeTab}
            color={queryChain as Chain}
            handlerTab={setActiveCodeTab}
            tabs={buildTabs(codeDetails?.contracts.length, queryChain as Chain)}
          />
        </div>
      </div>
      <div className="border-t border-cw-grey-700 w-full py-9 min-h-[30rem]">
        <TabsContainer
          selectedTab={activeCodeTab}
          options={[
            {
              key: "see-contract",
              container: <CodeSchema codeId={codeId as string} color={queryChain as Chain} skeleton={activeSkeleton} />,
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
