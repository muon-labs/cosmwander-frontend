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
const juno_prod = {
  chainId: 'juno-1',
  chainName: 'Juno',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc-juno.itastakers.com/',
  httpUrl: 'https://lcd-juno.itastakers.com/',
  feeToken: 'ujuno',
  stakingToken: 'ujuno',
  coinMap: {
    ujunox: { denom: 'JUNO', fractionalDigits: 6 }
  },
  gasPrice: 0.025
}

const juno_testnet = {
  chainId: 'uni-5',
  chainName: 'Juno Testnet',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc.uni.juno.deuslabs.fi:443',
  httpUrl: 'https://lcd.uni.juno.deuslabs.fi',
  feeToken: 'ujunox',
  stakingToken: 'ujunox',
  coinMap: {
    ujunox: { denom: 'JUNOX', fractionalDigits: 6 }
  },
  gasPrice: 0.025
}

const configKeplr = (config): any => {
  return {
    chainId: config.chainId,
    chainName: config.chainName,
    rpc: config.rpcUrl,
    rest: config.httpUrl,
    bech32Config: {
      bech32PrefixAccAddr: `${config.addressPrefix}`,
      bech32PrefixAccPub: `${config.addressPrefix}pub`,
      bech32PrefixValAddr: `${config.addressPrefix}valoper`,
      bech32PrefixValPub: `${config.addressPrefix}valoperpub`,
      bech32PrefixConsAddr: `${config.addressPrefix}valcons`,
      bech32PrefixConsPub: `${config.addressPrefix}valconspub`
    },
    currencies: [
      {
        coinDenom: config.coinMap[config.feeToken].denom,
        coinMinimalDenom: config.feeToken,
        coinDecimals: config.coinMap[config.feeToken].fractionalDigits
      },
      {
        coinDenom: config.coinMap[config.stakingToken].denom,
        coinMinimalDenom: config.stakingToken,
        coinDecimals: config.coinMap[config.stakingToken].fractionalDigits
      }
    ],
    feeCurrencies: [
      {
        coinDenom: config.coinMap[config.feeToken].denom,
        coinMinimalDenom: config.feeToken,
        coinDecimals: config.coinMap[config.feeToken].fractionalDigits
      }
    ],
    stakeCurrency: {
      coinDenom: config.coinMap[config.stakingToken].denom,
      coinMinimalDenom: config.stakingToken,
      coinDecimals: config.coinMap[config.stakingToken].fractionalDigits
    },
    gasPriceStep: {
      low: config.gasPrice / 2,
      average: config.gasPrice,
      high: config.gasPrice * 2
    },
    bip44: { coinType: 118 },
    coinType: 118
  }
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
  },
  configKeplr(juno_testnet),
  configKeplr(juno_prod)
]
