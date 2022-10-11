import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.cosmwander.xyz";

const http = axios.create({ baseURL });

export const getContractDetails = async (chainId: string, contractAddress: string) => {
  const { data } = await http.get(`/contract/${chainId}/${contractAddress}/metadata`);
  return data;
};

export const getContractSchema = async (chainId: string, contractAddress: string) => {
  const { data } = await http.get(`/contract/${chainId}/${contractAddress}/schema`);
  return data;
};

export const getCodeDetails = async (chainId: string, codeId: string) => {
  const { data } = await http.get(`/code/${chainId}/${codeId}/metadata`);
  return data;
};

export const getCodeSchema = async (chainId: string, codeId: string) => {
  const { data } = await http.get(`/code/${chainId}/${codeId}/schema`);
  return data;
};
