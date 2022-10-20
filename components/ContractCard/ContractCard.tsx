import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { IntlAddress } from "../../utils/intl";
import { VerifiedIcon } from "../Icons";
import Tag from "../Tag";
import { useClient } from "../../providers/ClientProvider";

const ContractCard: React.FC<HTMLAttributes<HTMLElement>> = ({ className = "" }) => {
  const { chain } = useClient();
  return (
    <div
      className={clsx(
        "w-full min-h-[9rem] grid grid-cols-1 md:grid-cols-2 bg-cw-grey-800 rounded-lg border border-cw-grey-700 p-4 text-sm",
        className
      )}
    >
      <div className="flex justify-start items-center gap-2">
        <Tag bg="bg-cw-light-red">Juno</Tag>
        <Tag bg="bg-cw-grey-300">CW20</Tag>
        <div className="flex items-center gap-2">
          <VerifiedIcon color={`fill-chain-${chain}-600`} />
          <p className={`text-chain-${chain}-200 text-md font-semibold`}>Verified</p>
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
        <p className={`text-chain-${chain}-400`}>{IntlAddress("juno1qsrercqegvs4ye0yqgprqwd6jcdcuj0us66deup")}</p>
      </div>
    </div>
  );
};

export default ContractCard;
