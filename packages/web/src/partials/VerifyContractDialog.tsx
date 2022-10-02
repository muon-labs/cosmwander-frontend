import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {},
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  dialog: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    dislay: 'flex',
    maxWidth: '500px',
    minWidth: '300px',
    height: 'auto',
    borderRadius: '8px',
    backgroundColor: '#18192A'
  },
  header: {
    padding: '16px',
    borderBottom: '1px solid #394456',
    display: 'flex',
    justifyContent: 'space-between'
  },
  body: {
    padding: '16px'
  }
})

const VerifyContractDialog = ({ open, setOpen }) => {
  const classes = useStyles()

  const [githubRepo, setGithubRepo] = useState('')

  return (
    <div className={classes.root}>
      {open && (
        <div className={classes.overlay}>
          <div className={classes.dialog}>
            <div className={classes.header}>
              <Typography variant='h6' className='main-text'>
                Verify Contract
              </Typography>
              <Close
                style={{
                  padding: 8,
                  width: 36,
                  height: 36,
                  color: '#FFF',
                  cursor: 'pointer'
                }}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className={classes.body}>
              <div>
                <Typography variant='body2' className='detail-text'>
                  Github Repo
                </Typography>
                <TextField
                  InputProps={{
                    style: { padding: 0, color: '#222222' },
                    classes: {
                      input: 'input',
                      notchedOutline: 'notched-outline',
                      focused: 'input-focused'
                    }
                  }}
                  placeholder={'github.com/...'}
                  value={githubRepo}
                  onChange={e => setGithubRepo(e.currentTarget.value)}
                />
              </div>
              <div>
                <Button
                  variant='contained'
                  color='primary'
                  className='action-button small squircle'
                  style={{ marginTop: 16 }}
                >
                  build
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyContractDialog
