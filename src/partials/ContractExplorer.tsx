import { Button, ButtonGroup, Link, Typography } from '@material-ui/core'
import { KeyboardArrowRight, Warning } from '@material-ui/icons'
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
import { useAppContext } from '../context/state'

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

  const { activeWindow, setActiveWindow, chainId } = useAppContext()

  const queryProps = query?.oneOf || query?.anyOf
  const executeProps = execute?.oneOf || execute?.anyOf

  const [queryExpanded, setQueryExpanded] = useState(
    new Array(queryProps?.length || 0).fill(false)
  )
  const [executeExpanded, setExecuteExpanded] = useState(
    new Array(executeProps?.length || 0).fill(false)
  )

  async function queryContract (
    queryMsg: Record<string, unknown>
  ): Promise<{ response: string; error: string }> {
    try {
      const client = await getQueryClientCosmWasm(chainId)
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
    execMsg: Record<string, unknown>
  ): Promise<{ response: string; error: string }> {
    try {
      const [client, accounts] = await getClient(chainId)

      console.log({ execMsg })
      const result = await client.execute(
        accounts[0]?.address,
        address,
        execMsg,
        'auto',
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
            contractAddress={address}
            setContractAddress={setAddress}
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
          propertyIdx < queryProps?.length;
          propertyIdx++
        ) {
          const property = queryProps[propertyIdx]

          let name
          if (!property.required) {
            name = Object.keys(property.properties)[0]
          } else {
            name = property.required[0]
          }
          queryChildren.push(
            <div>
              <div
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
                  address={address}
                  onSubmit={queryContract}
                />
              )}
            </div>
          )
        }
        return (
          <>
            <div >
              <Typography
                variant='body1'
                className='label-text paragraph-important'
              >
                Query Contract
              </Typography>
              {query?.isAborted && (
                <div className='horiz' style={{padding: 8, marginBottom: 16, border: '1px solid #F4E53388', borderRadius: 8, backgroundColor: "#F4E53322"}}>
                  <Warning style={{ color: 'yellow', height: 14, width: 14 }} />
                  <Typography
                    variant='body2'
                    className='detail-text ml'
                    style={{color: "#d2d2d2"}}
                  >
                    Could not infer full contract schema for this code id, some methods may not work. If
                    this is your contract please{' '}
                    <Link href={'/verify' + window.location.search} style={{color: config.PALETTE.COLOR_SECONDARY}}>
                      verify it
                    </Link>{' '}
                    to enable full functionality
                  </Typography>
                </div>
              )}
            </div>
            {queryChildren}
          </>
        )
      case 'execute':
        // woah, scary variable name, bro
        const executeChildren = []

        for (
          let propertyIdx = 0;
          propertyIdx < executeProps?.length;
          propertyIdx++
        ) {
          const property = executeProps[propertyIdx]

          let name
          if (!property.required) {
            name = Object.keys(property.properties)[0]
          } else {
            name = property.required[0]
          }

          executeChildren.push(
            <div>
              <div
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
                  address={address}
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
            {query?.isAborted && (
                <div className='horiz' style={{padding: 8, marginBottom: 16, border: '1px solid #F4E53388', borderRadius: 8, backgroundColor: "#F4E53322"}}>
                  <Warning style={{ color: 'yellow', height: 14, width: 14 }} />
                  <Typography
                    variant='body2'
                    className='detail-text ml'
                    style={{color: "#d2d2d2"}}
                  >
                    Could not infer full contract schema for this code id, some methods may not work. If
                    this is your contract please{' '}
                    <Link href={'/verify' + window.location.search} style={{color: config.PALETTE.COLOR_SECONDARY}}>
                      verify it
                    </Link>{' '}
                    to enable full functionality
                  </Typography>
                </div>
              )}
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
