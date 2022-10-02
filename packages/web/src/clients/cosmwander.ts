import { ICode, IContract } from '../types/db-schemas'

import querySchema from '../../resources/schema/query_msg.json'
import executeSchema from '../../resources/schema/execute_msg.json'
import instantiateSchema from '../../resources/schema/instantiate_msg.json'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
const CODE_METADATA_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/metadata`

async function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function sendRequest (url, method, body) {
  try {
    const response = await axios[method](url, body)
    return response.data
  } catch (e) {
    return e.message
  }
}

export async function fetchCode (
  chainId: string,
  codeId: string
): Promise<ICode> {
  if (!chainId || !codeId) throw new Error('Missing chainId or codeId')
  const codeResponse = await axios.get(CODE_METADATA_ENDPOINT(chainId, codeId))
  //   let code: ICode = {
  //     code_id: 100,
  //     creator: 'ya mom',
  //     checksum: 'balbdaofbei',
  //     contracts: ['osmo1233'],
  //     schema: {
  //       executeSchema: null,
  //       querySchema: null,
  //       instantiateSchema: null
  //     },
  //     repository: 'github.com/ya/mom',
  //     verified: true,
  //     last_verified: new Date()
  //   }
  return codeResponse.data
}

export async function fetchContract (contractAddress): Promise<IContract> {
  await sleep(500)
  let contract: IContract = {
    address: 'osmo1233',
    code_id: 100,
    creator: 'yamom',
    label: 'lol',
    ibcPortId: 'port-2',
    migrations: {
      '2': 'osmo1234'
    }
  }
  return contract
}
