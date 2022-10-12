import React from "react";
import { ContractDetails as IContractDetails } from "../../interfaces/contract-details";
import { useClient } from "../../providers/ClientProvider";
import SimpleButton from "../Buttons/SimpleButton";

interface Props {
  details: IContractDetails | null;
}

const ContractDetails: React.FC<Props> = ({ details }) => {
  const { searchedChain } = useClient();
  console.log(searchedChain);

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
        <p className={`text-chain-${searchedChain}-400`}>{details?.code_id}</p>
        <SimpleButton color={searchedChain}>Reinstantiate</SimpleButton>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Creator</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${searchedChain}-400`}>{details?.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Tx Hash</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${searchedChain}-400`}>{details?.tx_hash}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Admin</p>
      </div>
      <div className="col-span-3">
        <p className={`text-chain-${searchedChain}-400`}>-</p>
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
