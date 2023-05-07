import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CodeSchema from "~/components/CodeSchema";
import ContractDetails from "~/components/ContractDetails";
import { ContractDetails as IContractDetails } from "~/interfaces/contract-details";
import NotExist from "~/components/NotExist";
import { JSONSchema } from "~/interfaces/json-schema";
import { useCosmos } from "~/providers/CosmosProvider";
import { useQuery } from "react-query";

const Contract: React.FC = () => {
  const { query } = useRouter();
  const { chainName, queryService } = useCosmos();
  const {
    isLoading,
    isIdle,
    data: contractDetails,
  } = useQuery<IContractDetails>(["contract_details", query.address], () =>
    queryService.getContractDetails(chainName, query.address as string)
  );

  if (isIdle && !contractDetails) return <NotExist searchValue={query.address as string} />;

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-11 mb-16">
        <div className="border-t border-cw-grey-700 w-full" />
        <ContractDetails skeleton={isLoading} details={contractDetails as IContractDetails} />
        {/*  <div className="mt-11">
          <GroupButtons skeleton={isLoading} selectedTab={activeCodeTab} handlerTab={setActiveCodeTab} tabs={createTabs(contractDetails?.contracts.length)} />
        </div> */}
        <div className="border-t border-cw-grey-700 w-full" />
        <div className="min-h-[27rem]">
          <CodeSchema
            init_msg={contractDetails?.init_msg as JSONSchema}
            contractAddr={query.address as string}
            codeDetails={contractDetails?.code_details}
            skeleton={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
