export const chains = [
  {
    chain_name: 'osmosis',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://osmosis.zone/',
    update_link:
      'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
    pretty_name: 'Osmosis',
    chain_id: 'osmosis-1',
    bech32_prefix: 'osmo',
    daemon_name: 'osmosisd',
    node_home: '$HOME/.osmosisd',
    genesis: {
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uosmo',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uosmo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/osmosis-labs/osmosis',
      recommended_version: '11.0.0',
      compatible_versions: ['11.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.0/osmosisd-11.0.0-linux-amd64?checksum=sha256:d01423cf847b7f95a94ade8811bbf6dd9ec5938d46af0a14bc62caaaa7b7143e',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.0/osmosisd-11.0.0-linux-arm64?checksum=sha256:375699e90e5b76fd3d7e7a9ab631b40badd97140136f361e6b3f06be3fbd863d'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true,
      genesis: {
        name: 'v3.1.0',
        genesis_url:
          'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
      },
      versions: [
        {
          name: 'v3',
          tag: 'v3.1.0',
          height: 0,
          next_version_name: 'v4'
        },
        {
          name: 'v4',
          tag: 'v4.2.0',
          height: 1314500,
          next_version_name: 'v5'
        },
        {
          name: 'v5',
          tag: 'v6.4.1',
          height: 2383300,
          next_version_name: 'v7'
        },
        {
          name: 'v7',
          tag: 'v8.0.0',
          height: 3401000,
          next_version_name: 'v9'
        },
        {
          name: 'v9',
          tag: 'v10.0.1',
          height: 4707300,
          next_version_name: 'v11'
        },
        {
          name: 'v11',
          tag: 'v11.0.0',
          height: 5432450
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.osmosis.zone/',
          provider: 'Osmosis Foundation'
        }
      ],
      rest: [
        {
          address: 'https://lcd.osmosis.zone/',
          provider: 'Osmosis Foundation'
        }
      ],
      grpc: [
        {
          address: 'osmosis.strange.love:9090',
          provider: 'strangelove'
        },
        {
          address: 'https://osmosis-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'grpc-osmosis-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'osmosis-grpc.polkachu.com:12590',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/osmosis',
        tx_page: 'https://www.mintscan.io/osmosis/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/osmosis/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/osmosis',
        tx_page: 'https://ping.pub/osmosis/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://osmosis.explorers.guru',
        tx_page: 'https://osmosis.explorers.guru/transaction/${txHash}',
        account_page:
          'https://osmosis.explorers.guru/transaction/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/osmosis',
        tx_page: 'https://atomscan.com/osmosis/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    },
    keywords: ['dex']
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'osmosistestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Osmosis Testnet',
    chain_id: 'osmo-test-4',
    bech32_prefix: 'osmo',
    daemon_name: 'osmosisd',
    node_home: '$HOME/.osmosisd',
    genesis: {
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uosmo',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uosmo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/osmosis-labs/osmosis',
      recommended_version: 'v11.0.0',
      compatible_versions: ['v11.0.0'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.24',
      cosmwasm_enabled: true
    },
    peers: {
      seeds: [
        {
          id: '0f9a9c694c46bd28ad9ad6126e923993fc6c56b1',
          address: '137.184.181.105:26656',
          provider: ''
        }
      ],
      persistent_peers: [
        {
          id: '4ab030b7fd75ed895c48bcc899b99c17a396736b',
          address: '137.184.190.127:26656',
          provider: ''
        },
        {
          id: '3dbffa30baab16cc8597df02945dcee0aa0a4581',
          address: '143.198.139.33:26656',
          provider: ''
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://osmosistest-rpc.quickapi.com/',
          provider: 'ChainLayer'
        }
      ],
      rest: [
        {
          address: 'https://osmosistest-lcd.quickapi.com/',
          provider: 'CryptoCrew'
        }
      ],
      grpc: []
    },
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    },
    keywords: ['dex', 'testnet']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'juno',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.junonetwork.io/',
    pretty_name: 'Juno',
    chain_id: 'juno-1',
    bech32_prefix: 'juno',
    daemon_name: 'junod',
    node_home: '$HOME/.juno',
    genesis: {
      genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujuno',
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ujuno'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/CosmosContracts/juno',
      recommended_version: 'v9.0.0',
      compatible_versions: ['v9.0.0'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true
    },
    peers: {
      seeds: [
        {
          id: '2484353dab0b2c1275765b8ffa2c50b3b36158ca',
          address: 'seed-node.junochain.com:26656'
        },
        {
          id: '90b09362d9ce3845096c4938eea0dba682b0ad2c',
          address: 'juno-seed-new.blockpane.com:26656'
        },
        {
          id: '22ee6e65e5e79cd0b970dd11e52761de8d1d6dfd',
          address: 'seeds.pupmos.network:2001',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12656',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12656',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: 'b1f46f1a1955fc773d3b73180179b0e0a07adce1',
          address: '162.55.244.250:39656'
        },
        {
          id: '7f593757c0cde8972ce929381d8ac8e446837811',
          address: '178.18.255.244:26656'
        },
        {
          id: '7b22dfc605989d66b89d2dfe118d799ea5abc2f0',
          address: '167.99.210.65:26656'
        },
        {
          id: '4bd9cac019775047d27f9b9cea66b25270ab497d',
          address: '137.184.7.164:26656'
        },
        {
          id: 'bd822a8057902fbc80fd9135e335f0dfefa32342',
          address: '65.21.202.159:38656'
        },
        {
          id: '15827c6c13f919e4d9c11bcca23dff4e3e79b1b8',
          address: '51.38.52.210:38656'
        },
        {
          id: 'e665df28999b2b7b40cff2fe4030682c380bf294',
          address: '188.40.106.109:38656'
        },
        {
          id: '92804ce50c85ff4c7cf149d347dd880fc3735bf4',
          address: '34.94.231.154:26656'
        },
        {
          id: '795ed214b8354e8468f46d1bbbf6e128a88fe3bd',
          address: '34.127.19.222:26656'
        },
        {
          id: 'ea9c1ac0e91639b2c7957d9604655e2263abe4e1',
          address: '185.181.103.136:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://rpc-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rpc-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://juno-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://juno-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc.junomint.com',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.juno.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://juno-rpc.kleomed.es',
          provider: 'Kleomedes'
        }
      ],
      rest: [
        {
          address: 'https://lcd-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://lcd-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rest-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://juno-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://lcd.junomint.com',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-juno-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.juno.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://juno-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://juno-api.kleomed.es',
          provider: 'Kleomedes'
        }
      ],
      grpc: [
        {
          address: '35.243.205.230:9090',
          provider: 'strangelove'
        },
        {
          address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://juno-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://juno.grpcui.chaintools.host/',
          provider: 'ChainTools'
        },
        {
          address: 'juno-grpc.polkachu.com:12690',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/juno',
        tx_page: 'https://ping.pub/juno/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://juno.explorers.guru',
        tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/juno',
        tx_page: 'https://www.mintscan.io/juno/txs/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/juno',
        tx_page: 'https://atomscan.com/juno/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png'
    }
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'junotestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Juno Testnet',
    chain_id: 'uni-5',
    bech32_prefix: 'juno',
    daemon_name: 'junod',
    node_home: '$HOME/.juno',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujunox',
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ujunox'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/CosmosContracts/juno',
      recommended_version: 'v9.0.0',
      compatible_versions: ['v9.0.0'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: 'ed90921d43ede634043d152d7a87e8881fb85e90',
          address: '65.108.77.106:26709',
          provider: 'EZStaking.io'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.uni.juno.deuslabs.fi:443',
          provider: 'Deuslab'
        }
      ],
      rest: [
        {
          address: 'https://lcd.uni.juno.deuslabs.fi',
          provider: 'Deuslab'
        }
      ],
      grpc: [
        {
          address: 'juno-testnet-grpc.polkachu.com:12690',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'Mintscan',
        url: 'https://testnet.mintscan.io/juno-testnet',
        tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
      },
      {
        kind: 'NodesGuru',
        url: 'https://testnet.juno.explorers.guru/',
        tx_page: 'https://testnet.juno.explorers.guru/transaction/${txHash}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stargaze',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://stargaze.zone/',
    pretty_name: 'Stargaze',
    chain_id: 'stargaze-1',
    bech32_prefix: 'stars',
    daemon_name: 'starsd',
    node_home: '$HOME/.starsd',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
    },
    codebase: {
      git_repo: 'https://github.com/public-awesome/stargaze',
      recommended_version: 'v7.0.0',
      compatible_versions: ['v7.0.0']
    },
    peers: {
      seeds: [
        {
          id: '70ed826888f102c7c1ceb4d07287956628a53508',
          address: '174.138.124.7:36656'
        },
        {
          id: '722079345d941cd2da3daedea548c909d9b83ec5',
          address: '104.248.101.113:36656'
        },
        {
          id: 'd5fc4f479c4e212c96dff5704bb2468ea03b8ae3',
          address: 'sg-seed.blockpane.com:26656',
          provider: '[ block pane ]'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'stargaze.seed.rhinostake.com:16656',
          provider: 'RHINO'
        },
        {
          id: '2f7b2d38b1a4f76b20e917e01fb9f4a200bbf80c',
          address: 'seeds.pupmos.network:2004',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13756',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: '1d73521c565b37a53038fc730bcd207a3db361b6',
          address: '144.91.91.30:26656',
          provider: '0xSR'
        },
        {
          id: '524dd60331c56d198deabbb70238c2cc69119cca',
          address: '161.97.122.216:36656',
          provider: 'Army IDs'
        },
        {
          id: '0c9ebd7b36f96d0279dbf6dc38572f5797c096c1',
          address: '65.108.42.168:26656',
          provider: 'ramuchi.tech'
        },
        {
          id: '320e4b81ab327dd2593a39de0d3ae718fdb9347c',
          address: '176.9.168.220:26656',
          provider: 'Staketab'
        },
        {
          id: 'b8eeb6d99594c218c0373d8ec4c1e81031b92198',
          address: '68.183.92.46:26656',
          provider: 'KingSuper'
        },
        {
          id: '387c32677c54dd4627366ffdf8e2dda68e71af69',
          address: '54.193.168.147:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'e28635dc537dce1d6f1cf44b7b335a530d923fa1',
          address: '15.165.94.246:26656',
          provider: 'Cosmostation'
        },
        {
          id: '413562a502b4a47ec3375bfae6aa01bc47bc6979',
          address: '204.236.141.188:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'ca93b9bed1a98184f36ca31a6cc6dad2e289a2d4',
          address: '94.130.165.103:26656',
          provider: 'OranG3cluB'
        },
        {
          id: '0c7e82641f81754fc30158587c7e4a30ddb5c967',
          address: '54.216.187.98:26656',
          provider: 'needlecast'
        },
        {
          id: '1de5e685e687d0df35e6f3734ee04aff956d5c0f',
          address: '75.119.154.98:26656',
          provider: 'StakeLab'
        },
        {
          id: '6353ff1783e076a70ab444c4229c01ed6df6b477',
          address: '65.21.193.190:26656',
          provider: 'sashamaxymchuk[MantiCore]'
        },
        {
          id: '5eb7bcdd83b47744b652f11ecd8495a670612643',
          address: '135.181.176.62:26656',
          provider: 'StakeCraft'
        },
        {
          id: '75ea9c7b04be4a5779853b6e17c773ab092652c8',
          address: '91.230.111.50:26656',
          provider: 'EmreNOP | BlockSeal'
        },
        {
          id: '9f860496d2a346cc7888d7b4a7887f6bfc0fc0e4',
          address: '162.55.39.33:26656',
          provider: 'Blackhox'
        },
        {
          id: 'f89e655de3e6804e6448de3de3428bea1fd0fa97',
          address: '135.181.21.55:36656',
          provider: 'Alex (Bambarello) Validator'
        },
        {
          id: '1c8aabb166c7757c26cdbb1bfc380146ca59bc4e',
          address: '135.181.179.49:26356',
          provider: 'Bloqhub'
        },
        {
          id: '2783a2b3bf3f84947c919588e8b0ca2c05e8053d',
          address: '167.99.238.45:26656'
        },
        {
          id: '64d19582ff31ac88245ac604dc18d48b41470f48',
          address: '167.99.238.45:26656'
        },
        {
          id: 'c636bf9ad65959b738c15eb5458a89a88cba32a4',
          address: '135.181.102.205:26656',
          provider: 'tsundokum'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://rpc.stargaze.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc.stargaze.ezstaking.io/',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://stargaze-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-stargaze-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://stargaze.c29r3.xyz:443/rpc/',
          provider: 'c29r3'
        },
        {
          address: 'https://rpc.stargaze.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://rest.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://api.stargaze.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://api.stargaze.ezstaking.io/',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://api-stargaze-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://stargaze.c29r3.xyz:443/api/',
          provider: 'c29r3'
        },
        {
          address: 'https://stargaze-rapipc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.stargaze.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'grpc-stargaze-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'stargaze-grpc.polkachu.com:13790',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.stargaze.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stargaze/',
        tx_page: 'https://www.mintscan.io/stargaze/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/stargaze',
        tx_page: 'https://ping.pub/stargaze/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/stargaze',
        tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}'
      }
    ],
    logo_URIs:{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stargaze',
    status: 'live',
    network_type: 'testnet',
    website: 'https://stargaze.zone/',
    pretty_name: 'Stargaze Testnet',
    chain_id: 'elgafar-1',
    bech32_prefix: 'stars',
    daemon_name: 'starsd',
    node_home: '$HOME/.starsd',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
    },
    codebase: {
      git_repo: 'https://github.com/public-awesome/stargaze',
      recommended_version: 'v7.0.0',
      compatible_versions: ['v7.0.0']
    },
    peers: {
      seeds: [
        {
          id: '70ed826888f102c7c1ceb4d07287956628a53508',
          address: '174.138.124.7:36656'
        },
        {
          id: '722079345d941cd2da3daedea548c909d9b83ec5',
          address: '104.248.101.113:36656'
        },
        {
          id: 'd5fc4f479c4e212c96dff5704bb2468ea03b8ae3',
          address: 'sg-seed.blockpane.com:26656',
          provider: '[ block pane ]'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'stargaze.seed.rhinostake.com:16656',
          provider: 'RHINO'
        },
        {
          id: '2f7b2d38b1a4f76b20e917e01fb9f4a200bbf80c',
          address: 'seeds.pupmos.network:2004',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13756',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: '1d73521c565b37a53038fc730bcd207a3db361b6',
          address: '144.91.91.30:26656',
          provider: '0xSR'
        },
        {
          id: '524dd60331c56d198deabbb70238c2cc69119cca',
          address: '161.97.122.216:36656',
          provider: 'Army IDs'
        },
        {
          id: '0c9ebd7b36f96d0279dbf6dc38572f5797c096c1',
          address: '65.108.42.168:26656',
          provider: 'ramuchi.tech'
        },
        {
          id: '320e4b81ab327dd2593a39de0d3ae718fdb9347c',
          address: '176.9.168.220:26656',
          provider: 'Staketab'
        },
        {
          id: 'b8eeb6d99594c218c0373d8ec4c1e81031b92198',
          address: '68.183.92.46:26656',
          provider: 'KingSuper'
        },
        {
          id: '387c32677c54dd4627366ffdf8e2dda68e71af69',
          address: '54.193.168.147:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'e28635dc537dce1d6f1cf44b7b335a530d923fa1',
          address: '15.165.94.246:26656',
          provider: 'Cosmostation'
        },
        {
          id: '413562a502b4a47ec3375bfae6aa01bc47bc6979',
          address: '204.236.141.188:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'ca93b9bed1a98184f36ca31a6cc6dad2e289a2d4',
          address: '94.130.165.103:26656',
          provider: 'OranG3cluB'
        },
        {
          id: '0c7e82641f81754fc30158587c7e4a30ddb5c967',
          address: '54.216.187.98:26656',
          provider: 'needlecast'
        },
        {
          id: '1de5e685e687d0df35e6f3734ee04aff956d5c0f',
          address: '75.119.154.98:26656',
          provider: 'StakeLab'
        },
        {
          id: '6353ff1783e076a70ab444c4229c01ed6df6b477',
          address: '65.21.193.190:26656',
          provider: 'sashamaxymchuk[MantiCore]'
        },
        {
          id: '5eb7bcdd83b47744b652f11ecd8495a670612643',
          address: '135.181.176.62:26656',
          provider: 'StakeCraft'
        },
        {
          id: '75ea9c7b04be4a5779853b6e17c773ab092652c8',
          address: '91.230.111.50:26656',
          provider: 'EmreNOP | BlockSeal'
        },
        {
          id: '9f860496d2a346cc7888d7b4a7887f6bfc0fc0e4',
          address: '162.55.39.33:26656',
          provider: 'Blackhox'
        },
        {
          id: 'f89e655de3e6804e6448de3de3428bea1fd0fa97',
          address: '135.181.21.55:36656',
          provider: 'Alex (Bambarello) Validator'
        },
        {
          id: '1c8aabb166c7757c26cdbb1bfc380146ca59bc4e',
          address: '135.181.179.49:26356',
          provider: 'Bloqhub'
        },
        {
          id: '2783a2b3bf3f84947c919588e8b0ca2c05e8053d',
          address: '167.99.238.45:26656'
        },
        {
          id: '64d19582ff31ac88245ac604dc18d48b41470f48',
          address: '167.99.238.45:26656'
        },
        {
          id: 'c636bf9ad65959b738c15eb5458a89a88cba32a4',
          address: '135.181.102.205:26656',
          provider: 'tsundokum'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.elgafar-1.stargaze-apis.com:443',
          provider: 'Stargaze Foundation'
        }
      ],
      rest: [
        {
          address: 'https://rest.elgafar-1.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        }
      ],
      grpc: [
        {
          address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660/',
          provider: 'Notional'
        },
        {
          address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660/',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stargaze/',
        tx_page: 'https://www.mintscan.io/stargaze/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/stargaze',
        tx_page: 'https://ping.pub/stargaze/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/stargaze',
        tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
    }
  }
]
