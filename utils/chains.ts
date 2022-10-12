export type Chain = typeof chains[number];

export const chains = [
  {
    chain_id: "stargaze-1",
    chain_name: "stargaze",
    pretty_name: "Stargaze",
    bech32_prefix: "stars",
    rpc_url: "https://rpc.cosmos.directory/stargaze",
    rest_url: "https://rest.cosmos.directory/stargaze",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "ustars",
    fee_tokens: [
      {
        denom: "ustars",
        coinDecimals: 6,
      },
    ],
    staking_token: "ustars",
    default_gas_price: 0.025,
    gas_price_step: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
  {
    chain_id: "cosmoshub-4",
    chain_name: "cosmoshub",
    pretty_name: "Cosmos Hub",
    bech32_prefix: "cosmos",
    rpc_url: "https://rpc.cosmos.directory/cosmoshub",
    rest_url: "https://rest.cosmos.directory/cosmoshub",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "uatom",
    fee_tokens: [
      {
        denom: "uatom",
        coinDecimals: 6,
      },
    ],
    staking_token: "uatom",
    default_gas_price: 0.025,
    gas_price_step: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
  {
    chain_id: "osmosis-1",
    chain_name: "osmosis",
    pretty_name: "Osmosis",
    bech32_prefix: "osmo",
    rpc_url: "https://rpc.cosmos.directory/osmosis",
    rest_url: "https://rest.cosmos.directory/osmosis",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "uosmo",
    fee_tokens: [
      {
        denom: "uosmo",
        coinDecimals: 6,
      },
    ],
    staking_token: "uosmo",
    default_gas_price: 0.025,
    gas_price_step: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
  {
    chain_id: "akashnet-2",
    chain_name: "akash",
    pretty_name: "Akash",
    bech32_prefix: "akash",
    rpc_url: "https://rpc.cosmos.directory/akash",
    rest_url: "https://rest.cosmos.directory/akash",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "uakt",
    fee_tokens: [
      {
        denom: "uakt",
        coinDecimals: 6,
      },
    ],
    staking_token: "uakt",
    default_gas_price: 0.025,
    gas_price_step: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
  {
    chain_id: "juno-1",
    chain_name: "juno",
    pretty_name: "Juno",
    bech32_prefix: "juno",
    rpc_url: "https://rpc.cosmos.directory/juno",
    rest_url: "https://rest.cosmos.directory/juno",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "ujuno",
    fee_tokens: [
      {
        denom: "ujuno",
        coinDecimals: 6,
      },
    ],
    staking_token: "ujuno",
    default_gas_price: 0.04,
    gas_price_step: {
      low: 0.03,
      average: 0.04,
      high: 0.05,
    },
  },
  {
    chain_id: "tgrade-mainnet-1",
    chain_name: "tgrade",
    pretty_name: "Tgrade",
    bech32_prefix: "tgrade",
    rpc_url: "https://rpc.cosmos.directory/tgrade",
    rest_url: "https://rest.cosmos.directory/tgrade",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "utgd",
    fee_tokens: [
      {
        denom: "utgd",
        coinDecimals: 6,
      },
    ],
    staking_token: "utgd",
    default_gas_price: 0.075,
    gas_price_step: {
      low: 0.05,
      average: 0.075,
      high: 0.1,
    },
  },
  {
    chain_id: "uni-5",
    chain_name: "junotestnet",
    pretty_name: "Juno Testnet",
    bech32_prefix: "juno",
    rpc_url: "https://rpc.uni.juno.deuslabs.fi:443",
    rest_url: "https://lcd.uni.juno.deuslabs.fi",
    bip44: {
      coinType: 118,
    },
    default_fee_token: "ujunox",
    fee_tokens: [
      {
        denom: "ujunox",
        coinDecimals: 6,
      },
    ],
    staking_token: "ujunox",
    default_gas_price: 0.04,
    gas_price_step: {
      low: 0.03,
      average: 0.04,
      high: 0.05,
    },
  },
];
