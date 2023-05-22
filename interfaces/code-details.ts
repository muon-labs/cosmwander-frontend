export interface CodeDetails {
  codeId: number;
  chainId: string;
  creator: string;
  checksum: string;
  txHash: string;
  contracts: string[];
  createdAt: string;
  contractSchema?: {
    instantiate: Record<string, string>;
    execute: Record<string, string>;
    query: Record<string, string>;
  };
  codeRef?: {
    repo_url: string;
    commit_hash: string;
  };
  name?: string;
  version?: string;
  verified?: boolean;
}
