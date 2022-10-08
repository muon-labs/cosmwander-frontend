import React from "react";
import { IntlAddress } from "../../utils/intl";
import Tag from "../Tag";

const ContractCard: React.FC = () => {
  return (
    <div className="w-full min-h-[9rem] grid grid-cols-1 md:grid-cols-2 bg-cw-grey-800 rounded-lg border border-cw-grey-700 p-4 text-sm">
      <div className="flex justify-start items-center gap-2">
        <Tag bg="bg-cw-light-red">Juno</Tag>
        <Tag bg="bg-cw-grey-600">CW20</Tag>
        <div className="flex items-center gap-2">
          <img src="/icons/verified.svg" alt="Verified" />
          <p className="text-cw-purple-300">Verified</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-cw-grey-400">Executes</p>
        <p className="text-white">351538</p>
      </div>
      <div className="flex items-end">
        <p className="text-lg">RAW</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-cw-grey-400 mr-4">Instantiated at</p>
        <p className="text-white">2022-05-01 11:21:39</p>
      </div>
      <div className="col-span-2 flex justify-between items-center">
        <p className="text-cw-grey-400">Contract Address</p>
        <p className="text-cw-purple-400">
          {IntlAddress("juno1qsrercqegvs4ye0yqgprqwd6jcdcuj0us66deup")}
        </p>
      </div>
    </div>
  );
};

export default ContractCard;