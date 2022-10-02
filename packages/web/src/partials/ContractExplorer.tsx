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
import ContractInterface from './ContractInterface'

import { HttpJsonSchemaOrgDraft04Schema } from '../types/HttpJsonSchemaOrgDraft04Schema'
import {
  getClient,
  getQueryClientCosmWasm,
  getQueryClientStargate
} from '../utils/utils'
import { Coin, StargateClient, StdFee } from '@cosmjs/stargate'

import GenericMessage from '../components/messages/GenericMessage'
// import instantiateSchema from '../../resources/schema/instantiate_msg.json'
// import querySchema from '../../resources/schema/query_msg.json'
// import executeSchema from '../../resources/schema/execute_msg.json'
import AppNav from '../components/AppNav'
import config from '../../config'
import UnverifiedBox from '../components/UnverifiedBox'

const useStyles = makeStyles({
  root: {},
  addrInfoContainer: {
    overflow: 'hidden',
    border: '1px solid #394456;',
    borderRadius: '8px',
    padding: '16px'
  }
})

const ContractExplorer = ({
  mutableProps: { code, setCode, address, setAddress },
  codeMetadata
}) => {
  const classes = useStyles()
  const { querySchema, executeSchema, instantiateSchema } = codeMetadata?.schemas || {}

  const [activeWindow, setActiveWindow] = useState<
    'instantiate' | 'query' | 'execute'
  >('instantiate')

  const [contractAddress, setContractAddress] = useState(
    'osmo1ha6g022yw4dz2gkg4fdq6p3cntzrfx37mctr4xxrfflmzpgk6sesnmm4h2'
  )

  const [queryExpanded, setQueryExpanded] = useState(
    new Array(querySchema?.oneOf?.length || 0).fill(false)
  )
  const [executeExpanded, setExecuteExpanded] = useState(
    new Array(executeSchema?.oneOf?.length || 0).fill(false)
  )

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
        return instantiateSchema &&
          instantiateSchema.oneOf &&
          instantiateSchema.oneOf.length ? (
          <ContractInterface
            instantiateSchema={
              instantiateSchema as HttpJsonSchemaOrgDraft04Schema
            }
            querySchema={{}}
            executeSchema={{}}
            contractAddress={contractAddress}
            setContractAddress={setContractAddress}
            setActiveWindow={setActiveWindow}
            codeId={code}
            setCodeId={setCode}
          />
        ) : (
          <UnverifiedBox codeMetadata={codeMetadata} />
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

  function isActive (activeWindowStr: string) {
    return activeWindow === activeWindowStr ? ' active' : ''
  }

  return (
    <div className={classes.addrInfoContainer} style={{ marginTop: 16 }}>
      {!codeMetadata?.schemas ? (
        <UnverifiedBox codeMetadata={codeMetadata} />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default ContractExplorer
