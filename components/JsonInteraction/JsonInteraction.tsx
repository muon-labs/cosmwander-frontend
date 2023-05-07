import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { JSONSchema } from "../../interfaces/json-schema";
import { SimpleButton } from "../Buttons";
import { ArrowRight } from "../Icons";
import SimpleInput from "../Input/SImpleInput";
import FieldArray from "./FieldArray";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });
interface Props {
  properties: Record<string, JSONSchema>;
  name: string;
  register: UseFormRegister<FieldValues>;
  definitions: Record<string, JSONSchema>;
  color?: string;
  isContract: boolean;
  buttonMessage: string;
  bgColor?: string;
  response?: Record<string, string>;
  index?: number;
  expandedAll: boolean;
  formControl?: Control<FieldValues, any>;
}

const JsonInteraction: React.FC<Props> = ({
  name,
  buttonMessage,
  isContract,
  properties,
  definitions,
  response,
  color,
  index,
  expandedAll,
  bgColor,
  register,
  formControl,
}) => {
  const propertiesArray = Object.entries(properties) as unknown as [string, JSONSchema][];
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(expandedAll);
  }, [expandedAll]);

  const queryButton = isContract ? <SimpleButton className="w-fit self-end py-2 px-9">{buttonMessage}</SimpleButton> : null;

  return (
    <div
      className={clsx(
        "rounded-[6px] flex flex-col gap-2",
        bgColor === "transparent" && "bg-transparent",
        bgColor === "light" && "bg-cw-grey-800 border border-cw-grey-700 p-6 mt-[20px]",
        bgColor === "dark" && "bg-cw-grey-850 border border-cw-grey-700 p-6 mt-[20px]"
      )}
    >
      <div className="flex flex-col gap-2">
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
            <>{queryButton}</>
          )}
        </div>
        {!propertiesArray.length && response && (
          <div className="flex-1">
            <ReactJson src={response || {}} indentWidth={2} theme="ashes" />
          </div>
        )}
      </div>
      {expanded && (
        <div className="flex flex-col gap-4">
          {propertiesArray.map(([param_name, details], i) => {
            const type = Array.isArray(details.type) ? details.type[0] : details.type;
            const ref = details.$ref;
            if (type === "object" && details.properties)
              return (
                <JsonInteraction
                  key={param_name}
                  buttonMessage={buttonMessage}
                  name={param_name}
                  register={register}
                  properties={details.properties as Record<string, JSONSchema>}
                  definitions={definitions}
                  isContract={isContract}
                  color={color}
                  bgColor={bgColor === "dark" ? "light" : "dark"}
                  expandedAll={expandedAll}
                  formControl={formControl}
                />
              );
            if (["string", "number", "integer"].includes(type as string))
              return (
                <div className="flex justify-between" key={param_name}>
                  <div>
                    {param_name} ({type})
                  </div>
                  <SimpleInput
                    type={["number", "integer"].includes(type as string) ? "number" : "text"}
                    disabled={!isContract}
                    {...register(`${name}.${param_name}`, { valueAsNumber: ["number", "integer"].includes(type as string) })}
                    placeholder={`${param_name}`}
                  />
                </div>
              );
            if ("array" === (type as string))
              return (
                <div className="flex flex-col gap-4">
                  <FieldArray
                    key={`${name}.${param_name}`}
                    buttonMessage={buttonMessage}
                    name={`${name}.${param_name}`}
                    register={register}
                    properties={details.properties as Record<string, JSONSchema>}
                    details={details}
                    definitions={definitions}
                    isContract={isContract}
                    color={color}
                    bgColor={bgColor === "dark" ? "light" : "dark"}
                    expandedAll={expandedAll}
                    formControl={formControl}
                  />
                </div>
              );
            if (type === "boolean") return <></>;
            return <p key={param_name}>no-type</p>;
          })}
          <>
            {propertiesArray.length && bgColor === "transparent" && expanded && isContract ? (
              <>
                <SimpleButton className="w-fit self-end py-2 px-9 my-4">{buttonMessage}</SimpleButton>
                <div>{response && <ReactJson src={response || {}} indentWidth={2} theme="ashes" />}</div>
              </>
            ) : null}
          </>
        </div>
      )}
    </div>
  );
};

export default JsonInteraction;
