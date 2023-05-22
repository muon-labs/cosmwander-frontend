import React, { PropsWithChildren, useEffect } from "react";

import { ChainProvider } from "@cosmos-kit/react-lite";
import CosmosProvider from "./CosmosProvider";
import { wallets as KeplrWallet } from "@cosmos-kit/keplr-extension";
import chains from "~/utils/chains";
import assets from "~/utils/assets";
import { QueryClient, QueryClientProvider } from "react-query";
import * as colors from "~/utils/colors";
import { useRouter } from "next/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  },
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { query } = useRouter();
  const [chainName, setChainName] = React.useState<string | null>(null);

  useEffect(() => {
    if (!query.chain) return;
    setChainName(query.chain as string);
    const color = colors[query.chain as keyof typeof colors];
    const root = document.querySelector(":root") as HTMLElement;
    if (!root) return;
    root.style.setProperty("--chain-color-200", color[200]);
    root.style.setProperty("--chain-color-400", color[400]);
    root.style.setProperty("--chain-color-600", color[600]);
    root.style.setProperty("--chain-color-800", color[800]);
  }, [query.chain]);

  if (!chainName) return null;

  return (
    <ChainProvider
      assetLists={assets}
      chains={chains}
      wallets={[...KeplrWallet]}
      walletModal={(props) => <div></div>}
      endpointOptions={{
        endpoints: {
          juno: {
            rest: ["https://rest.cosmos.directory/juno"],
            rpc: ["https://rpc.cosmos.directory/juno"],
          },
          junotestnet: {
            rest: ["https://rest.testcosmos.directory/junotestnet"],
            rpc: ["https://rpc.testcosmos.directory/junotestnet"],
          },
          osmosis: {
            rest: ["https://rest.cosmos.directory/osmosis"],
            rpc: ["https://rpc.cosmos.directory/osmosis"],
          },
          osmosistestnet: {
            rest: ["https://rest.testcosmos.directory/osmosistestnet"],
            rpc: ["https://rpc.testcosmos.directory/osmosistestnet"],
          },
        },
      }}
    >
      <CosmosProvider chainName={chainName}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </CosmosProvider>
    </ChainProvider>
  );
};

export default AppProvider;
