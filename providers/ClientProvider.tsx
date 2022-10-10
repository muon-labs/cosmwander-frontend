import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  PropsWithChildren,
  useEffect,
} from "react";
import { Chain } from "../interfaces/chains";

interface IClientContext {
  chain: Chain;
  changeChain: (chain: Chain) => void;
}

const ClientContext = createContext<IClientContext | null>(null);

const defaultState = {
  chain: Chain.Osmosis
}

const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<{ chain: Chain }>(defaultState);

  const changeChain = useCallback((chain: Chain) => {
    setState({ ...state, chain});
  }, [state.chain]);

  useEffect(() => {
    const clientConfig = localStorage.getItem('config');
    if (!clientConfig) return;
    setState({...JSON.parse(clientConfig) });
  }, [])

  useEffect(() => {
    if (Object.is(state, defaultState)) return;
    localStorage.setItem('config', JSON.stringify(state));
  }, [state])

  return (
    <ClientContext.Provider value={{ ...state, changeChain }}>
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
