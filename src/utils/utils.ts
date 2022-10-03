import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import {
  GasPrice,
  SigningStargateClient,
  StargateClient,
} from "@cosmjs/stargate";
import { chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import { Keplr } from "@keplr-wallet/types";
import { EmbedChainInfos } from "./constants";

async function tryConnectWallet(
  chainId: string,
  type: "cosmwasm" | "stargate" = "cosmwasm"
): Promise<
  [SigningCosmWasmClient | SigningStargateClient, readonly AccountData[]]
> {
  if (!chainId) return [null, []];
  const chainInfo = EmbedChainInfos.find((chain) => chain.chainId === chainId);

  if (!chainInfo)
    throw new Error(
      `Chain ${chainId} not found in Keplr registry. we need to extend their registry to support testnet chains. We also need to add configs to support chains that aren't added yet. (Is there a better way to do this?)`
    );

  // Keplr extension injects the offline signer that is compatible with cosmJS.
  // You can get this offline signer from `window.getOfflineSigner(chainId:string)` after load event.
  // And it also injects the helper function to `window.keplr`.
  // If `window.getOfflineSigner` or `window.keplr` is null, Keplr extension may be not installed on browser.
  if (!window.getOfflineSigner || !window.keplr) {
    alert("Please install keplr extension");
  } else {
    if (window.keplr.experimentalSuggestChain) {
      try {
        // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
        // cosmoshub-3 is integrated to Keplr so the code should return without errors.
        // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
        // If the user approves, the chain will be added to the user's Keplr extension.
        // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
        // If the same chain id is already registered, it will resolve and not require the user interactions.
        await (window.keplr as Keplr).experimentalSuggestChain(chainInfo);
      } catch (e) {
        console.log({ chainInfo });
        console.error(e);
        alert("Failed to suggest the chain");
      }
    } else {
      alert("Please use the recent version of keplr extension");
    }
  }

  // You should request Keplr to enable the wallet.
  // This method will ask the user whether or not to allow access if they haven't visited this website.
  // Also, it will request user to unlock the wallet if the wallet is locked.
  // If you don't request enabling before usage, there is no guarantee that other methods will work.
  await window.keplr.enable(chainId);

  const offlineSigner: OfflineSigner = window.getOfflineSigner(chainId);

  // You can get the address/public keys by `getAccounts` method.
  // It can return the array of address/public key.
  // But, currently, Keplr extension manages only one address/public key pair.
  // XXX: This line is needed to set the sender address for SigningCosmosClient.
  const accounts = await offlineSigner.getAccounts();

  // Initialize the gaia api with the offline signer that is injected by Keplr extension.
  // const cosmJS = new SigningCosmWasmClient(
  //     "https://rpc-osmosis.blockapsis.com",
  //     accounts[0].address,
  //     offlineSigner,
  // );
  const denom = chainInfo.feeCurrencies[0].coinMinimalDenom;

  let client;
  if (type === "cosmwasm") {
    client = await SigningCosmWasmClient.connectWithSigner(
      chainInfo.rpc,
      offlineSigner,
      {
        prefix: chainInfo.bech32Config.bech32PrefixAccAddr,
        gasPrice: GasPrice.fromString(`${0.025}${denom}`),
      }
    );
  } else if (type === "stargate") {
    client = await SigningStargateClient.connectWithSigner(
      chainInfo.rpc,
      offlineSigner,
      {
        prefix: chainInfo.bech32Config.bech32PrefixAccAddr,
        gasPrice: GasPrice.fromString(`${0.025}${denom}`),
      }
    );
  }

  return [client, accounts];
}

export function tryConnectWalletStargate(
  chainId: string
): Promise<[SigningStargateClient, readonly AccountData[]]> {
  return tryConnectWallet(chainId, "stargate") as Promise<
    [SigningStargateClient, readonly AccountData[]]
  >;
}

export function tryConnectWalletCosmWasm(
  chainId: string
): Promise<[SigningCosmWasmClient, readonly AccountData[]]> {
  return tryConnectWallet(chainId, "cosmwasm") as Promise<
    [SigningCosmWasmClient, readonly AccountData[]]
  >;
}

export function getChainFromID(chainId: string): Chain {
  return chains.find((chain) => chain.chain_id === chainId);
}

export async function getClient(
  chainId: string
): Promise<[SigningCosmWasmClient, readonly AccountData[]]> {
  const [client, accounts] = await tryConnectWalletCosmWasm(chainId);
  return [client, accounts];
}

export async function getQueryClientStargate(
  chainId: string
): Promise<StargateClient> {
  if (!chainId) return null;
  const chainInfo = EmbedChainInfos.find((chain) => chain.chainId === chainId);
  const client = await StargateClient.connect(chainInfo.rpc);
  client.getBalance;
  return client;
}

export async function getQueryClientCosmWasm(
  chainId: string
): Promise<CosmWasmClient> {
  if (!chainId) return null;
  const chainInfo = EmbedChainInfos.find((chain) => chain.chainId === chainId);
  const client = CosmWasmClient.connect(chainInfo.rpc);
  return client;
}
