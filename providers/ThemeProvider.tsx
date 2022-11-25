import React, { createContext, useState, useContext, PropsWithChildren, useEffect } from "react";
import { Chain } from "../interfaces/chains";
import { CHAINS } from "../utils/constants";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { useRouter } from "next/router";

const fullConfig = resolveConfig(tailwindConfig);

interface IThemeState {
  chainColor: Chain;
  changechainColor: (chainColor: Chain) => void;
  changechainColorByPrefix: (addr: string) => void;
  changeJsonViewerColor: (chain: Chain) => void;
}

const ThemeContext = createContext<IThemeState | null>(null);

const defaultState = {
  chainColor: Chain.Juno,
};

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<{ chainColor: Chain }>(defaultState);
  const { query } = useRouter();

  const changechainColor = (chainColor: Chain) => {
    setState({ ...state, chainColor });
  };

  const changeJsonViewerColor = (chain: Chain) => {
    const color = (fullConfig.theme?.colors as Record<string, string>)[`chain-${chain}-400`];
    document.documentElement.style.setProperty("--chain-color", color);
  };

  const changechainColorByPrefix = (addr: string) => {
    const matchedPrefix = addr.match(/^(osmo|juno|stars)/g);
    if (matchedPrefix) {
      const [prefix] = matchedPrefix as Array<keyof typeof CHAINS>;
      changechainColor(CHAINS[prefix]);
    }
  };

  useEffect(() => {
    const clientConfig = localStorage.getItem("config");
    if (!clientConfig) return;
    setState({ ...JSON.parse(clientConfig) });
  }, []);

  useEffect(() => {
    if (!query.chain) return;
    changeJsonViewerColor(query.chain as Chain);
  }, [query.chain]);

  useEffect(() => {
    if (Object.is(state, defaultState)) return;
    localStorage.setItem("config", JSON.stringify(state));
  }, [state]);

  return (
    <ThemeContext.Provider value={{ ...state, changechainColor, changechainColorByPrefix, changeJsonViewerColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("error client context");
  }
  return context;
};

export default ThemeProvider;
