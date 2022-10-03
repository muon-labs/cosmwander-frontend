import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Link, Typography } from '@material-ui/core'
import axios from 'axios'
import { ICode } from '../types/db-schemas'
import { CodeBlock, dracula } from 'react-code-blocks'
import config from '../../config'
import VerifyContractDialog from '../partials/VerifyContractDialog'

const useStyles = makeStyles({
  root: {}
})

const UnverifiedBox = ({ codeMetadata }: { codeMetadata: ICode }) => {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      {/* render a box that says this contract isnt verified, with a link that says upload & verify and a box under it that has the code hash */}
      <div className='horiz paragraph-important'>
        <Typography variant='body1' className='main-text mr'>
          This contract is not verified
        </Typography>
        <Typography variant='body2' className='detail-text'>
          <Link href='#' style={{ color: config.PALETTE.COLOR_PRIMARY }}>
            (is this your contract? Verify it now)
          </Link>
        </Typography>
      </div>
      <div className='horiz'>
        <Typography variant='body1' className='detail-text mr'>
          Code Hash:
        </Typography>
        <CodeBlock
          text={codeMetadata?.checksum || ''}
          language='markdown'
          showLineNumbers={false}
          wrapLines
          theme={dracula}
        />
      </div>
      <VerifyContractDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default UnverifiedBox
