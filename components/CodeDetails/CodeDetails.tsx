import React from "react";
import { GitHubIcon, VerifiedIcon } from "../Icons";
import Tag from "../Tag";
import { IntlAddress } from "../../utils/intl";

const CodeDetails: React.FC = () => {
  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
      <div className="col-span-4 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <Tag bg="bg-cw-light-red">Juno</Tag>
          <Tag bg="bg-cw-grey-600">CW20</Tag>
        </div>
        <div className="flex items-center gap-2">
          <VerifiedIcon />
          <p className="text-cw-purple-300">Verified</p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Code ID</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">123</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Creator</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">juno1dxc3qcsaddsak524yerslp29gqf65fzuqcg5ju</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Tx Hash</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">F47200C02D8A9B1CD374CE11E80D027CA4A99006B108DE86E326BC29EA197C0F</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Checksum</p>
      </div>
      <div className="col-span-3">
        <p className="text-white ">1</p>
      </div>
      <div className="col-span-1" />
      <div className="col-span-3">
        <p className="text-white ">2022-10-01 10:08:38</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Contract type</p>
      </div>
      <div className="col-span-1">
        <p className="text-white ">CW20</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission</p>
      </div>
      <div className="col-span-1">
        <p className="text-white ">????</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Version</p>
      </div>
      <div className="col-span-1">
        <p className="text-white ">1</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-grey-400 ">Permission address</p>
      </div>
      <div className="col-span-1">
        <p className="text-cw-purple-400 ">{IntlAddress("juno1dxc3qcsaddsak524yerslp29gqf65fzuqcg5ju")}</p>
      </div>
      <div className="col-span-1 flex items-center justify-start gap-2">
        <GitHubIcon />
        <p className="text-cw-grey-400 ">GitHub</p>
      </div>
      <div className="col-span-3">
        <p className="text-cw-purple-400 ">F47200C02D8A9B1CD374CE11E80D027CA4A99006B108DE86E326BC29EA197C0F</p>
      </div>
    </div>
  );
};

export default CodeDetails;
