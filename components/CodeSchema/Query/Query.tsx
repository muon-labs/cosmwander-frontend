import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Chain } from "../../../interfaces/chains";
import { JSONSchema } from "../../../interfaces/json-schema";
import QueryMessage from "./QueryMessage";
import Expand from "../Expand/Expand";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json: JSONSchema;
  color: Chain;
  isContract: boolean;
}
const query = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "QueryMsg",
  oneOf: [
    {
      description: "Shows proxy wallet address of unclaimed wallets which has not been removed due to expiration Returns UnclaimedWalletList",
      type: "object",
      required: ["unclaimed_govec_wallets"],
      properties: {
        unclaimed_govec_wallets: {
          type: "object",
          properties: {
            limit: {
              type: ["integer", "null"],
              format: "uint32",
              minimum: 0.0,
            },
            start_after: {
              type: ["string", "null"],
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      type: "object",
      required: ["pending_govec_claim_wallets"],
      properties: {
        pending_govec_claim_wallets: {
          type: "object",
          properties: {
            limit: {
              type: ["integer", "null"],
              format: "uint32",
              minimum: 0.0,
            },
            start_after: {
              type: ["string", "null"],
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      description: "Returns the expiration date for claiming Govec if not yet claimed or expired",
      type: "object",
      required: ["claim_expiration"],
      properties: {
        claim_expiration: {
          type: "object",
          required: ["wallet"],
          properties: {
            wallet: {
              type: "string",
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      description: "Total wallets created in this contract",
      type: "object",
      required: ["total_created"],
      properties: {
        total_created: {
          type: "object",
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      type: "object",
      required: ["code_id"],
      properties: {
        code_id: {
          type: "object",
          required: ["ty"],
          properties: {
            ty: {
              $ref: "#/definitions/CodeIdType",
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      description: "Returns the fees required to create a wallet and claim govec Fee goes to the DAO",
      type: "object",
      required: ["fees"],
      properties: {
        fees: {
          type: "object",
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      description: "Returns the address of the Govec Voting Tokens Contract",
      type: "object",
      required: ["govec_addr"],
      properties: {
        govec_addr: {
          type: "object",
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    {
      description: "Returns the address of the DAO which holds the admin role of this contract",
      type: "object",
      required: ["dao_addr"],
      properties: {
        dao_addr: {
          type: "object",
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  ],
  definitions: {
    CodeIdType: {
      type: "string",
      enum: ["proxy", "multisig"],
    },
  },
};

const Query: React.FC<Props> = ({ json, color, isContract }) => {
  const { oneOf, anyOf, definitions } = query as any;
  const [expanded, setExpanded] = React.useState(false);

  const messages = oneOf?.length ? oneOf : anyOf || [];

  return (
    <>
      <Expand color={color} setExpanded={setExpanded} />
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
              expandedAll={expanded}
            />
          );
        })}
      </div>
    </>
  );
};

export default Query;
