import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  PropsWithChildren,
} from "react";
import { Chain } from "../interfaces/chains";

interface IClientContext {
  chain: Chain;
  changeChain: (chain: Chain) => void;
}

const ClientContext = createContext<IClientContext | null>(null);

const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chain, setchain] = useState<Chain>(Chain.Osmosis);

  const changeChain = useCallback((chain: Chain) => {
    setchain(chain);
  }, []);

  return (
    <ClientContext.Provider value={{ chain, changeChain }}>
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
