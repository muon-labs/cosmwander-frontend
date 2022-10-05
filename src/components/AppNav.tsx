import React, { Component, MouseEventHandler, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import axios from 'axios'
import Image from 'next/image'
import config from '../../config'
import { Search } from '@material-ui/icons'
import { useAppContext } from '../context/state'
import ChainSelector from './ChainSelector'

const useStyles = makeStyles({
  root: { height: 66 }
})

const AppNav = props => {
  const classes = useStyles()

  const { chainId, setChainId, setAddress, setCode } = useAppContext()
  const [codeOrAddress, setCodeOrAddress] = useState('')

  function handleSearch (e) {
    e.preventDefault()
    if (codeOrAddress.length > 10) {
      setAddress(codeOrAddress)
      setCode('')
    } else {
      setAddress('')
      setCode(codeOrAddress)
    }
  }

  return (
    <AppBar color='transparent' elevation={0} position='static'>
      <Toolbar
        style={{
          width: '100%',
          borderBottom: '1px solid ' + config.PALETTE.BORDER_COLOR
        }}
        disableGutters
      >
        <Grid container alignItems='center' alignContent='center' spacing={0}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 8,
                paddingBottom: 8
              }}
            >
              {/* {hovering ? ( */}
              <Grid item xs={12} md={7}>
                <div
                  style={{
                    cursor: 'pointer',
                    marginLeft: 16,
                    padding: 8
                  }}
                  onClick={() => {
                    window.location.href = '/'
                  }}
                >
                  <img src='/logo_cosmwander.svg' style={{ height: 32 }} />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ flexShrink: 1, display: 'flex', paddingRight: 16 }}
              >
                <div
                  className='horiz'
                  style={{
                    marginLeft: 'auto'
                  }}
                >
                  <ChainSelector
                    chainId={chainId}
                    setChainId={setChainId}
                    onSelectRedirectToHome={true}
                  />
                  <form onSubmit={handleSearch}>
                    <TextField
                      required
                      style={{ background: '#1A191B' }}
                      InputProps={{
                        style: {
                          background: '#1A191B',
                          height: 40,
                          padding: 0,
                          color: '#222222',
                          marginLeft: 'auto'
                        },
                        classes: {
                          input: 'input',
                          notchedOutline: 'notched-outline',
                          focused: 'input-focused'
                        },

                        endAdornment: (
                          <Button
                            type='submit'
                            className='action-button small'
                            onClick={() => {}}
                            style={{
                              backgroundColor: config.PALETTE.BORDER_COLOR,
                              border: 'none',
                              padding: '6px',
                              minWidth: 'auto',
                              width: '28px',
                              marginRight: 7,
                              color: '#F5F7FF',
                              fontSize: 10,
                              borderRadius: 4
                            }}
                          >
                            <Search
                              style={{
                                color: '#8E8E8E',
                                width: 14,
                                height: 14
                              }}
                            />
                          </Button>
                        )
                      }}
                      placeholder={'Contract address, account, or codeid...'}
                      value={codeOrAddress}
                      onChange={e => setCodeOrAddress(e.currentTarget.value)}
                    />
                  </form>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default AppNav
