import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import { ArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {},
  explorerRow: {
    display: 'flex',
    padding: '2px 8px',
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
      background: '#212838'
    }
  },
  arrow: {
    width: 14,
    height: 14,
    marginRight: 2,
    animation: 'all 0.1s ease-out'
  }
})

const ExplorerRow = ({
  module,
  path,
  moduleOpts,
  onClick,
  isRoot,
  paddingLeft
}: {
  module: string
  path: string
  moduleOpts: { [key: string]: any }
  onClick: (path: string) => void
  isRoot?: boolean
  paddingLeft?: number
}) => {
  if (!paddingLeft) paddingLeft = 12

  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const subModules = Object.keys(moduleOpts)

  const isFinal = moduleOpts.hasOwnProperty('$schema')

  function renderSubModulesIfOpen () {
    if (open) {
      return subModules
        .filter(
          mod =>
            !moduleOpts[mod].hasOwnProperty('$schema') ||
            (mod.includes('Query') && mod.includes('Request'))
        )
        .map(submod => {
          return (
            <ExplorerRow
              key={submod}
              module={submod}
              moduleOpts={moduleOpts[submod]}
              path={`${path}.${submod}`}
              onClick={onClick}
              paddingLeft={paddingLeft}
            />
          )
        })
    } else {
      return null
    }
  }

  function handleClick () {
    if (isFinal) {
      onClick(path)
    } else {
      setOpen(!open)
    }
  }

  return (
    <div key={module} style={{ paddingLeft: isRoot ? 0 : paddingLeft }}>
      <div className={classes.explorerRow} onClick={handleClick}>
        <ArrowRight
          style={{
            visibility: isFinal ? 'hidden' : 'visible',
            transform: open ? 'rotate(90deg)' : ''
          }}
          className={classes.arrow}
        />
        <Typography
          variant='body2'
          style={{ fontSize: 14 }}
          className='detail-text'
        >
          {module}
        </Typography>
      </div>
      {renderSubModulesIfOpen()}
    </div>
  )
}

export default ExplorerRow
