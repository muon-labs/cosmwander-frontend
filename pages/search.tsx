import {
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useEffect, useState } from 'react'

import { StdFee } from '@cosmjs/stargate'
import { getClient, getQueryClientCosmWasm } from '../src/utils/utils'

import { fetchCode, fetchContract } from '../src/clients/cosmwander'
import AppNav from '../src/components/AppNav'
import { useAppContext } from '../src/context/state'
import CodeAddressInfo from '../src/partials/CodeAddressInfo'
import ContractExplorer from '../src/partials/ContractExplorer'
import { ICode, IContract } from '../src/types/db-schemas'
import config from '../config'
import ContractsDisplay from '../src/components/ContractsDisplay'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})

const Search = props => {
  const classes = useStyles()

  const {
    chainId,
    setChainId,
    code,
    setCode,
    address,
    setAddress,
    activeTab,
    setActiveTab
  } = useAppContext()
  const [loadingMetadata, setLoadingMetadata] = useState(true)
  const [codeMetadata, setCodeMetadata] = useState<ICode>(null)
  const [contractMetadata, setContractMetadata] = useState<IContract>(null)
  const [addrInfo, setAddrInfo] = useState({ balance: [], account: {} })
  // const [activeTab, setActiveTab] = useState<'see-contract' | 'contracts'>(
  //   'see-contract'
  // )

  console.log({ codeMetadata })

  useEffect(() => {
    // fetch code & address info
    getMetadata()
  }, [code, address])

  async function getMetadata () {
    setLoadingMetadata(true)
    if (!code && !address) return
    if (code) {
      const codeMeta = await fetchCode(chainId, code)
      setCodeMetadata(codeMeta)
    }
    if (address) {
      const contractMeta = await fetchContract(chainId, address)
      setContractMetadata(contractMeta)
      if (contractMeta?.code_id) setCode(contractMeta.code_id + '')
    }
    setLoadingMetadata(false)
  }

  async function handleSkip () {
    const skipMeta: ICode = {
      code_id: code,
      creator: '',
      checksum: '',
      contracts: [],
      schemas: {
        execute: null,
        instantiate: null,
        query: null
      }
    }

    setCodeMetadata(skipMeta)
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

  function isActive (testTab) {
    return testTab === activeTab ? 'active' : ''
  }

  const mutableProps = {
    address: address,
    setAddress: setAddress,
    code: code,
    setCode,
    addrInfo,
    setAddrInfo
  }

  function renderActiveTab () {
    switch (activeTab) {
      case 'see-contract':
        return loadingMetadata ? (
          <Grid container justifyContent={'center'} style={{ marginTop: 90 }}>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <div style={{ margin: 24, textAlign: 'center' }}>
                  <CircularProgress
                    style={{ color: config.PALETTE.COLOR_SECONDARY }}
                  />
                </div>
                <Typography
                  variant='h6'
                  align='center'
                  className='label-text paragraph-important'
                >
                  One second or two
                </Typography>
                <Typography
                  variant='body2'
                  align='center'
                  className='detail-text paragraph-important'
                >
                  Cosmwander tries to infer schemas from contracts it hasn't
                  seen before, so it may take a little while to load.
                </Typography>
                <Typography
                  variant='body2'
                  align='center'
                  className='detail-text paragraph-important'
                >
                  <Link href='#' onClick={handleSkip}>Skip this and just send raw messages</Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        ) : (
          <ContractExplorer
            mutableProps={mutableProps}
            codeMetadata={codeMetadata}
          />
        )
      case 'contracts':
        return <ContractsDisplay codeMetadata={codeMetadata} />
      default:
        return null
    }
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
        <CodeAddressInfo
          mutableProps={mutableProps}
          codeMetadata={codeMetadata}
        />

        <div
          style={{
            padding: '16px 0px',
            borderBottom: '1px solid ' + config.PALETTE.BORDER_COLOR
          }}
        >
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
              onClick={() => setActiveTab('see-contract')}
              className={'toolbar-button ' + isActive('see-contract')}
            >
              See Contract
            </Button>
            <Button
              style={{ borderRadius: '0 8px 8px 0' }}
              onClick={() => setActiveTab('contracts')}
              className={'toolbar-button ' + isActive('contracts')}
            >
              Contracts for this code ID{' '}
              {codeMetadata?.contracts?.length && (
                <b
                  style={{
                    fontWeight: 800,
                    background: config.PALETTE.COLOR_SECONDARY,
                    color: '#1A191B',
                    borderRadius: 999,
                    fontSize: 10,
                    padding: '0px 8px'
                  }}
                  className='ml'
                >
                  {codeMetadata?.contracts?.length}
                </b>
              )}
            </Button>
          </ButtonGroup>
        </div>

        {/* {txs && <pre>
          {JSON.stringify(txs, null, 2)}
          </pre>} */}
        {renderActiveTab()}

        {/* <ContractExplorer mutableProps={mutableProps} schemas={codeMetadata?.schema} /> */}
      </Container>
    </div>
  )
}

export default Search
