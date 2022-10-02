import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import { KeyboardArrowRight, Refresh } from '@material-ui/icons'
import axios from 'axios'
import ContractInterface from '../src/partials/ContractInterface'

import { HttpJsonSchemaOrgDraft04Schema } from '../src/types/HttpJsonSchemaOrgDraft04Schema'
import {
  getClient,
  getQueryClientCosmWasm,
  getQueryClientStargate
} from '../src/utils/utils'
import { Coin, StargateClient, StdFee } from '@cosmjs/stargate'

import GenericMessage from '../src/components/messages/GenericMessage'
import instantiateSchema from '../resources/schema/instantiate_msg.json'
import querySchema from '../resources/schema/query_msg.json'
import executeSchema from '../resources/schema/execute_msg.json'
import AppNav from '../src/components/AppNav'
import config from '../config'
import ContractExplorer from '../src/partials/ContractExplorer'
import CodeAddressInfo from '../src/partials/CodeAddressInfo'
import { fetchCode, fetchContract } from '../src/clients/cosmwander'
import { ICode, IContract } from '../src/types/db-schemas'

const useStyles = makeStyles({
  root: {}
})

function getParams () {
  const params = new URLSearchParams(window.location.search)
  const codeId = params.get('codeId')
  const contractAddress = params.get('contractAddress')
  return { codeId, contractAddress }
}

const Search = props => {
  const classes = useStyles()

  const [activeWindow, setActiveWindow] = useState<
    'instantiate' | 'query' | 'execute'
  >('instantiate')

  const [address, setAddress] = useState(
    'osmo1ha6g022yw4dz2gkg4fdq6p3cntzrfx37mctr4xxrfflmzpgk6sesnmm4h2'
  )
  const [chainId, setChainId] = useState('osmo-test-4')
  const [code, setCode] = useState('951')
  const [loadingMetadata, setLoadingMetadata] = useState(true)
  const [codeMetadata, setCodeMetadata] = useState<ICode>(null)
  const [contractMetadata, setContractMetadata] = useState<IContract>(null)
  const [addrInfo, setAddrInfo] = useState({ balance: [], account: {} })

  console.log([codeMetadata])

  useEffect(() => {
    const { codeId, contractAddress } = getParams()
    if (codeId) setCode(codeId)
    if (contractAddress) setAddress(contractAddress)
  }, [])

  useEffect(() => {
    // fetch code & address info
    getMetadata()
  }, [code, address])

  async function getMetadata () {
    setLoadingMetadata(true)
    if (code) {
      const codeMeta = await fetchCode(chainId, code)
      setCodeMetadata(codeMeta)
    }
    if (address) {
      const contractMeta = await fetchContract(address)
      setContractMetadata(contractMeta)
    }
    setLoadingMetadata(false)
  }

  async function getContractInfo () {
    const client = await getQueryClientCosmWasm('osmo-test-4')
    const contractInfo = await client.getContract(address)
    console.log({ contractInfo })
  }

  async function queryContract (
    queryMsg: any
  ): Promise<{ response: string; error: string }> {
    try {
      const client = await getQueryClientCosmWasm('osmo-test-4')
      console.log({ queryMsg })
      const result = await client.queryContractSmart(address, queryMsg)
      console.log(result)
      return { response: result, error: null }
    } catch (error) {
      console.error(error)
      return {
        response: null,
        error:
          typeof error === 'string'
            ? error
            : error?.message || JSON.stringify(error)
      }
    }
  }

  async function executeContract (
    execMsg: any
  ): Promise<{ response: string; error: string }> {
    try {
      const fee: StdFee = {
        amount: [
          {
            denom: 'uosmo',
            amount: '0'
          }
        ],
        gas: '200000' // TODO URGENT: figure out gas on different chains and set accordingly
      }

      const [client, accounts] = await getClient('osmo-test-4')

      console.log({ execMsg })
      const result = await client.execute(
        accounts[0]?.address,
        address,
        execMsg,
        fee,
        'CosmWander execute'
      )

      console.log(result)
      return { response: JSON.stringify(result), error: null }
    } catch (error) {
      console.error(error)
      return {
        response: null,
        error:
          typeof error === 'string'
            ? error
            : error?.message || JSON.stringify(error)
      }
    }
  }

  const mutableProps = {
    address: address,
    setAddress: setAddress,
    code: code,
    setCode,
    addrInfo,
    setAddrInfo
  }

  return (
    <div className={classes.root}>
      <AppNav />
      <Container
        maxWidth='lg'
        style={{
          paddingTop: 16
        }}
      >
        <CodeAddressInfo mutableProps={mutableProps} codeMetadata={codeMetadata} />

        {/* {txs && <pre>
          {JSON.stringify(txs, null, 2)}
          </pre>} */}
        {loadingMetadata ? (
          <CircularProgress />
        ) : (
          <ContractExplorer
            mutableProps={mutableProps}
            codeMetadata={codeMetadata}
          />
        )}
        {/* <ContractExplorer mutableProps={mutableProps} schemas={codeMetadata?.schema} /> */}
      </Container>
    </div>
  )
}

export default Search
