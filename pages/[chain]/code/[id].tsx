import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { GroupButtons } from "~/components/Buttons";
import Contracts from "~/components/Contracts";
import TabsContainer from "~/components/TabsContainer";
import CodeDetails from "~/components/CodeDetails";
import CodeSchema from "~/components/CodeSchema";
import { useRouter } from "next/router";
import NotExist from "~/components/NotExist";
import { useCosmos } from "~/providers/CosmosProvider";

import { CodeDetails as ICodeDetails } from "~/interfaces/code-details";
import { Chain } from "~/interfaces/chains";

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
  const { query } = useRouter();
  const { chainName, queryService } = useCosmos();
  const {
    isLoading,
    isIdle,
    data: codeDetails,
  } = useQuery<ICodeDetails>(["latest_contracts", chainName], () => queryService.getLatestContracts(chainName));

  const [activeCodeTab, setActiveCodeTab] = useState<string>("see-contract");
  const queryChain = query.chain as string;

  if (isIdle && !codeDetails) return <NotExist searchValue={query.codeId as string} />;

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Code View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-11 mb-16">
        <div className="border-t border-cw-grey-700 w-full" />
        <CodeDetails skeleton={isLoading} codeDetails={codeDetails as ICodeDetails} color={queryChain as Chain} />
        <div className="mt-11">
          <GroupButtons
            skeleton={isLoading}
            selectedTab={activeCodeTab}
            color={queryChain as Chain}
            handlerTab={setActiveCodeTab}
            tabs={buildTabs(codeDetails?.contracts.length, queryChain as Chain)}
          />
        </div>
        <div className="border-t border-cw-grey-700 w-full" />
        <div className="min-h-[30rem]">
          <TabsContainer
            selectedTab={activeCodeTab}
            options={[
              {
                key: "see-contract",
                container: <CodeSchema codeDetails={codeDetails as ICodeDetails} color={queryChain as string} skeleton={isLoading} />,
              },
              {
                key: "contracts",
                container: <Contracts contracts={codeDetails?.contracts || []} />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeView;
