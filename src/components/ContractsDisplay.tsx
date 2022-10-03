import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import { useAppContext } from '../context/state'
import { ICode } from '../types/db-schemas'
import ContractInfo from './ContractInfo'

const useStyles = makeStyles({
  root: {}
})

const ContractsDisplay = ({ codeMetadata }: { codeMetadata: ICode }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {codeMetadata?.contracts?.map((contractAddress: string) => {
          return (
            <Grid key={contractAddress} item xs={12} md={6}>
              <ContractInfo address={contractAddress} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ContractsDisplay
