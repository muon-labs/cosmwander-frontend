import React, { useMemo, useState } from "react";
import { CodeDetails } from "../../interfaces/code-details";
import { JSONSchema } from "../../interfaces/json-schema";
import { useTheme } from "../../providers/ThemeProvider";
import { useWallet } from "../../providers/WalletProvider";
import { IntlAddress } from "../../utils/intl";
import { GroupButtons, OutlineButton, SimpleButton } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Execute from "./Execute";
import Instantiate from "./Instantiate";
import { ExecuteMsgBuilder, InstantiateMsgBuilder, QueryMsgBuilder } from "./MsgBuilder";
import Query from "./Query";

interface Props {
  codeDetails?: CodeDetails;
  color?: string;
  contractAddr?: string;
  skeleton?: boolean;
  init_msg?: JSONSchema;
}

const CodeSchema: React.FC<Props> = ({ contractAddr, init_msg, codeDetails, color, skeleton }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const { chainColor } = useTheme();
  const { connectWallet, address, disconnectWallet } = useWallet();
  const pageColor = color ? color : chainColor;

  console.log({codeDetails})

  if (codeDetails) codeDetails.full_schema = {
    "contract_name": "pf-dca",
    "contract_version": "0.1.0",
    "idl_version": "1.0.0",
    "instantiate": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "InstantiateMsg",
      "type": "object",
      "required": [
        "amount_per_trade",
        "destination_wallet",
        "destinations",
        "num_trades",
        "router_contract",
        "source_denom",
        "strategy_type",
        "swap_interval"
      ],
      "properties": {
        "amount_per_trade": {
          "$ref": "#/definitions/Uint128"
        },
        "destination_wallet": {
          "type": "string"
        },
        "destinations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CoinWeight"
          }
        },
        "num_trades": {
          "$ref": "#/definitions/Uint128"
        },
        "router_contract": {
          "type": "string"
        },
        "source_denom": {
          "type": "string"
        },
        "strategy_type": {
          "$ref": "#/definitions/StrategyType"
        },
        "swap_interval": {
          "$ref": "#/definitions/Duration"
        }
      },
      "additionalProperties": false,
      "definitions": {
        "CoinWeight": {
          "type": "object",
          "required": [
            "denom",
            "weight"
          ],
          "properties": {
            "denom": {
              "type": "string"
            },
            "weight": {
              "$ref": "#/definitions/Uint128"
            }
          },
          "additionalProperties": false
        },
        "Duration": {
          "description": "Duration is a delta of time. You can add it to a BlockInfo or Expiration to move that further in the future. Note that an height-based Duration and a time-based Expiration cannot be combined",
          "oneOf": [
            {
              "type": "object",
              "required": [
                "height"
              ],
              "properties": {
                "height": {
                  "type": "integer",
                  "format": "uint64",
                  "minimum": 0.0
                }
              },
              "additionalProperties": false
            },
            {
              "description": "Time in seconds",
              "type": "object",
              "required": [
                "time"
              ],
              "properties": {
                "time": {
                  "type": "integer",
                  "format": "uint64",
                  "minimum": 0.0
                }
              },
              "additionalProperties": false
            }
          ]
        },
        "StrategyType": {
          "type": "string",
          "enum": [
            "linear"
          ]
        },
        "Uint128": {
          "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
          "type": "string"
        }
      }
    },
    "execute": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "ExecuteMsg",
      "oneOf": [
        {
          "type": "object",
          "required": [
            "perform_dca"
          ],
          "properties": {
            "perform_dca": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "pause_dca"
          ],
          "properties": {
            "pause_dca": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "resume_dca"
          ],
          "properties": {
            "resume_dca": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "cancel_dca"
          ],
          "properties": {
            "cancel_dca": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        }
      ]
    },
    "query": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "QueryMsg",
      "oneOf": [
        {
          "type": "string",
          "enum": [
            "get_source_funds"
          ]
        },
        {
          "type": "object",
          "required": [
            "get_upcoming_swap"
          ],
          "properties": {
            "get_upcoming_swap": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "get_all_upcoming_swaps"
          ],
          "properties": {
            "get_all_upcoming_swaps": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "get_all_funds"
          ],
          "properties": {
            "get_all_funds": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "config"
          ],
          "properties": {
            "config": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "required": [
            "state"
          ],
          "properties": {
            "state": {
              "type": "object",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        }
      ]
    },
    "migrate": null,
    "sudo": null,
    "responses": {
      "config": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "DcaConfig",
        "type": "object",
        "required": [
          "amount_per_trade",
          "destination_wallet",
          "destinations",
          "num_trades",
          "owner",
          "router_contract",
          "source_denom",
          "strategy_type",
          "swap_interval"
        ],
        "properties": {
          "amount_per_trade": {
            "$ref": "#/definitions/Uint128"
          },
          "destination_wallet": {
            "type": "string"
          },
          "destinations": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/CoinWeight"
            }
          },
          "num_trades": {
            "$ref": "#/definitions/Uint128"
          },
          "owner": {
            "type": "string"
          },
          "router_contract": {
            "type": "string"
          },
          "source_denom": {
            "type": "string"
          },
          "strategy_type": {
            "$ref": "#/definitions/StrategyType"
          },
          "swap_interval": {
            "$ref": "#/definitions/Duration"
          }
        },
        "additionalProperties": false,
        "definitions": {
          "CoinWeight": {
            "type": "object",
            "required": [
              "denom",
              "weight"
            ],
            "properties": {
              "denom": {
                "type": "string"
              },
              "weight": {
                "$ref": "#/definitions/Uint128"
              }
            },
            "additionalProperties": false
          },
          "Duration": {
            "description": "Duration is a delta of time. You can add it to a BlockInfo or Expiration to move that further in the future. Note that an height-based Duration and a time-based Expiration cannot be combined",
            "oneOf": [
              {
                "type": "object",
                "required": [
                  "height"
                ],
                "properties": {
                  "height": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              },
              {
                "description": "Time in seconds",
                "type": "object",
                "required": [
                  "time"
                ],
                "properties": {
                  "time": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              }
            ]
          },
          "StrategyType": {
            "type": "string",
            "enum": [
              "linear"
            ]
          },
          "Uint128": {
            "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
            "type": "string"
          }
        }
      },
      "get_all_funds": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Array_of_Coin",
        "type": "array",
        "items": {
          "$ref": "#/definitions/Coin"
        },
        "definitions": {
          "Coin": {
            "type": "object",
            "required": [
              "amount",
              "denom"
            ],
            "properties": {
              "amount": {
                "$ref": "#/definitions/Uint128"
              },
              "denom": {
                "type": "string"
              }
            }
          },
          "Uint128": {
            "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
            "type": "string"
          }
        }
      },
      "get_all_upcoming_swaps": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Array_of_UpcomingSwapResponse",
        "type": "array",
        "items": {
          "$ref": "#/definitions/UpcomingSwapResponse"
        },
        "definitions": {
          "UpcomingSwapResponse": {
            "type": "object",
            "required": [
              "can_execute",
              "next_swap"
            ],
            "properties": {
              "can_execute": {
                "type": "boolean"
              },
              "next_swap": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          }
        }
      },
      "get_source_funds": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Coin",
        "type": "object",
        "required": [
          "amount",
          "denom"
        ],
        "properties": {
          "amount": {
            "$ref": "#/definitions/Uint128"
          },
          "denom": {
            "type": "string"
          }
        },
        "definitions": {
          "Uint128": {
            "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
            "type": "string"
          }
        }
      },
      "get_upcoming_swap": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "UpcomingSwapResponse",
        "type": "object",
        "required": [
          "can_execute",
          "next_swap"
        ],
        "properties": {
          "can_execute": {
            "type": "boolean"
          },
          "next_swap": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          }
        },
        "additionalProperties": false
      },
      "state": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "State",
        "type": "object",
        "required": [
          "next_swap",
          "num_trades_executed",
          "paused",
          "swap_status"
        ],
        "properties": {
          "next_swap": {
            "$ref": "#/definitions/Expiration"
          },
          "num_trades_executed": {
            "$ref": "#/definitions/Uint128"
          },
          "paused": {
            "type": "boolean"
          },
          "swap_status": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/SwapEvent"
            }
          }
        },
        "additionalProperties": false,
        "definitions": {
          "Coin": {
            "type": "object",
            "required": [
              "amount",
              "denom"
            ],
            "properties": {
              "amount": {
                "$ref": "#/definitions/Uint128"
              },
              "denom": {
                "type": "string"
              }
            }
          },
          "Expiration": {
            "description": "Expiration represents a point in time when some event happens. It can compare with a BlockInfo and will return is_expired() == true once the condition is hit (and for every block in the future)",
            "oneOf": [
              {
                "description": "AtHeight will expire when `env.block.height` >= height",
                "type": "object",
                "required": [
                  "at_height"
                ],
                "properties": {
                  "at_height": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              },
              {
                "description": "AtTime will expire when `env.block.time` >= time",
                "type": "object",
                "required": [
                  "at_time"
                ],
                "properties": {
                  "at_time": {
                    "$ref": "#/definitions/Timestamp"
                  }
                },
                "additionalProperties": false
              },
              {
                "description": "Never will never expire. Used to express the empty variant",
                "type": "object",
                "required": [
                  "never"
                ],
                "properties": {
                  "never": {
                    "type": "object",
                    "additionalProperties": false
                  }
                },
                "additionalProperties": false
              }
            ]
          },
          "SwapEvent": {
            "type": "object",
            "required": [
              "executed",
              "timestamp_nanos"
            ],
            "properties": {
              "effective_token_out": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/Coin"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "executed": {
                "type": "boolean"
              },
              "timestamp_nanos": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              },
              "token_in": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/Coin"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "additionalProperties": false
          },
          "Timestamp": {
            "description": "A point in time in nanosecond precision.\n\nThis type can represent times from 1970-01-01T00:00:00Z to 2554-07-21T23:34:33Z.\n\n## Examples\n\n``` # use cosmwasm_std::Timestamp; let ts = Timestamp::from_nanos(1_000_000_202); assert_eq!(ts.nanos(), 1_000_000_202); assert_eq!(ts.seconds(), 1); assert_eq!(ts.subsec_nanos(), 202);\n\nlet ts = ts.plus_seconds(2); assert_eq!(ts.nanos(), 3_000_000_202); assert_eq!(ts.seconds(), 3); assert_eq!(ts.subsec_nanos(), 202); ```",
            "allOf": [
              {
                "$ref": "#/definitions/Uint64"
              }
            ]
          },
          "Uint128": {
            "description": "A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u128` to get the value out:\n\n``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);\n\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```",
            "type": "string"
          },
          "Uint64": {
            "description": "A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.\n\n# Examples\n\nUse `from` to create instances of this and `u64` to get the value out:\n\n``` # use cosmwasm_std::Uint64; let a = Uint64::from(42u64); assert_eq!(a.u64(), 42);\n\nlet b = Uint64::from(70u32); assert_eq!(b.u64(), 70); ```",
            "type": "string"
          }
        }
      }
    }
  }
  

  const hasSchema = useMemo(() => !!codeDetails?.full_schema?.instantiate, [codeDetails]);

  const contractTabGroup = getTabsOptions();

  const options = hasSchema
    ? getTabsOptionsWithSchema(codeDetails, contractAddr, pageColor, init_msg)
    : getTabsOptionsWithoutSchema(codeDetails?.code_id || 0, contractAddr);

  return (
    <>
      <div className="mt-3 mb-[4rem] flex items-center justify-between">
        <GroupButtons selectedTab={contractTab} color={pageColor} handlerTab={setContractTab} tabs={contractTabGroup} skeleton={skeleton} />
        {address ? (
          <div className="flex flex-col gap-2">
            <div>{IntlAddress(address)}</div>
            <OutlineButton className="text-xs px-2 py-1" onClick={disconnectWallet}>
              Disconnect
            </OutlineButton>
          </div>
        ) : (
          <SimpleButton className="py-2 px-9" onClick={connectWallet}>
            Connect Wallet
          </SimpleButton>
        )}
      </div>
      <TabsContainer skeleton={skeleton} selectedTab={contractTab} options={options} />
    </>
  );
};

