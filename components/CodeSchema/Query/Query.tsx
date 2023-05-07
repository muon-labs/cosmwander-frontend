import React from "react";
import { JSONSchema } from "../../../interfaces/json-schema";
import QueryMessage from "./QueryMessage";
import Expand from "../Expand/Expand";

interface Props {
  json: JSONSchema;
  isContract: boolean;
}

const Query: React.FC<Props> = ({ json, isContract }) => {
  const { oneOf, anyOf, definitions } = json as any;
  const [expandedAll, setExpandedAll] = React.useState<boolean | null>(false);

  const messages = oneOf?.length ? oneOf : anyOf || [];

  if (!messages.length) {
    return (
      <>
        <Expand expanded={expandedAll} setExpanded={setExpandedAll} />
      </>
    );
  }

  return (
    <>
      <Expand expanded={expandedAll} setExpanded={setExpandedAll} />
      <div className="w-full flex flex-col gap-[20px]">
        {messages.map((message: { properties: Record<string, JSONSchema> }, i: number) => {
          return (
            <QueryMessage key={i} index={i} isContract={isContract} message={message} definitions={definitions} expandedAll={expandedAll} />
          );
        })}
      </div>
    </>
  );
};

export default Query;
