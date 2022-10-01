# Cosmos Smart Contract Explorer Proposal
Name: ? (blockhopper, chainhopper, chainex, explorer, cosmexplorer, cosmhopper, cosmwander)

With tons of new attention directed at the Cosmos ecosystem recently, we have drafted the following proposal text on launching a public good Cosmos smart contract explorer. We would like your feedback on what we have so far.

We propose to create a web app where smart contract developers can come explore all the different messages offered by different chains and contracts on those chains. This is a huge gap in the market seeing as how the only way to currently interact with a chain is to use the cli or through building a web app or smart contract. This is tedious and hard to keep track of.

Furthermore, there doesn't exist a good way to integration test a smart contract/new module which is in dev, often a developer will need to create mocks on a chain where the dev net does not have the tooling in place to support extensive & complete testing, or they must continuously deploy to testnet with every change (but then price oracles don't work for any swapping capability).

For this work CosmWander is requesting $?? to get started with the Phase 1 deliverables.

## Phase 1 - 4 weeks
* Osmosis chain support
* Cosmos (maybe neutron) chain support
* ?? chain support
* Compile proto library of chain
* Allow for github repo linking to add your smart contract (how to do for private repos?)
* Compile of Instantiate, ExecuteMsg, and QueryMsg types to protos -> to jsonschema for UI
* easy coin/denom picker with prices included in UI 
* UI search bar for arbitrary contract addresses 
* Add already-deployed & open source contracts to the index (e.g. Apollo Safe, all cw-base contracts that are deployed)
* send queries to RPC node & display results
* send arbitrary RPC Messages through keplr
* testnet chain support?

## Phase 2 - 2 Months
* forking mainnet locally when running integration tests on localnet (is this better as a PR against wasmd?)
* automatic updates for when chains upgrade (update proto defs daily from github)
* Code snippet generation (I should be able to generate rust snippets for triggering queries or adding msgs for arbitrary queries/messages)
* Release support for more chains (injective, composable, secret, stargaze)

## Phase 3 - 3 Months
* in-browser CosmWasm Repl for easy testing/prototyping of smart contracts and modules
    - (basically running a light node in-browser with Web Assembly)

CosmWander hopes to become a Cosmos public good organization focused on improving and expanding the tools available across the Cosmos ecosystem.