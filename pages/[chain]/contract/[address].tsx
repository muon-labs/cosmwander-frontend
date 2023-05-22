import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ContractDetails from "~/components/ContractDetails";
import { ContractDetails as IContractDetails } from "~/interfaces/contract-details";
import NotExist from "~/components/NotExist";
import { JSONSchema } from "~/interfaces/json-schema";
import { useCosmos } from "~/providers/CosmosProvider";
import { useQuery } from "react-query";
import ContractSchema from "~/components/CodeSchema/ContractSchema";

const Contract: React.FC = () => {
  const { query } = useRouter();
  const { chainName, queryService } = useCosmos();
  const {
    isLoading,
    isFetched,
    data: contractDetails,
  } = useQuery<IContractDetails>(
    ["contract_details", query.address],
    () => queryService.getContractDetails(chainName, query.address as string),
    { enabled: !!query.address }
  );

  if (isFetched && !contractDetails) return <NotExist />;

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander - Contract View Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-11 mb-16">
        <div className="border-t border-cw-grey-700 w-full" />
        <ContractDetails skeleton={isLoading} details={contractDetails as IContractDetails} />
        <div className="border-t border-cw-grey-700 w-full" />
        <div className="min-h-[27rem]">
          <ContractSchema
            init_msg={contractDetails?.initMsg as JSONSchema}
            contractAddr={query.address as string}
            codeDetails={contractDetails?.codeDetails}
            skeleton={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
