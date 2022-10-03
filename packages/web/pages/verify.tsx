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
  const [repoUrl, setRepoUrl] = useState('')
  const [repoPath, setRepoPath] = useState('')
  const [commitHash, setCommitHash] = useState('')
    const [loadingUpload, setLoadingUpload] = useState(false)

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

  async function handleSubmit (e) {
    e.preventDefault()
    setLoadingUpload(true)

  }

  return (
    <div className={classes.root}>
      <AppNav />
      <Container maxWidth='sm' style={{ marginTop: 120 }}>
        <Grid component={'form'} onSubmit={handleSubmit} container spacing={3}>
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
            required
              InputProps={{
                style: { padding: 0, color: '#222222' },
                classes: {
                  input: 'input-huge',
                  notchedOutline: 'notched-outline-huge',
                  focused: 'input-focused',
                  root: 'input-root-huge'
                }
              }}
              fullWidth
              placeholder={'Github Repository Link'}
              value={repoUrl}
              onChange={e => setRepoUrl(e.currentTarget.value)}
            />
            <Typography
              variant='body2'
              className='detail-text'
              style={{ fontSize: 12, marginTop: 4 }}
            >
              e.g. https://github.com/deus-labs/cw-contracts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
              InputProps={{
                style: { padding: 0, color: '#222222' },
                classes: {
                  input: 'input-huge',
                  notchedOutline: 'notched-outline-huge',
                  focused: 'input-focused',
                  root: 'input-root-huge'
                }
              }}
              fullWidth
              placeholder={'Path to smart contract'}
              value={repoPath}
              onChange={e => setRepoPath(e.currentTarget.value)}
            />
            <Typography
              variant='body2'
              className='detail-text'
              style={{ fontSize: 12, marginTop: 4 }}
            >
              e.g. /contracts/cw20-pot
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <div className='horiz'
            </ Grid> */}
          <Grid item xs={12}>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                  required
                    InputProps={{
                      style: { padding: 0, color: '#222222' },
                      classes: {
                        input: 'input-huge',
                        notchedOutline: 'notched-outline-huge',
                        focused: 'input-focused',
                        root: 'input-root-huge'
                      }
                    }}
                    fullWidth
                    placeholder={'Github Commit Hash'}
                    value={commitHash}
                    onChange={e => setCommitHash(e.currentTarget.value)}
                  />
                </Grid>
                <Grid item xs={2} style={{ display: 'flex' }}>
                  <Button
                    type='submit'
                    className='submit-button'
                    style={{ height: '100%', display: 'flex', flex: 1 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>

            <Typography
              variant='body2'
              className='detail-text'
              style={{ fontSize: 12, marginTop: 4 }}
            >
              e.g. 66c540d4a9055cbfa4654a830a5a59b0b7e6eb19
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Verify
