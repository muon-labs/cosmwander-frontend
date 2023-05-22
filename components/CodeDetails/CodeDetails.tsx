import React from "react";
import { GitHubIcon, VerifiedIcon } from "../Icons";
import { IntlAddress } from "../../utils/intl";
import { CodeDetails } from "../../interfaces/code-details";
import Tag from "../Tag";
import CodeDetailsSkeletons from "../Skeletons/CodeDetailsSkeleton";
import { SimpleButton } from "../Buttons";
import { useRouter } from "next/router";
import { useCosmos } from "~/providers/CosmosProvider";

interface Props {
  codeDetails: CodeDetails;
  skeleton?: boolean;
}

const CodeDetails: React.FC<Props> = ({ codeDetails, skeleton }) => {
  const { chainName } = useCosmos();
  const { push: goToPage } = useRouter();

  if (skeleton) return <CodeDetailsSkeletons />;

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
      <div className="col-span-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <Tag bg={`bg-chain-600 capitalize`}>{chainName.replace("testnet", " Testnet")}</Tag>
          {/* {codeDetails.type && <Tag bg="bg-cw-grey-300">{codeDetails.type}</Tag>} */}
        </div>
        {codeDetails.verified ? (
          <div className="flex items-center gap-2">
            <VerifiedIcon color={`fill-chain-600`} />
            <p className={`text-chain-200 text-md font-semibold`}>Verified</p>
          </div>
        ) : (
          <SimpleButton
            className="px-4 py-1"
            onClick={() => goToPage(`/verify?codeId=${codeDetails.chainId}&chainId=${chainName}&creator=${codeDetails.creator}`)}
          >
            Verify
          </SimpleButton>
        )}
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Code ID</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{codeDetails.codeId}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Creator</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{codeDetails.creator}</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Tx Hash</p>
      </div>
      <div className="col-span-4">
        <p className={`text-chain-400`}>{codeDetails.txHash}</p>
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
        <p className="text-white ">{codeDetails.createdAt}</p>
      </div>
      {/* <div className="col-span-1">
        <p className="text-cw-grey-400 ">Contract Name</p>
      </div>
      <div className="col-span-2">
        <p className="text-white ">{codeDetails.name ? codeDetails.name : "-"}</p>
      </div> */}
      {/*  <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission</p>
      </div>
      <div className="col-span-1">
        <p className="text-white ">{codeDetails.permission ? codeDetails.permission : "-"}</p>
      </div> */}
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Version</p>
      </div>
      <div className="col-span-2">
        <p className="text-white ">{codeDetails.version ? codeDetails.version : "-"}</p>
      </div>
      {/*  <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission address</p>
      </div>
      <div className="col-span-1">
        <p className={`text-chain-400`}>{codeDetails.permission_address ? IntlAddress(codeDetails.permission_address) : "-"}</p>
      </div> */}
      {codeDetails.codeRef?.repo_url ? (
        <>
          <div className="col-span-1 flex items-center justify-start gap-2">
            <GitHubIcon />
            <p className="text-cw-grey-400 ">GitHub</p>
          </div>
          <div className="col-span-4">
            <p className={`text-chain-400`}>{codeDetails.codeRef?.repo_url ? codeDetails.codeRef.repo_url : "-"}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CodeDetails;
