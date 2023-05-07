import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { IntlAddress } from "../../utils/intl";
import { VerifiedIcon } from "../Icons";
import Tag from "../Tag";
import { useRouter } from "next/router";
import { useCosmos } from "~/providers/CosmosProvider";
import Link from "next/link";

interface Props {
  contract?: any;
}

const ContractCard: React.FC<HTMLAttributes<HTMLElement> & Props> = ({ className = "", contract }) => {
  const { chainName } = useCosmos();
  const { push: goToPage } = useRouter();

  return (
    <div
      className={clsx(
        "w-full min-h-[9rem] grid grid-cols-1 md:grid-cols-2 bg-cw-grey-800 rounded-lg border border-cw-grey-700 p-4 text-sm",
        className
      )}
    >
      <div className="flex justify-start items-center gap-2">
        <Tag bg={`bg-chain-400 capitalize`}>{chainName.replace("testnet", " Testnet")}</Tag>
        {/* <Tag bg="bg-cw-grey-300">CW20</Tag> */}
        <div className="flex items-center gap-2">
          {/* <VerifiedIcon color={`fill-chain-${chainColor}-600`} />
          <p className={`text-chain-${chainColor}-200 text-md font-semibold`}>Verified</p> */}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-cw-grey-400">Height</p>
        <p className="text-white">{contract?.height}</p>
      </div>
      <div className="flex items-end">
        <p className="text-lg">{}</p>
      </div>
      <div className="flex items-center justify-between overflow-auto">
        <p className="text-cw-grey-400 mr-4">Hash</p>
        <p className="text-white truncate">{contract?.hash}</p>
      </div>
      <div className="col-span-2 flex justify-between items-center">
        <p className="text-cw-grey-400">Contract Address</p>
        <Link href={`/${chainName}/contract/${contract?.contractAddr}`} className={`text-chain-400 cursor-pointer`}>
          {contract && IntlAddress(contract?.contractAddr)}
        </Link>
      </div>
    </div>
  );
};

export default ContractCard;
