import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import CodeDetails from "~/components/CodeDetails";
import CodeSchema from "~/components/CodeSchema";
import { useRouter } from "next/router";
import NotExist from "~/components/NotExist";
import { useCosmos } from "~/providers/CosmosProvider";

import { CodeDetails as ICodeDetails } from "~/interfaces/code-details";

const CodeView: NextPage = () => {
  const { query } = useRouter();
  const { chainName, queryService } = useCosmos();
  const {
    isLoading,
    isIdle,
    data: codeDetails,
  } = useQuery<ICodeDetails>(["latest_contracts", chainName, query.id], () => queryService.getCodeDetails(chainName, query.id as string), {
    enabled: !!query.id,
  });

  if (isIdle && !codeDetails) return <NotExist searchValue={query.codeId as string} />;

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Code View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-11 mb-16">
        <div className="border-t border-cw-grey-700 w-full" />
        <CodeDetails skeleton={isLoading} codeDetails={codeDetails as ICodeDetails} />
        <div className="border-t border-cw-grey-700 w-full" />
        <div className="min-h-[30rem]">
          <CodeSchema codeDetails={codeDetails as ICodeDetails} skeleton={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default CodeView;
