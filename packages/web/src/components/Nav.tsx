import React, { Component, MouseEventHandler, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import axios from 'axios'
import { Gradient } from '../utils/gradient'
import Image from 'next/image'
import config from '../../config'
import { useAppContext } from '../context/state'
import ChainSelector from './ChainSelector'

const useStyles = makeStyles({
  root: {},
  responsiveToolbar: {
    paddingLeft: 16,
    paddingRight: 16,
    '@media only screen and (max-width: 600px)': {
      paddingLeft: 4,
      paddingRight: 4
    }
  }
})

let gradient2 = null

const Nav = ({
  signin,
  twitterLoginHandler
}: {
  signin?: boolean
  twitterLoginHandler?: MouseEventHandler<HTMLButtonElement>
}) => {
  const classes = useStyles()

  const { chainId, setChainId } = useAppContext()
  const [hovering, setHovering] = useState(false)

  return (
    <AppBar color='transparent' elevation={0} position='static'>
      <Toolbar
        className={classes.responsiveToolbar}
        style={{
          width: '100%'
        }}
      >
        <Grid container alignItems='center' alignContent='center'>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              style={{
                paddingTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'nowrap'
              }}
            >
              {/* {hovering ? ( */}
              <div onClick={() => {
                (window.location.href = '/')
              }}>
                <canvas
                  id='gradient-canvas-2'
                  // style={{'--gradient-color-1':'#ef008f','--gradient-color-2':'#6ec3f4', '--gradient-color-3':'#7038ff','--gradient-color-4':'#e2e2e2'}}
                  // "--gradient-color-1:#ef008f;--gradient-color-2:#6ec3f4;--gradient-color-3:#7038ff;--gradient-color-4:#e2e2e2;"
                  style={{
                    width: '50px',
                    height: '50px',
                    clipPath: 'url(#hex-hw-shapeclip-clipconfig)'
                  }}
                  data-transition-in
                ></canvas>
                <Typography
                  variant='h6'
                  display='inline'
                  style={{
                    fontWeight: 100,
                    marginLeft: 14,
                    fontFamily:
                      'Comfortaa, Quicksand, Arial, Helvetica, sans-serif'
                  }}
                >
                  {config.DISPLAY_COMPANY_NAME}
                </Typography>
              </div>

              <div
                style={{
                  marginLeft: 'auto'
                }}
              >
                <ChainSelector chainId={chainId} setChainId={setChainId}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
