import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { ReactNode, useEffect, useState } from "react";
import { Control, FieldValues, UseFormRegister, UseFormRegisterReturn, Validate, ValidationRule } from "react-hook-form";
import { Chain } from "../../interfaces/chains";
import { JSONSchema } from "../../interfaces/json-schema";
import { SimpleButton } from "../Buttons";
import { ArrowRight, MinusIcon, PlusIcon } from "../Icons";
import { BasicInput } from "../Input";
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
  formControl: Control<FieldValues, any>;
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
  // properties = {
  //   amount_per_trade: {
  //     $ref: "#/definitions/Uint128",
  //   },
  //   destination_wallet: {
  //     type: "string",
  //   },
  //   destinations: {
  //     type: "array",
  //     items: {
  //       $ref: "#/definitions/CoinWeight",
  //     },
  //   },
  //   num_trades: {
  //     $ref: "#/definitions/Uint128",
  //   },
  //   router_contract: {
  //     type: "string",
  //   },
  //   source_denom: {
  //     type: "string",
  //   },
  //   strategy_type: {
  //     $ref: "#/definitions/StrategyType",
  //   },
  //   swap_interval: {
  //     $ref: "#/definitions/Duration",
  //   },
  // };
  // definitions = {
  //   CoinWeight: {
  //     type: "object",
  //     required: ["denom", "weight"],
  //     properties: {
  //       denom: {
  //         type: "string",
  //       },
  //       weight: {
  //         $ref: "#/definitions/Uint128",
  //       },
  //     },
  //     additionalProperties: false,
  //   },
  //   Duration: {
  //     description:
  //       "Duration is a delta of time. You can add it to a BlockInfo or Expiration to move that further in the future. Note that an height-based Duration and a time-based Expiration cannot be combined",
  //     oneOf: [
  //       {
  //         type: "object",
  //         required: ["height"],
  //         properties: {
  //           height: {
  //             type: "integer",
  //             format: "uint64",
  //             minimum: 0.0,
  //           },
  //         },
  //         additionalProperties: false,
  //       },
  //       {
  //         description: "Time in seconds",
  //         type: "object",
  //         required: ["time"],
  //         properties: {
  //           time: {
  //             type: "integer",
  //             format: "uint64",
  //             minimum: 0.0,
  //           },
  //         },
  //         additionalProperties: false,
  //       },
  //     ],
  //   },
  //   StrategyType: {
  //     type: "string",
  //     enum: ["linear"],
  //   },
  //   Uint128: {
  //     description:
  //       "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
  //     type: "string",
  //   },
  // };

  console.log({ properties });

  properties = recursivePopulateProps(properties, definitions);

  const propertiesArray = (Object.entries(properties) as unknown) as [string, JSONSchema][];
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(expandedAll);
  }, [expandedAll]);

  const queryButton = isContract ? <SimpleButton className="w-fit self-end py-2 px-9">{buttonMessage}</SimpleButton> : null;

  console.log({ propertiesArray, properties });

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
        <div className="flex flex-col">
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
                <div style={{ paddingLeft: 4, background: "red", display: "flex", flexDirection: "column" }}>
                  
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

function recursivePopulateProps(properties: Record<string, JSONSchema>, definitions: Record<string, JSONSchema>) {
  const propertiesArray = (Object.entries(properties) as unknown) as [string, JSONSchema][];

  propertiesArray.forEach(([param_name, details]) => {
    const type = details.type;
    const ref = details.$ref;

    if (type === "array") {
      const items = details.items;
      if (items) {
        if ((items as JSONSchema).$ref) {
          const refName = (items as JSONSchema).$ref!.split("/").pop();
          properties[param_name].items = definitions[refName as string];
        }
      }
    } else if (ref) {
      const refName = ref.split("/").pop();
      properties[param_name] = definitions[refName as string];
    }
    if (properties[param_name]?.properties) recursivePopulateProps(properties[param_name]?.properties!, definitions);
    if (properties[param_name]?.items?.properties) recursivePopulateProps(properties[param_name]?.items?.properties!, definitions);
  });

  return properties;
}
