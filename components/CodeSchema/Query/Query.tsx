import dynamic from "next/dynamic";
import React from "react";
import { Chain } from "../../../interfaces/chains";
import JsonInteraction from "../../JsonInteraction";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json?: Record<string, unknown>;
  color: Chain;
}

const Query: React.FC<Props> = ({ json, color }) => {
  console.log(json);
  return <JsonInteraction json={json || {}} color={color} />;
};

export default Query;
