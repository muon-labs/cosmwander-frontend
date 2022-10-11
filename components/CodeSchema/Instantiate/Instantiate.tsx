import dynamic from "next/dynamic";
import React from "react";
import Tag from "../../Tag";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json: any;
}

const Instantiate: React.FC<Props> = ({ json }) => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-8 ">
      {/* <div className="flex gap-8">
        <div className="flex items-center gap-4  text-cw-grey-600">
          <p>Code ID</p>
          <Tag border="border boder-cw-grey-400" bg="bg-cw-grey-950" text="text-cw-grey-600">
            {codeId}
          </Tag>
        </div>
        <div className="text-cw-grey-600">
          <p>Raw message preview</p>
        </div>
      </div> */}
      <div>
        <ReactJson src={json} indentWidth={2} theme="ashes" />
      </div>
    </div>
  );
};

export default Instantiate;
