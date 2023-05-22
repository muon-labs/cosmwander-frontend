import { CodeDetails } from "./code-details";
import { JSONSchema } from "./json-schema";

export interface ContractDetails {
  codeId: number;
  chainId: string;
  initMsg: Record<string, unknown>;
  creator: string;
  contractSchema: JSONSchema;
  name: string;
  txHash: string;
  address: string;
  height: string;
  createdAt: string;
  codeDetails: CodeDetails;
}
