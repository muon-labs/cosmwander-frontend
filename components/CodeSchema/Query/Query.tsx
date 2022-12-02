import React from "react";
import { Chain } from "../../../interfaces/chains";
import { JSONSchema } from "../../../interfaces/json-schema";
import QueryMessage from "./QueryMessage";
import Expand from "../Expand/Expand";

interface Props {
  json: JSONSchema;
  color: Chain;
  isContract: boolean;
}

const Query: React.FC<Props> = ({ json, color, isContract }) => {
  const { oneOf, anyOf, definitions } = json as any;
  const [expandedAll, setExpandedAll] = React.useState<boolean | null>(false);

  const messages = oneOf?.length ? oneOf : anyOf || [];

  return (
    <>
      <Expand color={color} expanded={expandedAll} setExpanded={setExpandedAll} />
      <div className="w-full flex flex-col gap-[20px]">
        {messages.map((message: { properties: Record<string, JSONSchema> }, i: number) => {
          return (
            <QueryMessage
              key={i}
              index={i}
              isContract={isContract}
              message={message}
              definitions={definitions}
              color={color}
              expandedAll={expandedAll}
            />
          );
        })}
      </div>
    </>
  );
};

export default Query;
