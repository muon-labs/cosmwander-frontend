import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.cosmwander.xyz";

export class QueryService {
  http: AxiosInstance;

  static async connect(rpcUrl: string): Promise<QueryService> {
    return new QueryService();
  }

  constructor() {
    this.http = axios.create({ baseURL });
  }

  async getContractDetails(chainId: string, contractAddress: string) {
    const { data } = await this.http.get(`/${chainId}/contracts/${contractAddress}`);
    return data;
  }

  async getContractsDetails(chainName: string, contractAddresses: string[]) {
    const { data } = await this.http.post(`/${chainName}/contracts`, { contracts: contractAddresses });
    return data;
  }

  async getCodeDetails(chainName: string, codeId: string) {
    const { data } = await this.http.get(`/${chainName}/code/${codeId}`);
    return data;
  }

  async getPinnedCodes(chainName: string) {
    const { data } = await this.http.get(`/${chainName}/code/pinned`);
    return data;
  }

  async verifyCode(chainName: string, codeId: string, githubDetails: unknown) {
    const { data } = await this.http.post(`/${chainName}/code/${codeId}`, githubDetails);
    return data;
  }

  async getLatestContracts(chainName: string) {
    const { data } = await this.http.get(`/${chainName}/contracts/latest`);
    return data;
  }
}
