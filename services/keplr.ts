import { OfflineSigner } from "@cosmjs/proto-signing";
import { chainRegistryChainToKeplr } from "@chain-registry/keplr";
import { chains, assets } from "chain-registry";
import { AssetList, Chain } from "@chain-registry/types";

export const loadKeplr = async (chainIds: string | string[]) => {
  if (!window || !window.keplr) return;
  try {
    await window.keplr.enable(chainIds);
  } catch (err) {
    await addChain(chainIds);
    await window.keplr.enable(chainIds);
  }
};

export const getSigner = (chainId: string) => window?.keplr?.getOfflineSignerAuto(chainId) as Promise<OfflineSigner>;

const addChain = async (chainIds: string | string[]) => {
  chainIds = Array.isArray(chainIds) ? chainIds : [chainIds];
  const configs = chainIds.map((chainId) => chains.find(({ chain_id }) => chainId === chain_id)).filter(Boolean) as Chain[];
  for (const config of configs) {
    const assetList = assets.find(({ chain_name }) => chain_name === config.chain_name);
    await window?.keplr?.experimentalSuggestChain(chainRegistryChainToKeplr(config, assetList ? [assetList] : []));
  }
};

export const chainToKeplr = (chain: Chain) => {
  const assetList = assets.find(({ chain_name }) => chain_name === chain.chain_name);
  return chainRegistryChainToKeplr(chain, [assetList as AssetList], { getRpcEndpoint, getExplorer, getRestEndpoint });
};

const getRpcEndpoint = (chain: Chain) => {
  if (!chain.apis?.rpc) return "";
  return chain.apis?.rpc[3].address;
};

const getExplorer = (chain: Chain) => "";
const getRestEndpoint = (chain: Chain) => "";
