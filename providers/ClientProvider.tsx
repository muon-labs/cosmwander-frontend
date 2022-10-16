import React, { createContext, useState, useContext, useCallback, PropsWithChildren, useEffect } from "react";
import { Chain } from "../interfaces/chains";
import { Chain as ChainType } from "../utils/chains";
import { CHAINS } from "../utils/constants";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { chains } from "../utils/chains";
import { useRouter } from "next/router";

const fullConfig = resolveConfig(tailwindConfig);

interface IClientContext {
  chain: Chain;
  changeChain: (chain: Chain) => void;
  changeChainByPrefix: (addr: string) => void;
  getChainByChainId: (chainId: string) => ChainType;
  changeJsonViewerColor: (chain: Chain) => void;
}

const ClientContext = createContext<IClientContext | null>(null);

const defaultState = {
  chain: Chain.Juno,
};

const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<{ chain: Chain }>(defaultState);
  const {
    query: { chain: queryChain },
  } = useRouter();

  const changeChain = (chain: Chain) => {
    setState({ ...state, chain });
  };

  const changeJsonViewerColor = (chain: Chain) => {
    const color = (fullConfig.theme?.colors as Record<string, string>)[`chain-${chain}-400`];
    document.documentElement.style.setProperty("--chain-color", color);
  };

  const changeChainByPrefix = (addr: string) => {
    const matchedPrefix = addr.match(/^(osmo|juno|stars)/g);
    if (matchedPrefix) {
      const [prefix] = matchedPrefix as Array<keyof typeof CHAINS>;
      changeChain(CHAINS[prefix]);
    }
  };

  const getChainByChainId = (chainId: string): ChainType => {
    const chain = chains.find((chain) => chain.chain_id === chainId) as ChainType;
    return chain;
  };

  useEffect(() => {
    const clientConfig = localStorage.getItem("config");
    if (!clientConfig) return;
    setState({ ...JSON.parse(clientConfig) });
  }, []);

  useEffect(() => {
    if (!queryChain) return;
    changeJsonViewerColor(queryChain as Chain);
  }, [queryChain]);

  useEffect(() => {
    if (Object.is(state, defaultState)) return;
    localStorage.setItem("config", JSON.stringify(state));
  }, [state]);

  return (
    <ClientContext.Provider value={{ ...state, changeChain, changeChainByPrefix, getChainByChainId, changeJsonViewerColor }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("error client context");
  }
  return context;
};

export default ClientProvider;
