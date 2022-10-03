import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Autocomplete,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core'
import axios from 'axios'
import { getChainById } from '../utils/chain_service'

const useStyles = makeStyles({
  root: {}
})

const supportedChainIds = ['osmo-test-4', 'osmosis-1', 'uni-5', 'juno-1']

const ChainSelector = ({ chainId, setChainId, onSelectRedirectToHome }) => {
  const classes = useStyles()

  function handleChainIdChange (e, v) {
    if (onSelectRedirectToHome) {
      window.location.href = '/?chainId=' + v
    } else {
      setChainId(v)
    }
  }

  return (
    <div className={classes.root}>
      <Autocomplete
        value={chainId || ''}
        onChange={handleChainIdChange}
        style={{ minWidth: 250 }}
        disableClearable
        options={supportedChainIds}
        renderOption={(props, chainId) => {
          const chain = getChainById(chainId)
          return (
            <li {...props}>
              <img
                style={{ width: 24, height: 24, marginRight: 8 }}
                src={chain.logo_URIs.png}
              />
              {chain.pretty_name}
            </li>
          )
        }}
        renderInput={params => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { padding: 0, color: '#222222' },
              classes: {
                input: 'input',
                notchedOutline: 'notched-outline',
                focused: 'input-focused'
              }
            }}
            placeholder={'Chain'}
            // value={getValueFromPath(concatPath(propPath, propKey)) || ''}
            // onChange={e =>
            //   setValueAtPath(
            //     concatPath(propPath, propKey),
            //     Number(e.currentTarget.value)
            //   )
            // }
          />
        )}
      />
    </div>
  )
}

export default ChainSelector
