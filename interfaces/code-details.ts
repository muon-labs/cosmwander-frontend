export interface CodeDetails {
  code_id: number;
  chain_id: string;
  creator: string;
  type?: string;
  version?: string;
  permission?: string;
  permission_address?: string;
  tx_hash?: string;
  checksum: string;
  contracts: string[];
  partial_schema?: {
    instantiate: Record<string, string>;
    execute: Record<string, string>;
    query: Record<string, string>;
  };
  full_schema?: {
    instantiate: Record<string, string>;
    execute: Record<string, string>;
    query: Record<string, string>;
  };
  code_ref?: {
    repo_url: string;
    commit_hash: string;
  };
  verified?: boolean;
  last_verified?: Date;
  created_at?: string;
}
