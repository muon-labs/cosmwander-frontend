import React from "react";
import { useRouter } from "next/router";
import { ContractDetails as IContractDetails } from "~/interfaces/contract-details";
import SimpleButton from "../Buttons/SimpleButton";
import CodeDetailsSkeletons from "../Skeletons/CodeDetailsSkeleton";
import { useCosmos } from "~/providers/CosmosProvider";

interface Props {
  details: IContractDetails | null;
  skeleton?: boolean;
}

const ContractDetails: React.FC<Props> = ({ details, skeleton }) => {
  const { push: goToPage } = useRouter();
  const { chainName } = useCosmos();

  if (skeleton) return <CodeDetailsSkeletons />;

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-5 gap-5 w-full relative">
      <div className="col-span-1">
        <p className="text-cw-grey-400">Contract name</p>
      </div>
      <div className="col-span-4">
        <p className="text-cw-grey-100 text-xl">{details?.label}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Code ID</p>
      </div>
      <div className="col-span-4 flex items-center gap-2">
        <p className={`text-chain-400`}>{details?.code_id}</p>
        <SimpleButton scale="md" onClick={() => goToPage(`/${chainName}/code/${details?.code_id}`)}>
          Reinstantiate
        </SimpleButton>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Creator</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{details?.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Tx Hash</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{details?.tx_hash}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Admin</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>-</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Checksum</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{details?.checksum}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Funds</p>
      </div>
      <div className="col-span-4">
        <p className="text-white">????</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Created at</p>
      </div>
      <div className="col-span-4">
        <p className="text-white">-</p>
      </div>
    </div>
  );
};

export default ContractDetails;
