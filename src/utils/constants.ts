import { ChainInfo } from '@keplr-wallet/types'
import { chains } from 'chain-registry'
import { getChainFromID } from './utils'
import { Bech32Address } from '@keplr-wallet/cosmos'

function findChainEndpoint (chainId: string, type: 'rpc' | 'rest') {
  const chain = getChainFromID(chainId)
  if (!chain) {
    throw new Error(`Chain ${chainId} not found`)
  }
  return chain.apis[type]?.[0]?.address // TODO: Could fail if first RPC is bad
}

/// these were found in the keplr extension package of the keplr repo: https://github.com/chainapsis/keplr-wallet/blob/master/packages/extension/src/config.ts
// cross referenced against cosmos chain registry to get the RPC endpoints & such
// TODO: Add Kujira
export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: 'https://rpc-osmosis.blockapsis.com', // returns something with cors disabled: findChainEndpoint('osmosis-1', 'rpc'),
    rpcConfig: {},
    rest: findChainEndpoint('osmosis-1', 'rest'),
    restConfig: {},
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis'
    },
    walletUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://app.osmosis.zone'
        : 'https://app.osmosis.zone',
    walletUrlForStaking:
      process.env.NODE_ENV === 'production'
        ? 'https://wallet.keplr.app/chains/osmosis'
        : 'http://localhost:8080/chains/osmosis',
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config('osmo'),
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis'
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coinGeckoId: 'ion'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis'
      }
    ],
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    features: ['ibc-transfer', 'ibc-go', 'cosmwasm']
  },
  {
    rpc: 'https://testnet-rpc.osmosis.zone/', // returns something with cors disabled: findChainEndpoint('osmosis-1', 'rpc'),
    rpcConfig: {},
    rest: findChainEndpoint('osmosis-1', 'rest'),
    restConfig: {},
    chainId: 'osmo-test-4',
    chainName: 'Osmosis Testnet',
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis'
    },
    walletUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://testnet.osmosis.zone'
        : 'https://testnet.osmosis.zone',
    walletUrlForStaking:
      process.env.NODE_ENV === 'production'
        ? 'https://wallet.keplr.app/chains/osmosis'
        : 'http://localhost:8080/chains/osmosis',
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config('osmo'),
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis'
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coinGeckoId: 'ion'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis'
      }
    ],
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    features: ['ibc-transfer', 'ibc-go', 'cosmwasm']
  }
]