export default CodeSchema;

const getTabsOptions = () => {
  return [
    {
      content: "Instantiate",
      key: "instantiate",
    },
    {
      content: "Query",
      key: "query",
    },
    {
      content: "Execute",
      key: "execute",
    },
  ];
};

const getTabsOptionsWithSchema = (
  codeDetails: CodeDetails | undefined,
  contractAddr: string | undefined,
  color: string,
  init_msg?: JSONSchema
) => {
  if (!codeDetails?.full_schema) return [];
  return [
    {
      key: "instantiate",
      container: <Instantiate isContract={!!contractAddr} color={color} json={init_msg || codeDetails.full_schema.instantiate} />,
    },
    { key: "query", container: <Query isContract={!!contractAddr} color={color} json={codeDetails.full_schema.query} /> },
    { key: "execute", container: <Execute isContract={!!contractAddr} color={color} json={codeDetails.full_schema.execute} /> },
  ];
};

const getTabsOptionsWithoutSchema = (codeId: number, contractAddr: string | undefined) => {
  const instantiateOption = [{ key: "instantiate", container: <InstantiateMsgBuilder codeId={codeId} /> }];
  if (!contractAddr) return instantiateOption;

  return [
    ...instantiateOption,
    { key: "query", container: <QueryMsgBuilder contractAddress={contractAddr} /> },
    { key: "execute", container: <ExecuteMsgBuilder contractAddress={contractAddr} /> },
  ];
};
