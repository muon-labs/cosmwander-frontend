import { OfflineSigner } from "@cosmjs/proto-signing";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";
import { chainToKeplr, getSigner, loadKeplr } from "../services/keplr";
import { chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import { ChainInfo } from "@keplr-wallet/types";

interface WalletState {
  chain: ChainInfo;
  address?: string;
  signer?: OfflineSigner;
  network: 'mainnet' | 'testnet';
  connectWallet: () => void;
  disconnectWallet: () => void;
}

export const WalletContext = React.createContext<WalletState | null>(null);

const WalletProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { query } = useRouter();
  const [address, setAddress] = useState<string>();
  const [signer, setSigner] = useState<OfflineSigner>();
  const [chain, setChain] = useState<ChainInfo>();
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>();
  const [allowPermission, setAllowPermission] = useLocalStorage<boolean>("allowPermission");

  const connectWallet = async () => {
    if (!chain) return;
    await loadKeplr(chain.chainId);
    const signer = await getSigner(chain.chainId);
    if (!signer) return;
    const [{ address }] = await signer.getAccounts();

    setAddress(address);
    setSigner(signer);
    setAllowPermission(true);
  };

  const disconnectWallet = () => {
    setAddress(undefined);
    setSigner(undefined);
    setAllowPermission(false);
  };

  useEffect(() => {
    if (!allowPermission) return;
    connectWallet();
  }, []);

  useEffect(() => {
    const network = ["dev", "testnet"].includes(window.location.href) || process.env.NEXT_PUBLIC_ENV !== "production" ? "testnet" : "mainnet"
    setNetwork(network)
    if (!query.chain) return;
    const chainName = network.includes('testnet') ? query.chain + 'testnet' : query.chain;
    const chain = chains.find(({ chain_name }) => chain_name === chainName) as Chain;
    const keplrParsedChain = chainToKeplr(chain);
    setChain({ ...keplrParsedChain, chainName: keplrParsedChain.chainName.replace(' ', '').toLowerCase() });
  }, [query]);

  return (
    <WalletContext.Provider
      value={
        {
          chain,
          address,
          signer,
          network,
          connectWallet,
          disconnectWallet,
        } as WalletState
      }
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = React.useContext(WalletContext);
  if (!context) throw new Error("Wallet Context Provider is not instanced");
  return context;
};

export default WalletProvider;
