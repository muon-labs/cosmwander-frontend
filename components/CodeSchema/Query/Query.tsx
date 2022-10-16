import dynamic from "next/dynamic";
import React from "react";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json?: Record<string, unknown>;
}

const Query: React.FC<Props> = ({ json }) => {
  return (
    <div>
      <ReactJson src={json || {}} indentWidth={2} theme="ashes" />
    </div>
  );
};

export default Query;
