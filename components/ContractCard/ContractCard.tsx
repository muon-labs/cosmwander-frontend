import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { IntlAddress } from "../../utils/intl";
import { VerifiedIcon } from "../Icons";
import Tag from "../Tag";
import { useTheme } from "../../providers/ThemeProvider";
import { useWallet } from "../../providers/WalletProvider";
import { useRouter } from "next/router";

interface Props {
  contract?: any;
}

const ContractCard: React.FC<HTMLAttributes<HTMLElement> & Props> = ({ className = "", contract }) => {
  const { chainColor } = useTheme();
  const { chain } = useWallet();
  const { push: goToPage } = useRouter();

  return (
    <div
      className={clsx(
        "w-full min-h-[9rem] grid grid-cols-1 md:grid-cols-2 bg-cw-grey-800 rounded-lg border border-cw-grey-700 p-4 text-sm",
        className
      )}
    >
      <div className="flex justify-start items-center gap-2">
        <Tag bg={`bg-chain-${chainColor}-400 capitalize`}>{chainColor}</Tag>
        {/* <Tag bg="bg-cw-grey-300">CW20</Tag> */}
        <div className="flex items-center gap-2">
          {/* <VerifiedIcon color={`fill-chain-${chainColor}-600`} />
          <p className={`text-chain-${chainColor}-200 text-md font-semibold`}>Verified</p> */}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-cw-grey-400">Executes</p>
        <p className="text-white">-</p>
      </div>
      <div className="flex items-end">
        <p className="text-lg">{contract?.label}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-cw-grey-400 mr-4">Instantiated at</p>
        <p className="text-white">-</p>
      </div>
      <div className="col-span-2 flex justify-between items-center">
        <p className="text-cw-grey-400">Contract Address</p>
        <p
          className={`text-chain-${chainColor}-400 cursor-pointer`}
          onClick={() => goToPage(`/${chain?.chainName.toLowerCase()}/contract/${contract?.address}`)}
        >
          {contract && IntlAddress(contract?.address)}
        </p>
      </div>
    </div>
  );
};

export default ContractCard;
