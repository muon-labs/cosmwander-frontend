import { Grid, MenuItem, SelectChangeEvent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import msgs from 'cosmwander-msgs'
import { useState } from 'react'
import config from '../../config'
import AppNav from '../components/AppNav'
import { DarkSelect } from '../components/atoms'
import ExplorerRow from '../components/ExplorerRow'
import GenericMessage from '../components/messages/GenericMessage'

const DEFAULT_SIDEBAR_WIDTH = 400

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  before: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '7vw',
    transform: 'skew(-86deg)',
    transformOrigin: 'top'
    // zIndex: '-1',
  },
  text: {
    order: 1,
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      order: 2
    }
  },
  gradient: {
    order: 2,
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  secondaryButton: {
    background: '#0089FF',
    color: '#FFF',
    textTransform: 'none',
    borderRadius: '8px !important',
    boxShadow: 'none !important'
  },
  spacer: {
    paddingTop: 100
  },
  icon: {
    marginRight: 8,
    color: '#0066FF',
    height: 16,
    width: 16
  },
  content: {
    minHeight: 'calc(100vh - 66px)',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    borderTop: '1px solid ' + config.PALETTE.BORDER_COLOR
  },
  sidebar: {
    // flexBasis: DEFAULT_SIDEBAR_WIDTH,
    width: DEFAULT_SIDEBAR_WIDTH,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    borderRight: '1px solid ' + config.PALETTE.BORDER_COLOR
  },
  main: {
    flexBasis: '100%',
    width: 'auto',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-start'
  },
  selectChainContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 8px',
    borderBottom: '1px solid ' + config.PALETTE.BORDER_COLOR
  },
  explorer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch'
  }
}))

const App = () => {
  const classes = useStyles()

  const [currentChain, setCurrentChain] = useState('osmosis')
  const [selectedSchemaName, setSelectedSchemaName] = useState('')
  const [selectedSchemaPath, setSelectedSchemaPath] = useState('')
  const [selectedSchema, setSelectedSchema] = useState(null)

  function switchChain (event: SelectChangeEvent<unknown>) {
    setCurrentChain(event.target.value as string)
  }

  function handleExplorerSelect (path: string) {
    console.log(path)
    const modules = msgs.schema[currentChain]
    const parts = path.split('.')
    let message = modules
    for (let part of parts) {
      message = message[part]
    }
    setSelectedSchemaName(parts[parts.length - 1])
    setSelectedSchema(message)
    setSelectedSchemaPath(path)
  }

  function getChainModules (): string[] {
    return currentChain ? Object.keys(msgs.schema[currentChain]) : []
  }

  const chainOpts = Object.keys(msgs.schema)
  const moduleOpts = getChainModules()

  return (
    <div className={classes.root}>
      <AppNav />
      <div className={classes.content}>
        <div className={classes.sidebar}>
          <div className={classes.selectChainContainer}>
            {/* <Typography variant='body1' className='detail-text'>
              Chain:
            </Typography> */}
            <DarkSelect
              value={currentChain}
              onChange={switchChain}
              placeholder='Select Chain'
              size='small'
              label='Chain'
            >
              {chainOpts.map(chain => {
                return (
                  <MenuItem key={chain} value={chain}>
                    {chain}
                  </MenuItem>
                )
              })}
            </DarkSelect>
          </div>
          <div className={classes.explorer}>
            {moduleOpts.map(module => {
              return (
                <ExplorerRow
                  isRoot
                  key={module}
                  module={module}
                  path={module}
                  moduleOpts={msgs.schema[currentChain][module]}
                  onClick={handleExplorerSelect}
                />
              )
              // return   <ExplorerRow module={module}>
            })}
          </div>
        </div>
        <div className={classes.main}>
          <Grid container spacing={3} alignItems='center'>
            {selectedSchema && (
              <Grid item xs={12} key={selectedSchemaName}>
                <div style={{ padding: 16 }}>
                  <GenericMessage
                    schemaName={selectedSchemaName}
                    schemaPath={selectedSchemaPath}
                    msgSchema={selectedSchema}
                  />
                </div>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default App
