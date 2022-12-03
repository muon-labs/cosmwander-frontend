import { CodeDetails } from "./code-details";
import { JSONSchema } from "./json-schema";

export interface ContractDetails {
  code_id: number;
  chain_id: string;
  tx_hash: string;
  code_details: CodeDetails;
  init_msg: Record<string, unknown>;
  creator: string;
  label: string;
  ibcPortId?: string;
  migrations?: Record<string, string>;
}
