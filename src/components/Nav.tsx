import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Grid, Toolbar } from '@material-ui/core'
import { useAppContext } from '../context/state'
import ChainSelector from './ChainSelector'
import { useRouter } from 'next/router'

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

const Nav = props => {
  const classes = useStyles()
  const { push: goToPage } = useRouter();
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
              <div
                style={{
                  cursor: 'pointer',
                  marginLeft: 24,
                }}
                onClick={() => goToPage("/")}
              >
                <img src='/logo_cosmwander.svg' style={{height:32}}/>
              </div>

              <div
                style={{
                  marginLeft: 'auto'
                }}
              >
                <ChainSelector chainId={chainId} setChainId={setChainId} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
