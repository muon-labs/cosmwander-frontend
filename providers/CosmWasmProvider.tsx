import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useWallet } from "./WalletProvider";

interface CosmWasmProviderState {
  client: SigningCosmWasmClient;
}

export const CosmWasmContext = React.createContext<CosmWasmProviderState | null>(null);

const CosmWasmProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { signer, address, chain } = useWallet();
  const [client, setClient] = useState<SigningCosmWasmClient>();

  useEffect(() => {
    if (!signer || !address) return;
    const loadClient = async () => {
      const client = await SigningCosmWasmClient.connectWithSigner(chain.rpc, signer, {
        prefix: chain?.bech32Config.bech32PrefixAccAddr,
        gasPrice: GasPrice.fromString(chain?.feeCurrencies[0].coinDenom),
      });
      setClient(client);
    };
    loadClient();
  }, [signer, address]);

  return (
    <CosmWasmContext.Provider
      value={
        {
          client,
        } as CosmWasmProviderState
      }
    >
      {children}
    </CosmWasmContext.Provider>
  );
};

export const useCosmWasm = () => {
  const context = React.useContext(CosmWasmContext);
  if (!context) throw new Error("Error: useCosmWasm must be used within a CosmWasmProvider");
  return context;
};

export default CosmWasmProvider;
