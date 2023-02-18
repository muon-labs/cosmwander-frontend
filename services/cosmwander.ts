import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.cosmwander.xyz";

const http = axios.create({ baseURL });

export const getContractDetails = async (chainId: string, contractAddress: string) => {
  const { data } = await http.get(`/${chainId}/contracts/${contractAddress}`);
  return data;
};

export const getContractsDetails = async (chainName: string, contractAddresses: string[]) => {
  const { data } = await http.post(`/${chainName}/contracts`, { contracts: contractAddresses });
  return data;
};

export const getCodeDetails = async (chainName: string, codeId: string) => {
  const { data } = await http.get(`/${chainName}/code/${codeId}`);
  return data;
};

export const getPinnedCodes = async (chainName: string) => {
  const { data } = await http.get(`/${chainName}/code/pinned`);
  return data;
};

export const verifyCode = async (chainName: string, codeId: string, githubDetails: unknown) => {
  const { data } = await http.post(`/${chainName}/code/${codeId}`, githubDetails);
  return data;
};
