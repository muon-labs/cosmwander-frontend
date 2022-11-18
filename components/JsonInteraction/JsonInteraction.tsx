import clsx from "clsx";
import React, { ReactNode } from "react";
import { Chain } from "../../interfaces/chains";
import { JSONSchema } from "../../interfaces/json-schema";
import { ArrowRight, MinusIcon, PlusIcon } from "../Icons";
import { BasicInput } from "../Input";
import SimpleInput from "../Input/SImpleInput";

interface Props {
  properties: Record<string, JSONSchema>;
  name: string;
  definitions: Record<string, JSONSchema>;
  color?: Chain;
  bgColor?: string;
  index?: number;
  expanded?: boolean;
}

const JsonInteraction: React.FC<Props> = ({ name, properties, definitions, color, index, expanded, bgColor }) => {
  const propertiesArray = Object.entries(properties) as unknown as [string, JSONSchema][];

  return (
    <div
      className={clsx(
        "rounded-[6px] flex flex-col gap-2 mt-[20px]",
        bgColor === "transparent" && "bg-transparent",
        bgColor === "light" && "bg-cw-grey-800 border border-cw-grey-700 p-6",
        bgColor === "dark" && "bg-cw-grey-850 border border-cw-grey-700 p-6"
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          {index ? (
            <span className="font-bold text-xs bg-cw-grey-300 text-cw-grey-850 rounded-[3px] flex items-center justify-center min-w-[22px] min-h-[22px]">
              {index}
            </span>
          ) : (
            <div className="bg-cw-grey-300 rounded-[3px] h-3 w-3" />
          )}
          {name}
        </div>
        {propertiesArray.length ? (
          <button className="min-w-[40px] min-h-[40px] flex items-center justify-center border border-cw-grey-600 rounded-[6px] bg-cw-grey-950">
            <ArrowRight
              color={`fill-chain-${color}-600`}
              className={clsx("transition duration-75 ease-in-out", expanded ? "rotate-[90deg]" : "")}
            />
          </button>
        ) : (
          ""
        )}
      </div>

      {propertiesArray.map(([name, details], i) => {
        if (details.type === "object" && details.properties)
          return (
            <JsonInteraction
              name={name}
              properties={details.properties as Record<string, JSONSchema>}
              definitions={definitions}
              color={color}
              bgColor={bgColor === "dark" ? "light" : "dark"}
              expanded={expanded}
            />
          );
        if (["string", "number", "integer", "array"].includes(details.type as string))
          return (
            <div className="flex justify-between">
              <div>
                {name}({details.type})
              </div>
              <SimpleInput placeholder={`${name}`} />
            </div>
          );
        if (details.type === "boolean") return <></>;
        return <p key={name}>no-type</p>;
      })}
    </div>
  );
};

export default JsonInteraction;
