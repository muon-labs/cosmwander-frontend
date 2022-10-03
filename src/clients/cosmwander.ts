import { ICode, IContract } from '../types/db-schemas'

import axios from 'axios'

console.log('RUNNING PROCESS IN ' + process.env.NODE_ENV + ' MODE')

const BASE_URL = process.env.NODE_ENV ==='test' ? 'http://localhost:3001' : 'https://api.cosmwander.xyz'

const CODE_METADATA_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/metadata`
const CODE_SCHEMA_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/schema`
// /api/contract/osmo-test-4/osmo1nkanykc4506zynh379gm3w7zqg305x23je6halr25ydtlspv8uzsg82unl/schema
const CONTRACT_METADATA_ENDPOINT = (chainId: string, contractAddress: string) =>
  `${BASE_URL}/api/contract/${chainId}/${contractAddress}/metadata`

const CODE_UPLOAD_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/schema`

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
  const codeSchemaResponse = await axios.get(
    CODE_SCHEMA_ENDPOINT(chainId, codeId)
  )
  console.log({ codeSchemaResponse })
  return { ...codeResponse.data, schemas: codeSchemaResponse.data }
  // let code: ICode = {
  //   code_id: 100,
  //   creator: 'ya mom',
  //   checksum: 'balbdaofbei',
  //   contracts: ['osmo1233'],
  //   schema: {
  //     executeSchema: {
  //         "$schema": "http://json-schema.org/draft-07/schema#",
  //         "title": "ExecuteMsg",
  //         "oneOf": [
  //             {
  //                 "type": "object",
  //                 "required": [
  //                     "exec"
  //                 ],
  //                 "properties": {}
  //             }
  //         ]
  //     },
  //     querySchema: {
  //         "$schema": "http://json-schema.org/draft-07/schema#",
  //         "title": "ExecuteMsg",
  //         "oneOf": [
  //             {
  //                 "type": "object",
  //                 "required": [
  //                     "query"
  //                 ],
  //                 "properties": {}
  //             }
  //         ]
  //     },
  //     instantiateSchema: null
  //   },
  //   repository: 'github.com/ya/mom',
  //   verified: true,
  //   last_verified: new Date()
  // }
  //   return code
}

export async function fetchContract (
  chainId: string,
  address: string
): Promise<IContract> {
  if (!chainId || !address) throw new Error('Missing chainId or address')
  const contractResponse = await axios.get(
    CONTRACT_METADATA_ENDPOINT(chainId, address)
  )
  return contractResponse.data
  // let contract: IContract = {
  //   address: 'osmo1233',
  //   code_id: 100,
  //   creator: 'yamom',
  //   label: 'lol',
  //   ibcPortId: 'port-2',
  //   migrations: {
  //     '2': 'osmo1234'
  //   }
  // }
  // return contract
}

export async function uploadCode (
  chainId: string,
  codeId: string,
  githubRef: { repoUrl: string; commitHash: string; repoPath: string }
) {
  if (!chainId || !codeId || !githubRef) {
    throw new Error('Missing chainId, codeId or githubRef')
  }
  const url = CODE_UPLOAD_ENDPOINT(chainId, codeId)
  const body = {
    githubRef
  }
  const response = await axios.post(url, body)
  return response.data
}
