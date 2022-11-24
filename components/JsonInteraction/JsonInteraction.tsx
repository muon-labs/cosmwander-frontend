import clsx from "clsx";
import React, { ReactNode, useEffect, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Chain } from "../../interfaces/chains";
import { JSONSchema } from "../../interfaces/json-schema";
import { SimpleButton } from "../Buttons";
import { ArrowRight, MinusIcon, PlusIcon } from "../Icons";
import { BasicInput } from "../Input";
import SimpleInput from "../Input/SImpleInput";

interface Props {
  properties: Record<string, JSONSchema>;
  name: string;
  register: UseFormRegister<FieldValues>;
  definitions: Record<string, JSONSchema>;
  color?: Chain;
  isContract: boolean;
  bgColor?: string;
  index?: number;
  expandedAll: boolean;
}

const JsonInteraction: React.FC<Props> = ({ name, isContract, properties, definitions, color, index, expandedAll, bgColor, register }) => {
  const propertiesArray = Object.entries(properties) as unknown as [string, JSONSchema][];
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(expandedAll);
  }, [expandedAll]);

  const queryButton = isContract ? <SimpleButton className="w-fit self-end py-2 px-9">Query</SimpleButton> : null;

  return (
    <div
      className={clsx(
        "rounded-[6px] flex flex-col gap-2 ",
        bgColor === "transparent" && "bg-transparent",
        bgColor === "light" && "bg-cw-grey-800 border border-cw-grey-700 p-6 mt-[20px]",
        bgColor === "dark" && "bg-cw-grey-850 border border-cw-grey-700 p-6 mt-[20px]"
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
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center border border-cw-grey-600 rounded-[6px] bg-cw-grey-950"
          >
            <ArrowRight
              color={`fill-chain-${color}-600`}
              className={clsx("transition duration-75 ease-in-out", expanded ? "rotate-[90deg]" : "")}
            />
          </button>
        ) : (
          queryButton
        )}
      </div>

      {expanded &&
        propertiesArray.map(([param_name, details], i) => {
          if (details.type === "object" && details.properties)
            return (
              <JsonInteraction
                key={param_name}
                name={param_name}
                register={register}
                properties={details.properties as Record<string, JSONSchema>}
                definitions={definitions}
                isContract={isContract}
                color={color}
                bgColor={bgColor === "dark" ? "light" : "dark"}
                expandedAll={expandedAll}
              />
            );
          if (["string", "number", "integer", "array"].includes(details.type as string))
            return (
              <div className="flex justify-between" key={param_name}>
                <div>
                  {param_name} ({details.type})
                </div>
                <SimpleInput {...register(`${name}.${param_name}`)} placeholder={`${param_name}`} />
              </div>
            );
          if (details.type === "boolean") return <></>;
          return <p key={param_name}>no-type</p>;
        })}
      {propertiesArray.length && bgColor === "transparent" && expanded && isContract ? (
        <SimpleButton className="w-fit self-end py-2 px-9 mt-4">Query</SimpleButton>
      ) : (
        ""
      )}
    </div>
  );
};

export default JsonInteraction;
