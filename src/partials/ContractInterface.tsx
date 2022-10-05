import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import { HttpJsonSchemaOrgDraft04Schema } from '../types/HttpJsonSchemaOrgDraft04Schema'
import GenericMessage from '../components/messages/GenericMessage'
import { getClient, getQueryClientStargate } from '../utils/utils'
import { StdFee } from '@cosmjs/stargate'
import config from '../../config'

const useStyles = makeStyles({
  root: {}
})

const ContractInitInterface = ({
  instantiateSchema,
  contractAddress,
  setContractAddress,
  setActiveWindow,
  codeId,
  setCodeId
}: {
  instantiateSchema: HttpJsonSchemaOrgDraft04Schema
  contractAddress: string
  setContractAddress: (contractAddress: string) => void
  setActiveWindow: (activeWindow: 'instantiate' | 'query' | 'execute') => void
  codeId: string
  setCodeId: (codeId: string) => void
}) => {
  const classes = useStyles()
  const [note, setNote] = useState(null)

  function openContract (addr: string) {
    setContractAddress(addr)
    setActiveWindow('query')
  }

  async function instantiate (
    initMsg
  ): Promise<{ response: any; error: string }> {
    try {
      const [client, accounts] = await getClient('osmo-test-4')

      const fee: StdFee = {
        amount: [
          {
            denom: 'uosmo',
            amount: '0'
          }
        ],
        gas: '200000' // TODO URGENT: figure out gas on different chains and set accordingly
      }

      console.log({ initMsg })

      const tx = await client.instantiate(
        accounts[0]?.address,
        Number(codeId),
        initMsg,
        'CosmWander deploy',
        fee
      )
      console.log({ tx })
      // setContractAddress(tx.contractAddress)
      setNote(
        <Typography variant='body2' className='detail-text'>
          <a
            style={{
              color: config.PALETTE.COLOR_SECONDARY,
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={() => openContract(tx.contractAddress)}
          >
            Open the deployed contract in the explorer
          </a>
        </Typography>
      )
      return {
        response: 'deployed to ' + tx.contractAddress,
        error: null
      }
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

  // function makeStateObjForSchema (schema) {
  //   const obj = {}
  //   for (const property of schema.oneOf) {
  //     obj[property.required[0]] = makeStateObjForProperty(
  //       schema,
  //       property.required[0]
  //     )
  //   }
  //   return obj
  // }
console.log({instantiateSchema})
  return (
    <div className={classes.root}>
      <GenericMessage
        schemaName={'InstantiateMsg'}
        hideTitle={true}
        msgSchema={instantiateSchema}
        buttonText='Init Contract'
        onSubmit={instantiate}
      />
      {note && note}
    </div>
  )
}

export default ContractInitInterface
