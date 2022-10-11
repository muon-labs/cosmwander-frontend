export interface ContractDetails {
  code_id: number;
  chain_id: string;
  init_msg: Record<string, unknown>;
  creator: string;
  label: string;
  ibcPortId?: string;
  migrations?: Record<string, string>;
}
