import React from "react";
import { Chain } from "../../../interfaces/chains";
import { JSONSchema } from "../../../interfaces/json-schema";
import Expand from "../Expand/Expand";
import ExecuteMessage from "./ExecuteMessage";

interface Props {
  json: JSONSchema;
  color: Chain;
  isContract: boolean;
}

const Execute: React.FC<Props> = ({ json, color, isContract }) => {
  const { oneOf, anyOf, definitions } = json as any;
  const [expanded, setExpanded] = React.useState(false);

  const messages = oneOf?.length ? oneOf : anyOf || [];

  return (
    <>
      <Expand color={color} setExpanded={setExpanded} />
      <div className="w-full flex flex-col gap-[20px]">
        {messages.map((message: { properties: Record<string, JSONSchema> }, i: number) => {
          return (
            <ExecuteMessage
              key={i}
              index={i}
              isContract={isContract}
              message={message}
              definitions={definitions}
              color={color}
              expandedAll={expanded}
            />
          );
        })}
      </div>
    </>
  );
};

export default Execute;
