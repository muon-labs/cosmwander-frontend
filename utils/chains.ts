const junotestnet = {
  $schema: "../../chain.schema.json",
  chain_name: "junotestnet",
  status: "live",
  network_type: "testnet",
  pretty_name: "Juno Testnet",
  chain_id: "uni-6",
  bech32_prefix: "juno",
  daemon_name: "junod",
  node_home: "$HOME/.juno",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "ujunox",
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "ujunox",
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/CosmosContracts/juno",
    recommended_version: "v14.0.0-alpha.1",
    compatible_versions: ["v14.0.0-alpha.1"],
    cosmos_sdk_version: "0.45",
    consensus: {
      type: "tendermint",
      version: "0.34",
    },
    cosmwasm_version: "0.30",
    cosmwasm_enabled: true,
    ibc_go_version: "4.3.0",
    genesis: {
      genesis_url: "https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-6/genesis.json",
    },
    versions: [
      {
        name: "v13.0.0-beta.1",
        recommended_version: "v13.0.0-beta.1",
        compatible_versions: ["v13.0.0-beta.1"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.30",
        cosmwasm_enabled: true,
        ibc_go_version: "4.3.0",
      },
      {
        name: "v14.0.0-alpha.1",
        recommended_version: "v14.0.0-alpha.1",
        compatible_versions: ["v14.0.0-alpha.1"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.30",
        cosmwasm_enabled: true,
        ibc_go_version: "4.3.0",
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        address: "testnet-seed.rhinostake.com:12656",
        provider: "RHINO",
      },
    ],
    persistent_peers: [
      {
        id: "c54bf418fb542634495f57a1e36c9bd057d55e1b",
        address: "5.161.80.115:26656",
        provider: "Reecepbcups",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.uni.junonetwork.io",
        provider: "Juno",
      },
      {
        address: "https://juno-testnet-rpc.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://uni-rpc.reece.sh",
        provider: "Reecepbcups",
      },
    ],
    rest: [
      {
        address: "https://api.uni.junonetwork.io",
        provider: "Juno",
      },
      {
        address: "https://juno-testnet-api.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://uni-api.reece.sh",
        provider: "Reecepbcups",
      },
    ],
    grpc: [
      {
        address: "juno-testnet-grpc.polkachu.com:12690",
        provider: "Polkachu",
      },
    ],
  },
  explorers: [
    {
      kind: "EZ Staking Tools",
      url: "https://testnet.ezstaking.tools/juno-testnet",
      tx_page: "https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}",
      account_page: "https://testnet.ezstaking.tools/juno-testnet/account/${accountAddress}",
    },
    {
      kind: "Mintscan",
      url: "https://testnet.mintscan.io/juno-testnet",
      tx_page: "https://testnet.mintscan.io/juno-testnet/txs/${txHash}",
    },
    {
      kind: "NodesGuru",
      url: "https://testnet.juno.explorers.guru/",
      tx_page: "https://testnet.juno.explorers.guru/transaction/${txHash}",
    },
  ],
};

const juno = {
  $schema: "../chain.schema.json",
  chain_name: "juno",
  status: "live",
  network_type: "mainnet",
  website: "https://www.junonetwork.io/",
  pretty_name: "Juno",
  chain_id: "juno-1",
  bech32_prefix: "juno",
  daemon_name: "junod",
  node_home: "$HOME/.juno",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "ujuno",
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.004,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "ujuno",
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/CosmosContracts/juno",
    recommended_version: "v14.1.0",
    compatible_versions: ["v14.0.0", "v14.1.0"],
    cosmos_sdk_version: "0.45",
    consensus: {
      type: "tendermint",
      version: "0.34",
    },
    cosmwasm_version: "0.30",
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: "https://download.dimi.sh/juno-phoenix2-genesis.tar.gz",
    },
    versions: [
      {
        name: "v13",
        recommended_version: "v13.0.0",
        compatible_versions: ["v13.0.0"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.30",
        cosmwasm_enabled: true,
        next_version_name: "v14",
      },
      {
        name: "v14",
        height: 7875721,
        recommended_version: "v14.1.0",
        compatible_versions: ["v14.0.0", "v14.1.0"],
      },
    ],
  },
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg",
  },
  peers: {
    seeds: [
      {
        id: "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        address: "seed.rhinostake.com:12656",
        provider: "RHINO",
      },
      {
        id: "90b09362d9ce3845096c4938eea0dba682b0ad2c",
        address: "juno-seed-new.blockpane.com:26656",
      },
      {
        id: "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        address: "seeds.polkachu.com:12656",
        provider: "Polkachu",
      },
      {
        id: "20e1000e88125698264454a884812746c2eb4807",
        address: "seeds.lavenderfive.com:12656",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        id: "ea67180befe4d9ca71142d21ada8ff58cc08f71c",
        address: "seeds.goldenratiostaking.net:1627",
        provider: "Golden Ratio Staking",
      },
      {
        id: "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
        address: "juno-seed-1.allnodes.me:26656",
        provider: "Allnodes.com ⚡️ Nodes & Staking",
      },
      {
        id: "e726816f42831689eab9378d5d577f1d06d25716",
        address: "juno-seed-2.allnodes.me:26656",
        provider: "Allnodes.com ⚡️ Nodes & Staking",
      },
      {
        id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        address: "juno-mainnet-seed.autostake.com:27136",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        id: "70fcee92283edc02340289b2a74e4ab1a0203848",
        address: "seed-juno.freshstaking.com:39656",
        provider: "FreshSTAKING",
      },
      {
        id: "47d942718533d36823e16b9502c035ca9f318ef4",
        address: "seeds.whispernode.com:12656",
        provider: "WhisperNode🤐",
      },
      {
        id: "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        address: "juno.rpc.kjnodes.com:15759",
        provider: "kjnodes",
      },
      {
        id: "509f6dbae3133a9df177edea051b31e1210b117e",
        address: "seed-juno-01.stakeflow.io:2307",
        provider: "Genesis Lab",
      },
    ],
    persistent_peers: [
      {
        id: "7f593757c0cde8972ce929381d8ac8e446837811",
        address: "178.18.255.244:26656",
      },
      {
        id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        address: "juno-mainnet-peer.autostake.com:27136",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        id: "70fcee92283edc02340289b2a74e4ab1a0203848",
        address: "seed-juno.freshstaking.com:39656",
        provider: "FreshSTAKING",
      },
      {
        id: "509f6dbae3133a9df177edea051b31e1210b117e",
        address: "peer-juno-01.stakeflow.io:2307",
        provider: "Genesis Lab",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc-juno.whispernode.com:443",
        provider: "WhisperNode🤐",
      },
      {
        address: "https://rpc-juno.goldenratiostaking.net",
        provider: "Golden Ratio Staking",
      },
      {
        address: "https://rpc-juno.itastakers.com",
        provider: "itastakers",
      },
      {
        address: "https://rpc-juno.ecostake.com",
        provider: "ecostake",
      },
      {
        address: "https://juno-rpc.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://juno-rpc.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "https://rpc-juno.pupmos.network",
        provider: "PUPMØS",
      },
      {
        address: "https://rpc-juno-ia.cosmosia.notional.ventures/",
        provider: "Notional",
      },
      {
        address: "https://rpc.juno.chaintools.tech/",
        provider: "ChainTools",
      },
      {
        address: "https://juno-rpc.kleomedes.network",
        provider: "Kleomedes",
      },
      {
        address: "https://rpc.juno.interbloc.org",
        provider: "Interbloc",
      },
      {
        address: "https://juno.rpc.stakin-nodes.com",
        provider: "Stakin",
      },
      {
        address: "https://juno-rpc.icycro.org",
        provider: "IcyCRO 🧊",
      },
      {
        address: "https://rpc.juno.bh.rocks",
        provider: "BlockHunters 🎯",
      },
      {
        address: "https://juno.kingnodes.com",
        provider: "kingnodes 👑",
      },
      {
        address: "https://juno-rpc.reece.sh",
        provider: "Reecepbcups",
      },
      {
        address: "https://juno-rpc.stakeandrelax.net",
        provider: "Stake&Relax Validator 🦥",
      },
      {
        address: "https://juno-mainnet-rpc.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "http://rpc-juno.freshstaking.com:39657",
        provider: "FreshSTAKING",
      },
      {
        address: "https://rpc-juno.architectnodes.com",
        provider: "Architect Nodes",
      },
      {
        address: "https://juno.rpc.interchain.ivaldilabs.xyz",
        provider: "ivaldilabs",
      },
      {
        address: "https://juno-rpc.cosmosrescue.com",
        provider: "cosmosrescue",
      },
      {
        address: "http://167.235.211.168:26657",
        provider: "CommunityStaking",
      },
      {
        address: "https://juno.rpc.silknodes.io",
        provider: "Silk Nodes",
      },
      {
        address: "https://juno.rpc.kjnodes.com",
        provider: "kjnodes",
      },
      {
        address: "https://rpc-juno-01.stakeflow.io",
        provider: "Genesis Lab",
      },
    ],
    rest: [
      {
        address: "https://lcd-juno.itastakers.com",
        provider: "itastakers",
      },
      {
        address: "https://rest-juno.ecostake.com",
        provider: "ecostake",
      },
      {
        address: "https://juno-api.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "https://api-juno.pupmos.network",
        provider: "PUPMØS",
      },
      {
        address: "https://api-juno-ia.cosmosia.notional.ventures/",
        provider: "Notional",
      },
      {
        address: "https://api.juno.chaintools.tech/",
        provider: "ChainTools",
      },
      {
        address: "https://juno-api.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://juno-api.kleomedes.network",
        provider: "Kleomedes",
      },
      {
        address: "https://api.juno.interbloc.org",
        provider: "Interbloc",
      },
      {
        address: "https://juno.rest.stakin-nodes.com",
        provider: "Stakin",
      },
      {
        address: "https://api.juno.bh.rocks",
        provider: "BlockHunters 🎯",
      },
      {
        address: "https://juno.kingnodes.com",
        provider: "kingnodes 👑",
      },
      {
        address: "https://juno-api.reece.sh",
        provider: "Reecepbcups",
      },
      {
        address: "https://juno-api.stakeandrelax.net",
        provider: "Stake&Relax Validator 🦥",
      },
      {
        address: "https://rest-juno.architectnodes.com",
        provider: "Architect Nodes",
      },
      {
        address: "https://juno-mainnet-lcd.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "https://juno.rest.interchain.ivaldilabs.xyz",
        provider: "ivaldilabs",
      },
      {
        address: "https://juno-api.cosmosrescue.com",
        provider: "cosmosrescue",
      },
      {
        address: "http://167.235.211.168:1317",
        provider: "CommunityStaking",
      },
      {
        address: "https://juno.api.silknodes.io",
        provider: "Silk Nodes",
      },
      {
        address: "https://juno.api.kjnodes.com",
        provider: "kjnodes",
      },
      {
        address: "https://api-juno-01.stakeflow.io",
        provider: "Genesis Lab",
      },
    ],
    grpc: [
      {
        address: "grpc-juno-ia.cosmosia.notional.ventures:443",
        provider: "Notional",
      },
      {
        address: "juno-grpc.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "juno-grpc.polkachu.com:12690",
        provider: "Polkachu",
      },
      {
        address: "juno.grpc.stakin-nodes.com:443",
        provider: "Stakin",
      },
      {
        address: "grpc-juno.kingnodes.com:443",
        provider: "kingnodes 👑",
      },
      {
        address: "http://juno-grpc.stakeandrelax.net:12690",
        provider: "Stake&Relax Validator 🦥",
      },
      {
        address: "grpc-juno.architectnodes.com:1443",
        provider: "Architect Nodes",
      },
      {
        address: "juno-mainnet-grpc.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "juno.grpc.interchain.ivaldilabs.xyz:443",
        provider: "ivaldilabs",
      },
      {
        address: "juno-grpc.cosmosrescue.com:9090",
        provider: "cosmosrescue",
      },
      {
        address: "http://167.235.211.168:9091",
        provider: "CommunityStaking",
      },
      {
        address: "juno.grpc.kjnodes.com:15790",
        provider: "kjnodes",
      },
      {
        address: "grpc-juno-01.stakeflow.io:2302",
        provider: "Genesis Lab",
      },
    ],
  },
  explorers: [
    {
      kind: "EZ Staking Tools",
      url: "https://ezstaking.tools/juno",
      tx_page: "https://ezstaking.tools/juno/txs/${txHash}",
      account_page: "https://ezstaking.tools/juno/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/juno",
      tx_page: "https://ping.pub/juno/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://juno.explorers.guru",
      tx_page: "https://juno.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/juno",
      tx_page: "https://www.mintscan.io/juno/txs/${txHash}",
      account_page: "https://www.mintscan.io/juno/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/juno",
      tx_page: "https://atomscan.com/juno/transactions/${txHash}",
      account_page: "https://atomscan.com/juno/accounts/${accountAddress}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/juno",
      tx_page: "https://explorer.tcnetwork.io/juno/transaction/${txHash}",
    },
    {
      kind: "Stakeflow",
      url: "https://stakeflow.io/juno",
      account_page: "https://stakeflow.io/juno/accounts/${accountAddress}",
    },
  ],
};

