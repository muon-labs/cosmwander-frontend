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

const useStyles = makeStyles({
  root: {},
  addrInfoContainer: {
    overflow: 'hidden',
    border: '1px solid #394456;',
    borderRadius: '8px',
    padding: '16px'
  }
})

const Address = props => {
  const classes = useStyles()

  const [activeWindow, setActiveWindow] = useState<
    'instantiate' | 'query' | 'execute'
  >('instantiate')

  const [contractAddress, setContractAddress] = useState(
    'osmo1ha6g022yw4dz2gkg4fdq6p3cntzrfx37mctr4xxrfflmzpgk6sesnmm4h2'
  )
  const [codeId, setCodeId] = useState('951')
  const [addrInfo, setAddrInfo] = useState({ balance: [], account: {} })
  const [loading, setLoading] = useState(false)
  const [queryExpanded, setQueryExpanded] = useState(
    new Array(querySchema.oneOf.length).fill(false)
  )
  const [executeExpanded, setExecuteExpanded] = useState(
    new Array(executeSchema.oneOf.length).fill(false)
  )
  console.log(addrInfo)

  async function getContractInfo () {
    const client = await getQueryClientCosmWasm('osmo-test-4')
    const contractInfo = await client.getContract(contractAddress)
    console.log({ contractInfo })
  }

  async function getTXs() {
    
  }

  useEffect(() => {
    getContractInfo()
    if (contractAddress) getAddrInfo(contractAddress)
  }, [contractAddress])

  async function getAddrInfo (address: string) {
    setLoading(true)
    const client = await getQueryClientStargate('osmo-test-4')
    const balance = (await client.getAllBalances(address)) as Coin[]
    const account = await client.getAccount(address)

    setAddrInfo({
      balance,
      account
    })
    setLoading(false)
  }

  async function queryContract (
    queryMsg: any
  ): Promise<{ response: string; error: string }> {
    try {
      const client = await getQueryClientCosmWasm('osmo-test-4')
      console.log({ queryMsg })
      const result = await client.queryContractSmart(contractAddress, queryMsg)
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
        contractAddress,
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

  function renderActiveWindow () {
    switch (activeWindow) {
      case 'instantiate':
        return (
          <ContractInterface
            instantiateSchema={
              instantiateSchema as HttpJsonSchemaOrgDraft04Schema
            }
            querySchema={{}}
            executeSchema={{}}
            contractAddress={contractAddress}
            setContractAddress={setContractAddress}
            setActiveWindow={setActiveWindow}
            codeId={codeId}
            setCodeId={setCodeId}
          />
        )
      case 'query':
        const queryChildren = []
        for (
          let propertyIdx = 0;
          propertyIdx < querySchema.oneOf.length;
          propertyIdx++
        ) {
          const property = querySchema.oneOf[propertyIdx]
          const name = property.required[0]
          queryChildren.push(
            <div className={classes.tableRow}>
              <div
                className={classes.messageToolbar}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setQueryExpanded(
                    queryExpanded.map((q, i) => (i === propertyIdx ? !q : q))
                  )
                }}
              >
                <div className='horiz'>
                  <KeyboardArrowRight
                    style={{
                      opacity: '0.85',
                      transition: 'all 0.2s ease-out',
                      transform: queryExpanded[propertyIdx]
                        ? 'rotate(90deg)'
                        : ''
                    }}
                  />
                  <Typography variant='body2' className='detail-text'>
                    Query: <b>{name}</b>
                  </Typography>
                </div>
              </div>
              {queryExpanded[propertyIdx] && (
                <GenericMessage
                  key={name}
                  schemaName={name}
                  msgSchema={property as HttpJsonSchemaOrgDraft04Schema}
                  rootSchema={
                    (querySchema as unknown) as HttpJsonSchemaOrgDraft04Schema
                  }
                  hideTitle={true}
                  onSubmit={queryContract}
                />
              )}
            </div>
          )
        }
        return (
          <>
            <Typography
              variant='body1'
              className='main-text paragraph-important'
            >
              Query Contract
            </Typography>
            {queryChildren}
          </>
        )
      case 'execute':
        // woah, scary variable name, bro
        const executeChildren = []
        for (
          let propertyIdx = 0;
          propertyIdx < querySchema.oneOf.length;
          propertyIdx++
        ) {
          const property = executeSchema.oneOf[propertyIdx]
          const name = property.required[0]
          executeChildren.push(
            <div className={classes.tableRow}>
              <div
                className={classes.messageToolbar}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setExecuteExpanded(
                    executeExpanded.map((q, i) => (i === propertyIdx ? !q : q))
                  )
                }}
              >
                <div className='horiz'>
                  <KeyboardArrowRight
                    style={{
                      opacity: '0.85',
                      transition: 'all 0.2s ease-out',
                      transform: executeExpanded[propertyIdx]
                        ? 'rotate(90deg)'
                        : ''
                    }}
                  />
                  <Typography variant='body2' className='detail-text'>
                    Execute: <b>{name}</b>
                  </Typography>
                </div>
              </div>
              {executeExpanded[propertyIdx] && (
                <GenericMessage
                  key={name}
                  schemaName={name}
                  msgSchema={property as HttpJsonSchemaOrgDraft04Schema}
                  rootSchema={
                    (executeSchema as unknown) as HttpJsonSchemaOrgDraft04Schema
                  }
                  hideTitle={true}
                  onSubmit={executeContract}
                />
              )}
            </div>
          )
        }
        return (
          <>
            <Typography
              variant='body1'
              className='main-text paragraph-important'
            >
              Execute Contract
            </Typography>
            {executeChildren}
          </>
        )
      default:
        return null
    }
  }

  function reloadBalance () {
    getAddrInfo(contractAddress)
  }

  function Balance ({ balance }) {
    console.log(balance)
    if (!balance.length) return null
    const { amount, denom } = balance[0]
    return (
      <span>
        {amount} {denom}
      </span>
    )
  }

  function isActive (activeWindowStr: string) {
    return activeWindow === activeWindowStr ? ' active' : ''
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
        <div className={classes.addrInfoContainer}>
          <div className='horiz'>
            <Typography
              variant='body2'
              className='detail-text'
              style={{ marginRight: 8 }}
            >
              Code ID:
            </Typography>
            <Typography variant='body2' className='detail-text bright'>
              {codeId}
            </Typography>
          </div>
          <div className='horiz'>
            <Typography
              variant='body2'
              className='detail-text'
              style={{ marginRight: 8 }}
            >
              Contract Address:
            </Typography>
            <Typography variant='body2' className='detail-text bright'>
              {contractAddress}
            </Typography>
          </div>
          <div className='horiz'>
            <Typography
              variant='body2'
              className='detail-text'
              style={{ marginRight: 8 }}
            >
              Balance:
            </Typography>
            <Typography variant='body2' className='detail-text bright'>
              <Balance balance={addrInfo.balance} />
            </Typography>
            {loading ? (
              <CircularProgress
                style={{ width: 14, height: 14, opacity: 0.85, color: '#FFF' }}
              />
            ) : (
              <Refresh
                style={{
                  opacity: 0.85,
                  width: 16,
                  height: 16,
                  cursor: 'pointer'
                }}
                onClick={reloadBalance}
              />
            )}
          </div>
        </div>
        {txs && <pre>
          {JSON.stringify(txs, null, 2)}
          </pre>}
        <div className={classes.addrInfoContainer} style={{ marginTop: 16 }}>
          <div className='toolbar' style={{ margin: -16, marginBottom: 8 }}>
            <Button
              className={'toolbar-button' + isActive('instantiate')}
              onClick={() => setActiveWindow('instantiate')}
            >
              Instantiate
            </Button>
            <Button
              className={'toolbar-button' + isActive('query')}
              onClick={() => setActiveWindow('query')}
            >
              Query
            </Button>
            <Button
              className={'toolbar-button' + isActive('execute')}
              onClick={() => setActiveWindow('execute')}
            >
              Execute
            </Button>
            <Button
              className='toolbar-button disabled'
              style={{ marginLeft: 'auto' }}
            >
              Upload a new Contract
            </Button>
          </div>
          {renderActiveWindow()}
        </div>
      </Container>
    </div>
  )
}

export default Address
