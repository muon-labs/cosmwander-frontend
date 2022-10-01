import { getSigningClient } from '../clients/wallet'
import { StdFee } from '@cosmjs/amino'

const defaultFee: StdFee = {
  amount: [
    {
      denom: 'uosmo',
      amount: '24812'
    }
  ],
  gas: '9924561'
}

export async function getCodeMetadata (code_id: string, chainId: string) {
  console.log('Loading wallet...')
  const { accounts, signingClient } = await getSigningClient()

  console.log('Sending test execution...')
  let execMsgTypes = []
  let queryMsgTypes = []

  let execRes
  try {
    await signingClient.execute(
      accounts[0].address,
      'osmo1ejycngcuqyw2h8afhlzkq0cmjegpt96x583jh99anjzeut2rm4sqmf8909',
      { msg: {} },
      defaultFee
    )
  } catch (e) {
    // console.error({ e })
    execRes = e.message
    //   "Error: Error when broadcasting tx 2A5249963356A91A8E05A6BB4087A27FEFEED89923E70392EE234CA277BF3B7C at height 6799591. Code: 5; Raw log: failed to execute message; message index: 0: Error parsing into type nebula::options::ExecuteMsg: unknown variant `msg`, expected one of `create`, `set_recipient`, `transfer_recipient`, `change_creator`, `cancel`, `settle`, `collect_collateral`, `expire_option`: execute wasm contract failed"

    if (execRes.includes('expected one of')) {
      // get expected exec message types
      execMsgTypes = execRes
        .split('expected one of ')[1]
        .split(': execute wasm contract failed')[0]
        .split(', ')
        .map((msgType: string) => msgType.replace(/`/g, ''))
    }
  }

  console.log('Sending test query...')
  let queryRes
  try {
    await signingClient.queryContractSmart(
      'osmo1ejycngcuqyw2h8afhlzkq0cmjegpt96x583jh99anjzeut2rm4sqmf8909',
      { msg: {} }
    )
  } catch (e) {
    // console.error({ e })
    queryRes = e.message
    //   'Error: Query failed with (18): Error parsing into type nebula::options::QueryMsg: unknown variant `msg`, expected one of `get_vault_by_id`, `get_state_info`, `get_vault_count`: query wasm contract failed: invalid request'
    if (queryRes.includes('expected one of')) {
      // get expected query message types
      queryMsgTypes = queryRes
        .split('expected one of ')[1]
        .split(': query wasm contract failed')[0]
        .split(', ')
        .map((msgType: string) => msgType.replace(/`/g, ''))
    }
  }

  console.log({ execMsgTypes, queryMsgTypes })
}
