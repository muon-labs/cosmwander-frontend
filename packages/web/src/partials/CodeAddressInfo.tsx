import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import Balance from '../components/Balance'
import { getQueryClientCosmWasm, getQueryClientStargate } from '../utils/utils'
import { Coin } from '@cosmjs/stargate'
import { Refresh } from '@material-ui/icons'
import { ICode } from '../types/db-schemas'
import config from '../../config'

const useStyles = makeStyles({
  root: {},
  addrInfoContainer: {
    overflow: 'hidden',
    // border: '1px solid #394456;',
    padding: '16px 0px',
    borderBottom: '1px solid ' + config.PALETTE.BORDER_COLOR
  }
})

const CodeAddressInfo = ({
  mutableProps: { code, address, setCode, setAddress },
  codeMetadata
}: {
  mutableProps: any
  codeMetadata: ICode
}) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const [addrInfo, setAddrInfo] = useState({ balance: [], account: {} })

  useEffect(() => {
    if (address) getContractInfo(address)
    if (address) getAddrInfo(address)
  }, [address])

  async function getContractInfo (address: string) {
    const client = await getQueryClientCosmWasm('osmo-test-4')
    const contractInfo = await client.getContract(address)
  }

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

  function reloadBalance () {
    getAddrInfo(address)
  }

  const codeInfo = [
    {
      label: 'Code ID',
      value: code
    },
    {
      label: 'Creator',
      value: codeMetadata?.creator
    },
    {
      label: 'Checksum',
      value: codeMetadata?.checksum
    },
    {
      label: 'Repository',
      value: codeMetadata?.repository,
      shouldDisplay: () => !!codeMetadata?.repository
    }
    // {
    //   label: 'Checksum',
    //   value: codeMetadata?.
    // }
  ]

  return (
    <div className={classes.root}>
      <div className={classes.addrInfoContainer}>
        <Grid container spacing={2}>
          {codeInfo
            .filter(i => (i.shouldDisplay ? i.shouldDisplay() : true))
            .map(i => {
              return (
                <React.Fragment key={i.label}>
                  <Grid item xs={4} md={2}>
                    <Typography variant='body2' className='detail-text'>
                      {i.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={8} md={10}>
                    <Typography variant='body2' className='main-text colored'>
                      {i.value}
                    </Typography>
                  </Grid>
                </React.Fragment>
              )
            })}
        </Grid>

        {/* <div className='horiz'>
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
        </div> */}
      </div>
    </div>
  )
}

export default CodeAddressInfo
