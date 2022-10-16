import React from "react";
import { Chain } from "../../interfaces/chains";
import { ContractDetails as IContractDetails } from "../../interfaces/contract-details";
import { useClient } from "../../providers/ClientProvider";
import SimpleButton from "../Buttons/SimpleButton";
import CodeDetailsSkeletons from "../Skeletons/CodeDetailsSkeleton";

interface Props {
  details: IContractDetails | null;
  color: Chain;
  skeleton?: boolean;
}

const ContractDetails: React.FC<Props> = ({ details, color, skeleton }) => {
  const { chain } = useClient();

  if (skeleton) return <CodeDetailsSkeletons />;

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full relative">
      <div className="col-span-1">
        <p className="text-cw-grey-400">Contract name</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-grey-100 text-xl">{details?.label}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Code ID</p>
      </div>
      <div className="col-span-3 flex items-center gap-2">
        <p className={`text-chain-${color ? color : chain}-400`}>{details?.code_id}</p>
        <SimpleButton color={color ? color : chain}>Reinstantiate</SimpleButton>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Creator</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${color ? color : chain}-400`}>{details?.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Tx Hash</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${color ? color : chain}-400`}>{details?.tx_hash}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Admin</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${color ? color : chain}-400`}>-</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Funds</p>
      </div>
      <div className="col-span-3">
        <p className="text-white">????</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Last executed at</p>
      </div>
      <div className="col-span-3">
        <p className="text-white">-</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Created at</p>
      </div>
      <div className="col-span-3">
        <p className="text-white">-</p>
      </div>
    </div>
  );
};

export default ContractDetails;
