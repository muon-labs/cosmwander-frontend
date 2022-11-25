import React, { PropsWithChildren, useEffect, useState } from "react";
import { GitHubIcon, VerifiedIcon } from "../Icons";
import { IntlAddress } from "../../utils/intl";
import { useTheme } from "../../providers/ThemeProvider";
import { CodeDetails } from "../../interfaces/code-details";
import Tag from "../Tag";
import { Chain } from "../../interfaces/chains";
import CodeDetailsSkeletons from "../Skeletons/CodeDetailsSkeleton";

interface Props {
  codeDetails: CodeDetails;
  color?: Chain;
  skeleton?: boolean;
}

const CodeDetails: React.FC<Props> = ({ codeDetails, color, skeleton }) => {
  const { chainColor } = useTheme();
  const pageColor = color ? color : chainColor;

  if (skeleton) return <CodeDetailsSkeletons />;

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
      <div className="col-span-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <Tag bg={`bg-chain-${pageColor}-600 capitalize`}>{pageColor}</Tag>
          {codeDetails.type && <Tag bg="bg-cw-grey-300">{codeDetails.type}</Tag>}
        </div>
        {codeDetails.verified && (
          <div className="flex items-center gap-2">
            <VerifiedIcon color={`fill-chain-${chainColor}-600`} />
            <p className={`text-chain-${chainColor}-200 text-md font-semibold`}>Verified</p>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Code ID</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-${pageColor}-400`}>{codeDetails.code_id}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Creator</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-${pageColor}-400`}>{codeDetails.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Tx Hash</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-${pageColor}-400`}>{codeDetails.tx_hash ? codeDetails.tx_hash : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Checksum</p>
      </div>
      <div className="col-span-4">
        <p className="text-white ">{codeDetails.checksum}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400">Created at</p>
      </div>
      <div className="col-span-4">
        <p className="text-white ">{codeDetails.created_at ? codeDetails.created_at : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Contract type</p>
      </div>
      <div className="col-span-2">
        <p className="text-white ">{codeDetails.type ? codeDetails.type : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission</p>
      </div>
      <div className="col-span-1">
        <p className="text-white ">{codeDetails.permission ? codeDetails.permission : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Version</p>
      </div>
      <div className="col-span-2">
        <p className="text-white ">{codeDetails.version ? codeDetails.version : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission address</p>
      </div>
      <div className="col-span-1">
        <p className={`text-chain-${pageColor}-400`}>{codeDetails.permission_address ? IntlAddress(codeDetails.permission_address) : "-"}</p>
      </div>
      <div className="col-span-1 flex items-center justify-start gap-2">
        <GitHubIcon />
        <p className="text-cw-grey-400 ">GitHub</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-${pageColor}-400`}>{codeDetails.code_ref?.repo_url ? codeDetails.code_ref.repo_url : "-"}</p>
      </div>
    </div>
  );
};

export default CodeDetails;
