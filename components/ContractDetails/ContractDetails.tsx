import React from "react";
import SimpleButton from "../Buttons/SimpleButton";

const ContractDetails: React.FC = () => {
  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full relative">
      <div className="col-span-1">
        <p className="text-cw-grey-400">Contract name</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-grey-100 text-xl">Passage</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Code ID</p>
      </div>
      <div className="col-span-3 flex items-center gap-2">
        <p className="text-cw-purple-400">123</p>
        <SimpleButton>Reinstantiate</SimpleButton>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Creator</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400">juno1dxc3qcsaddsak524yerslp29gqf65fzuqcg5ju</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Tx Hash</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400">F47200C02D8A9B1CD374CE11E80D027CA4A99006B108DE86E326BC29EA197C0F</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Admin</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400">juno1dxc3qcsaddsak524yerslp29gqf65fzuqcg5ju</p>
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
        <p className="text-white">2022-10-01 10:08:39</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Created at</p>
      </div>
      <div className="col-span-3">
        <p className="text-white">2022-10-01 10:08:38</p>
      </div>
    </div>
  );
};

export default ContractDetails;
