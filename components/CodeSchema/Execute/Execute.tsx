import React from "react";
import { JSONSchema } from "../../../interfaces/json-schema";
import { recursivePopulateProps } from "../../../utils/schema";
import Expand from "../Expand/Expand";
import ExecuteMessage from "./ExecuteMessage";

interface Props {
  json: JSONSchema;
  isContract: boolean;
}

const Execute: React.FC<Props> = ({ json, isContract }) => {
  const { oneOf, anyOf, definitions } = json as any;
  const [expandedAll, setExpandedAll] = React.useState<boolean | null>(false);

  const messages = oneOf?.length ? oneOf : anyOf || [];

  if (json.properties) json.properties = recursivePopulateProps(json.properties!, definitions);

  return (
    <>
      <Expand expanded={expandedAll} setExpanded={setExpandedAll} />
      <div className="w-full flex flex-col gap-[20px]">
        {messages.map((message: { properties: Record<string, JSONSchema> }, i: number) => {
          return (
            <ExecuteMessage key={i} index={i} isContract={isContract} message={message} definitions={definitions} expandedAll={expandedAll} />
          );
        })}
      </div>
    </>
  );
};

export default Execute;
