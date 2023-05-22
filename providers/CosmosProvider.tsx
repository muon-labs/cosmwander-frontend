import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useChain } from "@cosmos-kit/react-lite";
import { QueryService } from "~/services/queryService";

import { CoinInfo } from "~/interfaces";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

interface CosmosContextProps {
  connect: () => Promise<void>;
  address?: string;
  username?: string;
  chainName: string;
  isWalletConnected: boolean;
  queryService: QueryService;
  cwClient: SigningCosmWasmClient;
  disconnect: () => Promise<void>;
}

const CosmosContext = createContext<CosmosContextProps | null>(null);

const CosmosProvider: React.FC<PropsWithChildren<{ chainName: string }>> = ({ children, chainName }) => {
  const { query } = useRouter();
  const {
    connect,
    username,
    address,
    chain: chainInfo,
    assets,
    isWalletConnected,
    disconnect,
    getSigningCosmWasmClient,
    walletRepo,
  } = useChain(chainName);
  const [cwClient, setCwClient] = useState<SigningCosmWasmClient | null>(null);
  const [queryService, setQueryService] = useState<QueryService | null>(null);

  /*   const defaultFee = useMemo(() => {
    const { average_gas_price, denom } = chainInfo.fees!.fee_tokens[0];
    const assetInfo = assets?.assets.find((asset) => asset.base === denom);
    if (!assetInfo) throw new Error("Fee asset info not found");
    const denomUnit = assetInfo.denom_units.find((u) => u.denom === assetInfo.display);
    if (!denomUnit) throw new Error("Fee denom unit not found");

    return {
      exponent: denomUnit.exponent as number,
      averageGasPrice: average_gas_price as number,
      udenom: assetInfo.base,
      symbol: assetInfo.symbol,
      img: assetInfo.logo_URIs?.svg || assetInfo.logo_URIs?.png || assetInfo.logo_URIs?.jpeg,
      coingeckoId: assetInfo.coingecko_id,
    };
  }, [chainInfo, assets]); */

  const endpoints = useMemo(() => {
    const domain = chainInfo.chain_name.includes("testnet") ? "testcosmos.directory" : "cosmos.directory";
    return {
      rpcUrl: `https://rpc.${domain}/${chainInfo.chain_name}`,
      restUrl: `https://rest.${domain}/${chainInfo.chain_name}`,
      grpcUrl: chainInfo.apis!.grpc![0].address,
    };
  }, [chainInfo]);

  useEffect(() => {
    QueryService.connect(endpoints.rpcUrl).then(setQueryService);
  }, []);

  useEffect(() => {
    (async () => {
      if (!address || !getSigningCosmWasmClient) return;
      const cwClient = await getSigningCosmWasmClient();
      setCwClient(cwClient);
    })();
  }, [address]);

  if (!queryService)
    return (
      <div className="flex flex-1 h-full w-full">
        <div>Loading</div>
        {/* <Spinner /> */}
      </div>
    );

  return (
    <CosmosContext.Provider
      value={
        {
          connect: () => walletRepo.connect("keplr-extension"),
          address,
          username,
          disconnect,
          isWalletConnected,
          queryService,
          chainName,
          cwClient,
        } as CosmosContextProps
      }
    >
      {children}
    </CosmosContext.Provider>
  );
};

export const useCosmos = () => {
  const context = React.useContext(CosmosContext);
  if (!context) {
    throw new Error("useCosmos must be used within a CosmosProvider");
  }
  return context;
};

export default CosmosProvider;
