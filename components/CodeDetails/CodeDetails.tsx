import React from "react";
import { GitHubIcon, VerifiedIcon } from "../Icons";
import { IntlAddress } from "../../utils/intl";
import { useClient } from "../../providers/ClientProvider";
import { CodeDetails } from "../../interfaces/code-details";
import Tag from "../Tag";

interface Props {
  codeDetails: CodeDetails | null;
}

const CodeDetails: React.FC<Props> = ({ codeDetails }) => {
  const { chain } = useClient();

  if (!codeDetails) return null;

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
      <div className="col-span-4 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <Tag bg={`bg-chain-${chain}-600 capitalize`}>{chain}</Tag>
          {codeDetails.type && <Tag bg="bg-cw-grey-600">{codeDetails.type}</Tag>}
        </div>
        {codeDetails.verified && (
          <div className="flex items-center gap-2">
            <VerifiedIcon />
            <p className="text-cw-purple-300">Verified</p>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Code ID</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">{codeDetails.code_id}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Creator</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">{codeDetails.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Tx Hash</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">{codeDetails.tx_hash ? codeDetails.tx_hash : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Checksum</p>
      </div>
      <div className="col-span-3">
        <p className="text-white ">{codeDetails.checksum}</p>
      </div>
      <div className="col-span-1" />
      <div className="col-span-3">
        <p className="text-white ">{codeDetails.created_at ? codeDetails.created_at : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Contract type</p>
      </div>
      <div className="col-span-1">
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
      <div className="col-span-1">
        <p className="text-white ">{codeDetails.version ? codeDetails.version : "-"}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission address</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-purple-400 ">{codeDetails.permission_address ? IntlAddress(codeDetails.permission_address) : "-"}</p>
      </div>
      <div className="col-span-1 flex items-center justify-start gap-2">
        <GitHubIcon />
        <p className="text-cw-grey-400 ">GitHub</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">{codeDetails.code_ref?.repo_url ? codeDetails.code_ref.repo_url : "-"}</p>
      </div>
    </div>
  );
};

export default CodeDetails;
