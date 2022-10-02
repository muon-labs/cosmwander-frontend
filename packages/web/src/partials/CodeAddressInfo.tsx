import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import Balance from '../components/Balance'
import { getQueryClientCosmWasm, getQueryClientStargate } from '../utils/utils'
import { Coin } from '@cosmjs/stargate'
import { Refresh } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {},
  addrInfoContainer: {
    overflow: 'hidden',
    border: '1px solid #394456;',
    borderRadius: '8px',
    padding: '16px'
  }
})

const CodeAddressInfo = ({
  mutableProps: { code, address, setCode, setAddress },
  codeMetadata
}) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const [addrInfo, setAddrInfo] = useState({ balance: [], account: {} })

  console.log(addrInfo)

  useEffect(() => {
    getContractInfo()
    if (address) getAddrInfo(address)
  }, [address])

  async function getContractInfo () {
    const client = await getQueryClientCosmWasm('osmo-test-4')
    const contractInfo = await client.getContract(address)
    console.log({ contractInfo })
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
  return (
    <div className={classes.root}>
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
            {code}
          </Typography>
        </div>
        <div className='horiz'>
          <Typography
            variant='body2'
            className='detail-text'
            style={{ marginRight: 8 }}
          >
            Creator:
          </Typography>
          <Typography variant='body2' className='detail-text bright'>
            {codeMetadata?.creator}
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
            {address}
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
    </div>
  )
}

export default CodeAddressInfo
