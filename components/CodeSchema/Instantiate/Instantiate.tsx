import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { JSONSchema } from "../../../interfaces/json-schema";
import Expand from "../Expand/Expand";
import InstantiateMessage from "./InstantiateMessage";
import { useForm } from "react-hook-form";
import JsonInteraction from "../../JsonInteraction";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json: JSONSchema;
  color: string;
  isContract: boolean;
}

const InstantiateJson = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "InstantiateMsg",
  type: "object",
  required: ["destination_denom", "destination_wallet", "pool_route", "source_denom"],
  properties: {
    destination_denom: {
      type: "string",
    },
    destination_wallet: {
      $ref: "#/definitions/Addr",
    },
    pool_route: {
      type: "array",
      items: {
        $ref: "#/definitions/SwapAmountInRoute",
      },
    },
    source_denom: {
      type: "string",
    },
  },
  definitions: {
    Addr: {
      description:
        "A human readable address.\n\nIn Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.\n\nThis type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.\n\nThis type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.",
      type: "string",
    },
    SwapAmountInRoute: {
      description: "===================== MsgSwapExactAmountIn",
      type: "object",
      required: ["pool_id", "token_out_denom"],
      properties: {
        pool_id: {
          type: "integer",
          format: "uint64",
          minimum: 0.0,
        },
        token_out_denom: {
          type: "string",
        },
      },
    },
  },
};

const Instantiate: React.FC<Props> = ({ json, isContract, color }) => {
  const { definitions } = InstantiateJson as any;

  const [expanded, setExpanded] = React.useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ Instantiate: data }: Record<string, unknown>) => {
    console.log(data);
  };

  return (
    <div className="mt-2 grid grid-cols-1 gap-8 ">
      {isContract ? (
        <ReactJson src={json || {}} indentWidth={2} theme="ashes" />
      ) : (
        <>
          <Expand color={color} setExpanded={setExpanded} />
          <div className="w-full flex flex-col gap-[20px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border border-cw-grey-700 bg-cw-grey-800 rounded-[6px] p-6">
              <JsonInteraction
                index={1}
                register={register}
                name="Instantiate"
                buttonMessage="Instantiate"
                isContract={true}
                properties={(InstantiateJson.properties as Record<string, JSONSchema>) || {}}
                definitions={definitions as Record<string, JSONSchema>}
                expandedAll={expanded}
                color={color}
                bgColor="transparent"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Instantiate;
