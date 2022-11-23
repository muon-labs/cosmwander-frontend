import dynamic from "next/dynamic";
import React from "react";
import { Chain } from "../../../interfaces/chains";
import { JSONSchema } from "../../../interfaces/json-schema";
import { SimpleButton } from "../../Buttons";
import { MinusIcon, PlusIcon } from "../../Icons";
import JsonInteraction from "../../JsonInteraction";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json: JSONSchema;
  color: Chain;
}

const test = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "QueryMsg",
  oneOf: [
    {
      type: "object",
      required: ["get_config"],
      properties: {
        get_config: {
          type: "object",
        },
      },
      additionalProperties: false,
    },
    {
      type: "object",
      required: ["get_route"],
      properties: {
        get_route: {
          type: "object",
          required: ["destination_denom", "source_denom"],
          properties: {
            destination_denom: {
              type: "string",
            },
            source_denom: {
              type: "string",
            },
            get_route: {
              type: "object",
              required: ["destination_denom", "source_denom"],
              properties: {
                destination_denom: {
                  type: "string",
                },
                source_denom: {
                  type: "string",
                },
                get_route: {
                  type: "object",
                  required: ["destination_denom", "source_denom"],
                  properties: {
                    destination_denom: {
                      type: "string",
                    },
                    source_denom: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
      additionalProperties: false,
    },
  ],
};

const Query: React.FC<Props> = ({ json, color }) => {
  const { oneOf, anyOf, definitions } = test as any;

  const messages = oneOf?.length ? oneOf : anyOf || [];

  return (
    <>
      <div className="w-full mb-[20px] flex gap-[10px] items-center justify-end">
        <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
          <PlusIcon color={`fill-chain-${color}-600`} />
          <p className="text-sm">Expand all</p>
        </button>
        <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
          <MinusIcon color={`fill-chain-${color}-600`} />
          <p className="text-sm">Reset</p>
        </button>
      </div>
      <div className="w-full flex flex-col gap-[20px]">
        {" "}
        {messages.map((message: { properties: Record<string, JSONSchema> }, i: number) => {
          const [[name, details]] = Object.entries(message.properties as Record<string, JSONSchema>);

          return (
            <div key={name} className="flex flex-col gap-4 border border-cw-grey-700 bg-cw-grey-800 rounded-[6px] p-6">
              <JsonInteraction
                index={i + 1}
                name={name}
                properties={(details.properties as Record<string, JSONSchema>) || {}}
                definitions={definitions as Record<string, JSONSchema>}
                expanded={true}
                color={color}
                bgColor="transparent"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Query;
