import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react'
import ContractInitInterface from './ContractInterface'

import { StdFee } from '@cosmjs/stargate'
import { HttpJsonSchemaOrgDraft04Schema } from '../types/HttpJsonSchemaOrgDraft04Schema'
import { getClient, getQueryClientCosmWasm } from '../utils/utils'

import GenericMessage from '../components/messages/GenericMessage'
// import instantiateSchema from '../../resources/schema/instantiate_msg.json'
// import query from '../../resources/schema/query_msg.json'
// import executeSchema from '../../resources/schema/execute_msg.json'
import config from '../../config'
import UnverifiedBox from '../components/UnverifiedBox'

const useStyles = makeStyles({
  root: {},
  addrInfoContainer: {
    overflow: 'hidden',
    padding: '16px 0px'
  }
})

const ContractExplorer = ({
  mutableProps: { code, setCode, address, setAddress },
  codeMetadata
}) => {
  const classes = useStyles()
  const { query, execute, instantiate } = codeMetadata?.schemas || {}

  const [activeWindow, setActiveWindow] = useState<
    'instantiate' | 'query' | 'execute'
  >('instantiate')

  const [contractAddress, setContractAddress] = useState(
    'osmo1ha6g022yw4dz2gkg4fdq6p3cntzrfx37mctr4xxrfflmzpgk6sesnmm4h2'
  )

  const [queryExpanded, setQueryExpanded] = useState(
    new Array(query?.oneOf?.length || 0).fill(false)
  )
  const [executeExpanded, setExecuteExpanded] = useState(
    new Array(execute?.oneOf?.length || 0).fill(false)
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
        return (
          <ContractInitInterface
            instantiateSchema={instantiate as HttpJsonSchemaOrgDraft04Schema}
            contractAddress={contractAddress}
            setContractAddress={setContractAddress}
            setActiveWindow={setActiveWindow}
            codeId={code}
            setCodeId={setCode}
          />
        )
      case 'query':
        const queryChildren = []

        console.log({ querySchema: query })
        for (
          let propertyIdx = 0;
          propertyIdx < query?.oneOf?.length;
          propertyIdx++
        ) {
          const property = query.oneOf[propertyIdx]

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
                    (query as unknown) as HttpJsonSchemaOrgDraft04Schema
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
          propertyIdx < query?.oneOf?.length;
          propertyIdx++
        ) {
          const property = execute.oneOf[propertyIdx]
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
                    (execute as unknown) as HttpJsonSchemaOrgDraft04Schema
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
      <>
        <ButtonGroup
          style={{
            border: '1px solid ' + config.PALETTE.BORDER_COLOR,
            borderRadius: 8,
            overflow: 'hiidden',
            marginBottom: 16
          }}
        >
          <Button
            style={{ borderRadius: '8px 0 0 8px' }}
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
            style={{ borderRadius: '0 8px 8px 0' }}
            className={'toolbar-button' + isActive('execute')}
            onClick={() => setActiveWindow('execute')}
          >
            Execute
          </Button>
          {/* <Button
            className='toolbar-button disabled'
            style={{ marginLeft: 'auto' }}
          >
            Upload a new Contract
          </Button> */}
        </ButtonGroup>
        {!codeMetadata?.schemas && (
          <UnverifiedBox codeMetadata={codeMetadata} />
        )}
        {renderActiveWindow()}
      </>
    </div>
  )
}

export default ContractExplorer