const osmosis = {
  $schema: "../chain.schema.json",
  chain_name: "osmosis",
  status: "live",
  network_type: "mainnet",
  website: "https://osmosis.zone/",
  update_link: "https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json",
  pretty_name: "Osmosis",
  chain_id: "osmosis-1",
  bech32_prefix: "osmo",
  daemon_name: "osmosisd",
  node_home: "$HOME/.osmosisd",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "uosmo",
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "uosmo",
      },
    ],
    lock_duration: {
      time: "1209600s",
    },
  },
  codebase: {
    git_repo: "https://github.com/osmosis-labs/osmosis",
    recommended_version: "v15.0.0",
    compatible_versions: ["v15.0.0"],
    binaries: {
      "linux/amd64":
        "https://github.com/osmosis-labs/osmosis/releases/download/v15.0.0/osmosisd-15.0.0-linux-amd64?checksum=sha256:6f5cead57c16c1e708df2a0f336e6e4494a026ba97b8d8afef95e5fc5b80b465",
      "linux/arm64":
        "https://github.com/osmosis-labs/osmosis/releases/download/v15.0.0/osmosisd-15.0.0-linux-arm64?checksum=sha256:94aee34e288148b155a2b0fdfe268a0bdc0d4a90de6db8f8a9cee74c2e829294",
    },
    cosmos_sdk_version: "0.45",
    consensus: {
      type: "tendermint",
      version: "0.34",
    },
    cosmwasm_version: "0.30",
    cosmwasm_enabled: true,
    ibc_go_version: "4.3.0",
    ics_enabled: ["ics20-1"],
    genesis: {
      name: "v3",
      genesis_url: "https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json",
    },
    versions: [
      {
        name: "v3",
        tag: "v3.1.0",
        height: 0,
        next_version_name: "v4",
      },
      {
        name: "v4",
        tag: "v4.2.0",
        height: 1314500,
        next_version_name: "v5",
      },
      {
        name: "v5",
        tag: "v6.4.1",
        height: 2383300,
        next_version_name: "v7",
      },
      {
        name: "v7",
        tag: "v8.0.0",
        height: 3401000,
        next_version_name: "v9",
      },
      {
        name: "v9",
        tag: "v10.0.1",
        height: 4707300,
        next_version_name: "v11",
      },
      {
        name: "v11",
        tag: "v11.0.0",
        height: 5432450,
        next_version_name: "v12",
      },
      {
        name: "v12",
        tag: "v12.3.0",
        height: 6246000,
        next_version_name: "v13",
      },
      {
        name: "v13",
        tag: "v13.1.0",
        height: 7241500,
        next_version_name: "v14",
      },
      {
        name: "v14",
        tag: "v14.0.0",
        height: 7937500,
        next_version_name: "v15",
      },
      {
        name: "v15",
        tag: "v15.0.0",
        height: 8732500,
        recommended_version: "v15.0.0",
        compatible_versions: ["v15.0.0"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.30",
        cosmwasm_enabled: true,
        ibc_go_version: "4.3.0",
        ics_enabled: ["ics20-1"],
        binaries: {
          "linux/amd64":
            "https://github.com/osmosis-labs/osmosis/releases/download/v15.0.0/osmosisd-15.0.0-linux-amd64?checksum=sha256:6f5cead57c16c1e708df2a0f336e6e4494a026ba97b8d8afef95e5fc5b80b465",
          "linux/arm64":
            "https://github.com/osmosis-labs/osmosis/releases/download/v15.0.0/osmosisd-15.0.0-linux-arm64?checksum=sha256:94aee34e288148b155a2b0fdfe268a0bdc0d4a90de6db8f8a9cee74c2e829294",
        },
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
      theme: {
        primary_color_hex: "#231D4B",
      },
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
  },
  peers: {
    seeds: [
      {
        id: "f515a8599b40f0e84dfad935ba414674ab11a668",
        address: "osmosis.blockpane.com:26656",
        provider: "blockpane",
      },
      {
        id: "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        address: "seeds.polkachu.com:12556",
        provider: "Polkachu",
      },
      {
        id: "20e1000e88125698264454a884812746c2eb4807",
        address: "seeds.lavenderfive.com:12556",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        address: "osmosis-mainnet-seed.autostake.com:26716",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        id: "3cc024d1c760c9cd96e6413abaf3b36a8bdca58e",
        address: "seeds.goldenratiostaking.net:1630",
        provider: "Golden Ratio Staking",
      },
      {
        id: "3e874613919a6f8b3fc26071fef563c88f031b3c",
        address: "seed-osmosis.freshstaking.com:31656",
        provider: "FreshSTAKING",
      },
      {
        id: "4dac1272a42e6b9e3ae3766304e12f1cb09ecbf0",
        address: "osmosis-seed.panthea.eu:40656",
        provider: "Panthea EU",
      },
      {
        id: "bd7064a50f5843e2c84c71c4dc18ac07424bdcc1",
        address: "seeds.whispernode.com:12556",
        provider: "WhisperNode🤐",
      },
      {
        id: "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        address: "osmosis.rpc.kjnodes.com:11259",
        provider: "kjnodes",
      },
      {
        id: "38ab18cb2ea1dfeb6232b429e1508f56b6ae5031",
        address: "seed-osmosis-01.stakeflow.io:65535",
        provider: "Genesis Lab",
      },
    ],
    persistent_peers: [
      {
        id: "4d9ac3510d9f5cfc975a28eb2a7b8da866f7bc47",
        address: "37.187.38.191:26656",
        provider: "stakelab",
      },
      {
        id: "2f9c16151400d8516b0f58c030b3595be20b804c",
        address: "37.120.245.167:26656",
        provider: "syncnode",
      },
      {
        id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        address: "osmosis-mainnet-peer.autostake.com:26716",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        id: "3e874613919a6f8b3fc26071fef563c88f031b3c",
        address: "seed-osmosis.freshstaking.com:31656",
        provider: "FreshSTAKING",
      },
      {
        id: "d3ec70517e584865b3863ca39cc7ac5c8ca964bb",
        address: "osmosis-peer.panthea.eu:26656",
        provider: "Panthea EU",
      },
      {
        id: "38ab18cb2ea1dfeb6232b429e1508f56b6ae5031",
        address: "peer-osmosis-01.stakeflow.io:65535",
        provider: "Genesis Lab",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.osmosis.zone/",
        provider: "Osmosis Foundation",
      },
      {
        address: "https://rpc-osmosis.blockapsis.com",
        provider: "chainapsis",
      },
      {
        address: "https://osmosis-rpc.quickapi.com:443",
        provider: "Chainlayer",
      },
      {
        address: "https://rpc-osmosis.whispernode.com:443",
        provider: "WhisperNode 🤐",
      },
      {
        address: "https://osmosis-rpc.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "https://rpc-osmosis.ecostake.com",
        provider: "ecostake",
      },
      {
        address: "https://osmosis-rpc.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://rpc-osmosis-ia.cosmosia.notional.ventures",
        provider: "Notional",
      },
      {
        address: "https://rpc.osmosis.interbloc.org",
        provider: "Interbloc",
      },
      {
        address: "https://osmosis.rpc.stakin-nodes.com",
        provider: "Stakin",
      },
      {
        address: "https://rpc-osmosis.goldenratiostaking.net",
        provider: "Golden Ratio Staking",
      },
      {
        address: "https://rpc.osl.zone",
        provider: "Osmosis Support Lab",
      },
      {
        address: "https://osmosis-mainnet-rpc.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "https://osmosis.rpc.interchain.ivaldilabs.xyz",
        provider: "ivaldilabs",
      },
      {
        address: "https://osmosis.api.onfinality.io/public",
        provider: "OnFinality",
      },
      {
        address: "https://osmosis.rpc.silknodes.io",
        provider: "Silk Nodes",
      },
      {
        address: "https://osmosis.rpc.kjnodes.com",
        provider: "kjnodes",
      },
      {
        address: "https://rpc-osmosis-01.stakeflow.io",
        provider: "Genesis Lab",
      },
    ],
    rest: [
      {
        address: "https://lcd.osmosis.zone/",
        provider: "Osmosis Foundation",
      },
      {
        address: "https://osmosis-lcd.quickapi.com:443",
        provider: "Chainlayer",
      },
      {
        address: "https://lcd-osmosis.blockapsis.com",
        provider: "chainapsis",
      },
      {
        address: "https://osmosis-api.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "https://rest-osmosis.ecostake.com",
        provider: "ecostake",
      },
      {
        address: "https://rest-osmosis.goldenratiostaking.net",
        provider: "Golden Ratio Staking",
      },
      {
        address: "https://api-osmosis-ia.cosmosia.notional.ventures",
        provider: "Notional",
      },
      {
        address: "https://api.osmosis.interbloc.org",
        provider: "Interbloc",
      },
      {
        address: "https://osmosis-api.polkachu.com",
        provider: "Polkachu",
      },
      {
        address: "https://osmosis.rest.stakin-nodes.com",
        provider: "Stakin",
      },
      {
        address: "https://api.osl.zone",
        provider: "Osmosis Support Lab",
      },
      {
        address: "https://osmosis-mainnet-lcd.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "https://osmosis.rest.interchain.ivaldilabs.xyz",
        provider: "ivaldilabs",
      },
      {
        address: "https://osmosis.api.silknodes.io",
        provider: "Silk Nodes",
      },
      {
        address: "https://osmosis.api.kjnodes.com",
        provider: "kjnodes",
      },
      {
        address: "https://api-osmosis-01.stakeflow.io",
        provider: "Genesis Lab",
      },
    ],
    grpc: [
      {
        address: "osmosis-grpc.lavenderfive.com:443",
        provider: "Lavender.Five Nodes 🐝",
      },
      {
        address: "grpc-osmosis-ia.cosmosia.notional.ventures:443",
        provider: "Notional",
      },
      {
        address: "osmosis.grpc.stakin-nodes.com:443",
        provider: "Stakin",
      },
      {
        address: "osmosis-mainnet-grpc.autostake.com:443",
        provider: "AutoStake 🛡️ Slash Protected",
      },
      {
        address: "osmosis.grpc.interchain.ivaldilabs.xyz:433",
        provider: "ivaldilabs",
      },
      {
        address: "osmosis.grpc.kjnodes.com:11290",
        provider: "kjnodes",
      },
      {
        address: "grpc-osmosis-01.stakeflow.io:6754",
        provider: "Genesis Lab",
      },
    ],
  },
  explorers: [
    {
      kind: "EZ Staking Tools",
      url: "https://ezstaking.tools/osmosis",
      tx_page: "https://ezstaking.tools/osmosis/txs/${txHash}",
      account_page: "https://ezstaking.tools/osmosis/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/osmosis",
      tx_page: "https://www.mintscan.io/osmosis/txs/${txHash}",
      account_page: "https://www.mintscan.io/osmosis/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/osmosis",
      tx_page: "https://ping.pub/osmosis/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://osmosis.explorers.guru",
      tx_page: "https://osmosis.explorers.guru/transaction/${txHash}",
      account_page: "https://osmosis.explorers.guru/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/osmosis",
      tx_page: "https://atomscan.com/osmosis/transactions/${txHash}",
      account_page: "https://atomscan.com/osmosis/accounts/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://bigdipper.live/osmosis",
      tx_page: "https://bigdipper.live/osmosis/transactions/${txHash}",
      account_page: "https://bigdipper.live/osmosis/accounts/${accountAddress}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/osmosis",
      tx_page: "https://explorer.tcnetwork.io/osmosis/transaction/${txHash}",
      account_page: "https://explorer.tcnetwork.io/osmosis/account/${accountAddress}",
    },
    {
      kind: "Stakeflow",
      url: "https://stakeflow.io/osmosis",
      account_page: "https://stakeflow.io/osmosis/accounts/${accountAddress}",
    },
  ],
  keywords: ["dex"],
};

const osmosistestnet = {
  $schema: "../../chain.schema.json",
  chain_name: "osmosistestnet",
  status: "live",
  network_type: "testnet",
  pretty_name: "Osmosis Testnet",
  chain_id: "osmo-test-4",
  bech32_prefix: "osmo",
  daemon_name: "osmosisd",
  node_home: "$HOME/.osmosisd",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "uosmo",
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "uosmo",
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/osmosis-labs/osmosis",
    recommended_version: "v15.0.0-rc3",
    compatible_versions: ["v15.0.0-rc3"],
    cosmos_sdk_version: "0.45",
    consensus: {
      type: "tendermint",
      version: "0.34",
    },
    cosmwasm_version: "0.29",
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: "https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2",
    },
    versions: [
      {
        name: "v14.0.0-rc1",
        recommended_version: "v14.0.0-rc1",
        compatible_versions: ["v14.0.0-rc1"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.29",
        cosmwasm_enabled: true,
      },
      {
        name: "v15.0.0-rc3",
        recommended_version: "v15.0.0-rc3",
        compatible_versions: ["v15.0.0-rc3"],
        cosmos_sdk_version: "0.45",
        consensus: {
          type: "tendermint",
          version: "0.34",
        },
        cosmwasm_version: "0.29",
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: "0f9a9c694c46bd28ad9ad6126e923993fc6c56b1",
        address: "137.184.181.105:26656",
        provider: "",
      },
    ],
    persistent_peers: [
      {
        id: "4ab030b7fd75ed895c48bcc899b99c17a396736b",
        address: "137.184.190.127:26656",
        provider: "",
      },
      {
        id: "3dbffa30baab16cc8597df02945dcee0aa0a4581",
        address: "143.198.139.33:26656",
        provider: "",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.osmo-test.ccvalidators.com/",
        provider: "CryptoCrew",
      },
      {
        address: "https://osmosistest-rpc.quickapi.com/",
        provider: "ChainLayer",
      },
      {
        address: "https://rpc.testnet.osmosis.zone/",
        provider: "Osmosis",
      },
    ],
    rest: [
      {
        address: "https://osmosistest-lcd.quickapi.com/",
        provider: "CryptoCrew",
      },
      {
        address: "https://lcd.osmo-test.ccvalidators.com/",
        provider: "ChainLayer",
      },
      {
        address: "https://testnet-rest.osmosis.zone/",
        provider: "",
      },
    ],
    grpc: [
      {
        address: "https://grpc-test.osmosis.zone:443",
        provider: "Osmosis",
      },
    ],
  },
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
  },
  keywords: ["dex", "testnet"],
};

const chains = [juno, junotestnet, osmosis, osmosistestnet];

export default chains;
