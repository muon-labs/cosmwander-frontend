import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import axios from 'axios'
import Nav from '../src/components/Nav'
import AppNav from '../src/components/AppNav'
import { useAppContext } from '../src/context/state'
import { fetchCode } from '../src/clients/cosmwander'
import { ICode } from '../src/types/db-schemas'
import { Search } from '@material-ui/icons'
import config from '../config'

const useStyles = makeStyles({
  root: {}
})

const Verify = props => {
  const classes = useStyles()

  const { chainId, setChainId, code, setCode } = useAppContext()
  const [loadingMetadata, setLoadingMetadata] = useState(true)
  const [codeMetadata, setCodeMetadata] = useState<ICode>(null)
  const [githubUrl, setGithubUrl] = useState('')

  useEffect(() => {
    // fetch code & address info
    getMetadata()
  }, [code])

  async function getMetadata () {
    setLoadingMetadata(true)
    if (!code) return
    if (code) {
      const codeMeta = await fetchCode(chainId, code)
      setCodeMetadata(codeMeta)
    }

    setLoadingMetadata(false)
  }

  return (
    <div className={classes.root}>
      <AppNav />
      <Container maxWidth='sm' style={{ marginTop: 120 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align='center' variant='h6' className='label-text'>
              Verify CosmWasm smart contract
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='body2' className='detail-text'>
              Code ID
            </Typography>
            <Typography variant='body2' className='main-text'>
              {code}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='body2' className='detail-text'>
              Creator
            </Typography>
            <Typography variant='body2' className='main-text'>
              {codeMetadata?.creator}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                style: { padding: 0, color: '#222222', marginTop: 16 },
                classes: {
                  input: 'input-huge',
                  notchedOutline: 'notched-outline-huge',
                  focused: 'input-focused',
                  root: 'input-root-huge'
                }
                // startAdornment: (
                //   <Search style={{ color: '#858fa5', marginLeft: 8 }} />
                // ),
              }}
              fullWidth
              placeholder={'Github Repository Link'}
              value={githubUrl}
              onChange={e => setGithubUrl(e.currentTarget.value)}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Verify
