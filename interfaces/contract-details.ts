export interface ContractDetails {
  code_id: string;
  chain_id: string;
  tx_hash: string;
  init_msg: Record<string, unknown>;
  creator: string;
  label: string;
  ibcPortId?: string;
  migrations?: Record<string, string>;
}
