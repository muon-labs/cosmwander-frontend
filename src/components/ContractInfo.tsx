import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Link, Skeleton, Typography } from '@material-ui/core'
import axios from 'axios'
import { fetchContract } from '../clients/cosmwander'
import { useAppContext } from '../context/state'
import { IContract } from '../types/db-schemas'
import config from '../../config'
import { getChainById } from '../utils/chain_service'

const useStyles = makeStyles({
  root: {
    marginTop: 32,
    background: '#222222',
    borderRadius: 6,
    padding: 24,
    border: '1px solid ' + config.PALETTE.BORDER_COLOR
  },
  chainTag: {
    padding: '2px 8px',
    borderRadius: 4,
    backgroundColor: '#E18780',
    color: '#1A191B'
  }
})

const ContractInfo = ({ address }: { address: string }) => {
  const classes = useStyles()

  const { chainId, setAddress } = useAppContext()
  const [loading, setLoading] = useState(true)
  const [contractMetadata, setContractMetadata] = useState<IContract>(null)

  const chain = getChainById(chainId)
  console.log({ chain })

  useEffect(() => {
    // fetch address metadata
    loadContractMeta(address)
  }, [])

  async function loadContractMeta (address) {
    setLoading(true)
    const contractMetadata = await fetchContract(chainId, address)
    setContractMetadata(contractMetadata)
    console.log({ contractMetadata })
    setLoading(false)
  }

  return (
    <div className={classes.root}>
      {loading ? (
        <Skeleton height={32}/>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div className='horiz'>
              <div className={classes.chainTag}>
                <Typography variant='body2' className='detail-text-inverted'>
                  {chain.pretty_name}
                </Typography>
              </div>
              <Typography variant='body2' className='detail-text ml'>
                {contractMetadata?.label}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography align='right' variant='body2' className='detail-text'>
              <Link
                style={{ color: config.PALETTE.COLOR_SECONDARY }}
                href='#'
                onClick={() => setAddress(address)}
              >
                Open this contract
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='body2' className='detail-text'>
              Creator
            </Typography>
          </Grid>
          <Grid item xs={8}>
          <Typography
          align='right'
              variant='body1'
              className='detail-text'
              style={{ fontSize: 12 }}
            >
              {contractMetadata?.creator}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' className='detail-text'>
              Contract address
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              style={{ color: config.PALETTE.COLOR_SECONDARY, fontSize: 12 }}
            >
              {address}
            </Typography>
          </Grid>

          {/* {contractMetadata?.ibcPortId && (
            <Grid item xs={12}>
              <Typography variant='body1'>
                {contractMetadata?.ibcPortId}
              </Typography>
            </Grid>
          )}
          {contractMetadata?.migrations && (
            <Grid item xs={12}>
              <Typography variant='body1'>
                {contractMetadata?.migrations}
              </Typography>
            </Grid>
          )} */}
        </Grid>
      )}
    </div>
  )
}

export default ContractInfo
