import React from "react";
import Tag from "../../Tag";

const Instantiate: React.FC = () => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-8 ">
      <div className="flex gap-8">
        <div className="flex items-center gap-4  text-cw-grey-600">
          <p>Code ID</p>
          <Tag border="border boder-cw-grey-400" bg="bg-cw-grey-950" text="text-cw-grey-600">
            951
          </Tag>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="text-cw-grey-600">
          <p>Raw message preview</p>
        </div>
      </div>
    </div>
  );
};

export default Instantiate;
