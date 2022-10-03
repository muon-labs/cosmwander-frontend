import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import axios, { AxiosResponse } from 'axios'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { HttpJsonSchemaOrgDraft04Schema } from '../../types/HttpJsonSchemaOrgDraft04Schema'
import swag from './tmpswagger.json'
import { osmosis } from '../../codegen'
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  QueryPoolsRequest,
  QueryPoolsResponse
} from '../../codegen/osmosis/gamm/v1beta1/query'
import Editor, { Monaco } from '@monaco-editor/react'

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false })

const RPC_ENDPOINT = 'https://rpc.osmosis.zone/'
const REST_ENDPOINT = 'https://lcd.osmosis.zone/'

const mapping = {
  QueryNumPoolsRequest: '/osmosis/gamm/v1beta1/num_pools',
  QueryPoolParamsRequest: '/osmosis/gamm/v1beta1/pools/{pool_id}/params',
  QueryPoolRequest: '/osmosis/gamm/v1beta1/pools/{pool_id}',
  QueryPoolsRequest: '/osmosis/gamm/v1beta1/pools',
  QuerySpotPriceRequest: '/osmosis/gamm/v1beta1/pools/{pool_id}/prices',
  QuerySwapExactAmountInRequest:
    '/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in',
  QuerySwapExactAmountOutRequest:
    '/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_out',
  QueryTotalLiquidityRequest: '/osmosis/gamm/v1beta1/total_liquidity',
  QueryTotalPoolLiquidityRequest:
    '/osmosis/gamm/v1beta1/pools/{pool_id}/total_pool_liquidity',
  QueryTotalSharesRequest: '/osmosis/gamm/v1beta1/pools/{pool_id}/total_shares'
}

async function sendRequest (schemaName: string, flattenedMessage: any) {
  const providerURL = 'https://testnet-rest.osmosis.zone'
  let path = mapping[schemaName]
  const query = {}
  const requestDef = swag.paths[path]
  if (requestDef.get.parameters) {
    for (let param of requestDef.get.parameters) {
      if (param.in === 'path') {
        path = path.replace(`{${param.name}}`, flattenedMessage[param.name])
      } else if (param.in === 'query') {
        query[param.name] = flattenedMessage[param.name]
      }
    }
  }
  const response = await axios.get(providerURL + path, {
    params: query
  })
  return response.data
}

const useStyles = makeStyles({
  root: {},
  subProp: {
    paddingLeft: 8,
    borderLeft: '1px solid #678'
  },
  primitiveProp: {}
})

function constructStateFromObjectSchema (
  rootSchema: HttpJsonSchemaOrgDraft04Schema,
  schema: HttpJsonSchemaOrgDraft04Schema,
  propKey?: string
) {
  const state = {}
  for (const key in schema.properties) {
    const property = schema.properties[key]
    state[key] = constructStateFromSchema(rootSchema, property)
  }
  return state
}

function getDefaultValueFromSchema (
  rootSchema: HttpJsonSchemaOrgDraft04Schema,
  schema: HttpJsonSchemaOrgDraft04Schema,
  propKey?: string
): any {
  if (schema['$ref']) {
    const propKey = schema['$ref'].replace('#/definitions/', '')
    return getDefaultValueFromSchema(
      rootSchema,
      rootSchema.definitions[propKey],
      propKey
    )
  }

  switch (schema.type) {
    case 'string':
    case 'number':
    case 'integer':
    case 'boolean':
      return null
    case 'object':
      return constructStateFromObjectSchema(rootSchema, schema, propKey)
    case 'array':
      return []
    case undefined:
      return {}
    default:
      throw new Error('Unsupported type: ' + schema.type)
  }
}

function constructStateFromSchema (
  rootSchema: HttpJsonSchemaOrgDraft04Schema,
  schema: HttpJsonSchemaOrgDraft04Schema,
  propKey?: string
) {
  if (schema['$ref']) {
    const propKey = schema['$ref'].replace('#/definitions/', '')
    console.log(rootSchema.definitions, propKey)
    return constructStateFromSchema(
      rootSchema,
      rootSchema.definitions[propKey],
      propKey
    )
  }

  return getDefaultValueFromSchema(rootSchema, schema, propKey)
}

const GenericMessage = ({
  schemaName,
  msgSchema,
  schemaPath,
  rootSchema,
  buttonText,
  hideTitle,
  onSubmit
}: {
  schemaName: string
  msgSchema: HttpJsonSchemaOrgDraft04Schema
  schemaPath?: string
  rootSchema?: HttpJsonSchemaOrgDraft04Schema
  buttonText?: string
  hideTitle?: boolean
  onSubmit?: (msg: any) => Promise<{ response: any; error: string }>
}) => {
  if (!buttonText) buttonText = 'Send Request'
  if (!rootSchema) rootSchema = msgSchema

  const classes = useStyles()

  const [message, setMessage] = useState({
    [schemaName]: msgSchema
      ? constructStateFromSchema(rootSchema, msgSchema)
      : {}
  })
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  const editorRef = useRef(null)

  function handleEditorDidMount (editor: any, monaco: Monaco) {
    editorRef.current = editor
  }

  // DELETABLE - REFACTOR asap
  // function flattenObject (obj: any) {
  //   if (!obj) return
  //   if (obj.hasOwnProperty(schemaName)) {
  //     obj = obj[schemaName]
  //   }
  //   const result: any = {}
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       const value = obj[key]
  //       if (typeof value === 'object') {
  //         const flat = flattenObject(value)
  //         for (const k in flat) {
  //           if (flat.hasOwnProperty(k)) {
  //             result[`${key}.${k}`] = flat[k]
  //           }
  //         }
  //       } else {
  //         result[key] = value
  //       }
  //     }
  //   }
  //   return result
  // }

  function getModuleFromPath (path: string) {
    const pathParts = path.split('.')
    let module = osmosis
    for (let i = 0; i < pathParts.length; i++) {
      let part = pathParts[i]
      module = module[part]
    }
    return module
  }

  async function sendMessage () {
    setResponse(null)
    setError(null)
    if (onSubmit) {
      // get the message to submit depending on whether we have msgSchema or not
      let msgToSubmit
      if (msgSchema) msgToSubmit = message[schemaName]
      else {
        try {
          msgToSubmit = JSON.parse(editorRef.current.getValue())
        } catch (e) {
          alert('Custom message is invalid JSON')
          return
        }
      }

      // submit that boi
      const result = await onSubmit(msgToSubmit)
      if (result.error) {
        setError(result.error)
      } else {
        setResponse(result.response)
      }
    } else {
      try {
        if (!schemaPath) {
          alert("No schema path found for selected query. Can't send request.")
          return
        }
        const module = getModuleFromPath(schemaPath)

        // const chain =

        const queryClient = new osmosis.gamm.v1beta1.LCDQueryClient({
          restEndpoint: REST_ENDPOINT
        })

        const poolparams = await queryClient.pool({ poolId: 1 })
        console.log({ poolparams })
        const tfqclient = new osmosis.tokenfactory.v1beta1.LCDQueryClient({
          restEndpoint: REST_ENDPOINT
        })
        const token = await tfqclient.params({
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
        })
        console.log({ token })
        // const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT)
        // const client = new QueryClient(tmClient)
        // const rpc = createProtobufRpcClient(client)
        // const request: QueryPoolsRequest = {
        //   pagination: undefined
        // }
        // const data = QueryPoolsRequest.encode(request).finish()
        // const responseData = await rpc.request(
        //   'osmosis.gamm.v1beta1.Query',
        //   'Pools',
        //   data
        // )
        // const response = QueryPoolsResponse.decode(responseData)
        // console.log({ response })
        setResponse(res)
      } catch (e) {
        setError(
          e.response
            ? e.response.data?.message
              ? e.response.data.message
              : JSON.stringify(e.response.data, null, 2)
            : e.message
        )
      }
    }
  }

  // yucky function to read values
  function getValueFromPath (path: string): any {
    const parts = path.split('.')
    let value = message
    for (const part of parts) {
      value = value[part]
    }
    return value
  }

  // yucky function to set values
  function setValueAtPath (path: string, value: any) {
    const parts = path.split('.')
    const length = parts.length
    const lastPart = parts[length - 1]

    // deep copy (ew)
    let messageRef = JSON.parse(JSON.stringify(message))
    let seeker = messageRef
    for (const part of parts.slice(0, length - 1)) {
      seeker = seeker[part]
    }

    seeker[lastPart] = value
    setMessage(messageRef)
  }

  function concatPath (propPath: string, propKey: string) {
    return propPath ? propPath + '.' + propKey : propKey
  }

  function wrapInPropContainer (
    definition: HttpJsonSchemaOrgDraft04Schema,
    children: any,
    propKey?: string,
    isPrimitive: boolean = false
  ) {
    return (
      <div
        key={propKey}
        className={isPrimitive ? classes.primitiveProp : classes.subProp}
      >
        {isPrimitive ? (
          <Typography
            variant='body2'
            className='detail-text'
            style={{ fontWeight: '200 !important' }}
          >
            {propKey || definition.title}:
          </Typography>
        ) : (
          <Typography variant='body2' className='detail-text'>
            {propKey || definition.title}
          </Typography>
        )}
        {definition.description && (
          <Typography
            variant='body2'
            className='detail-text'
            style={{ fontSize: 12, opacity: 0.6 }}
          >
            {definition.description.substring(0, 60)}...
          </Typography>
        )}
        {children}
      </div>
    )
  }

  function renderObjectPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey?: string
  ) {
    const children = []
    for (const propName in definition.properties) {
      const property = definition.properties[propName]
      children.push(
        <div className={classes.subProp} key={definition.title + propName}>
          {renderPropertyEditor(
            property,
            concatPath(propPath, propKey),
            propName
          )}
        </div>
      )
    }

    return wrapInPropContainer(definition, children, propKey)
  }

  function renderArrayPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey?: string
  ) {
    const rootPath = concatPath(propPath, propKey)

    const children = []
    for (const idx in getValueFromPath(rootPath)) {
      const property = definition.items
      children.push(
        renderPropertyEditor(
          property as HttpJsonSchemaOrgDraft04Schema,
          rootPath,
          idx + ''
        )
      )
    }

    function addProp () {
      const path = concatPath(propPath, propKey)
      setValueAtPath(path, [
        ...getValueFromPath(path),
        constructStateFromSchema(
          msgSchema,
          definition.items as HttpJsonSchemaOrgDraft04Schema
        )
      ])
    }
    children.push(
      <div className='horiz' style={{ cursor: 'pointer' }} onClick={addProp}>
        <Add
          size='small'
          style={{ color: '#667788', height: 14, width: 14, marginRight: 4 }}
        />
        <Typography
          variant='body2'
          className='detail-text'
          style={{ fontSize: 12, opacity: 0.6 }}
        >
          Add Property
        </Typography>
      </div>
    )

    return wrapInPropContainer(definition, children, propKey)
  }

  function renderStringPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey?: string
  ) {
    const hasDenom = propKey.toLowerCase().includes('denom')
    return wrapInPropContainer(
      definition,
      <div className='horiz'>
        <TextField
          InputProps={{
            style: { padding: 0, color: '#222222' },
            classes: {
              input: 'input',
              notchedOutline: 'notched-outline',
              focused: 'input-focused'
            }
          }}
          placeholder={('type: ' + definition.type) as string}
          value={getValueFromPath(concatPath(propPath, propKey)) || ''}
          onChange={e =>
            setValueAtPath(concatPath(propPath, propKey), e.currentTarget.value)
          }
        />
        {/* {hasDenom && <DenomResolver />} */}
      </div>,
      propKey,
      true
    )
  }

  function renderNumberPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey?: string
  ) {
    return wrapInPropContainer(
      definition,
      <TextField
        InputProps={{
          type: 'number',
          style: { padding: 0, color: '#222222' },
          classes: {
            input: 'input',
            notchedOutline: 'notched-outline',
            focused: 'input-focused'
          }
        }}
        placeholder={('type: ' + definition.type) as string}
        value={getValueFromPath(concatPath(propPath, propKey)) || ''}
        onChange={e =>
          setValueAtPath(
            concatPath(propPath, propKey),
            Number(e.currentTarget.value)
          )
        }
      />,
      propKey,
      true
    )
  }

  function renderPropertyEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey?: string
  ) {
    // console.log(
    //   definition['$ref'],
    //   definition.title,
    //   definition.type,
    //   definition.properties
    // )

    // if definition is null it means we don't have even have a partial schema for this, just render freefoorm
    if (!definition) {
      return (
        <Editor
          height='100px'
          defaultLanguage='json'
          defaultValue='{}'
          onMount={handleEditorDidMount}
        />
      )
    }

    if (definition['$ref']) {
      const defKey = definition['$ref'].replace('#/definitions/', '')
      return renderPropertyEditor(
        rootSchema.definitions[defKey],
        propPath,
        propKey
      )
    }

    // if properties are null it means we have a partial schema and we should render a freeform
    console.log('dlwef', definition.properties)
    if (!definition.properties || !Object.keys(definition.properties).length) {
      return (
        <Editor
          height='100px'
          defaultLanguage='json'
          defaultValue={`{\n\t"${propKey}" : {}\n}`}
          onMount={handleEditorDidMount}
        />
      )
    }

    switch (definition.type) {
      case 'object':
        return renderObjectPropEditor(definition, propPath, propKey)
      case 'string':
        return renderStringPropEditor(definition, propPath, propKey)
      case 'array':
        return renderArrayPropEditor(definition, propPath, propKey)
      case 'number':
      case 'integer':
        return renderNumberPropEditor(definition, propPath, propKey)
      case 'boolean':
      default:
        return (
          <p>
            {propKey}: Unimplemented property type {definition.type}
          </p>
        )
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <form className={classes.root} onSubmit={sendMessage}>
          <div className='paragraph'>
            {!hideTitle && (
              <>
                <Typography variant='h6' className='main-text'>
                  {schemaName}
                </Typography>
                {msgSchema?.description && (
                  <Typography
                    variant='body1'
                    className='detail-text'
                    style={{ fontSize: 14, opacity: 0.6 }}
                  >
                    {msgSchema.description}
                  </Typography>
                )}
              </>
            )}
            {renderPropertyEditor(msgSchema, '', schemaName)}
          </div>
          <Button
            onClick={sendMessage}
            className='action-button small squircle paragraph-important'
          >
            {buttonText}
          </Button>
          {!!response && typeof document !== 'undefined' && (
            <div>
              <Typography
                variant='body2'
                className='main-text paragraph-important'
              >
                Response:
              </Typography>
              {typeof response === 'string' ? (
                <Typography
                  variant='body2'
                  className='detail-text paragraph-important'
                >
                  {response}
                </Typography>
              ) : React.isValidElement(response) ? (
                { response }
              ) : (
                <DynamicReactJson
                  enableClipboard={true}
                  style={{ background: 'transparent' }}
                  src={response}
                  theme='summerfruit'
                  collapsed={
                    Buffer.byteLength(JSON.stringify(response)) > 10000
                  }
                />
              )}
            </div>
          )}
          {error && (
            <Typography variant='body1' className='error-text'>
              {error}
            </Typography>
          )}
          {/* <pre>{JSON.stringify(msgSchema, null, 2)}</pre> */}
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        {!!msgSchema && (
          <>
            <Typography
              variant='body2'
              className='main-text paragraph-important'
            >
              Raw Message Preview:
            </Typography>
            <DynamicReactJson
              style={{ background: 'transparent' }}
              src={message[schemaName]}
              theme='summerfruit'
              collapsed={false}
            />
          </>
        )}
      </Grid>
    </Grid>
  )
}

export default GenericMessage

// function DenomResolver ({ props }) {
//   const [clicked, setClicked] = useState(false)
//   const [loaded, setLoaded] = useState(false)

//   function handleClick () {
//     setClicked(true)
//     setTimeout(() => {
//       setLoaded(true)
//     }, 400)
//   }

//   return (
//     <Typography
//       variant='body2'
//       className='detail-text'
//       style={{ fontSize: 12, marginLeft: 8, opacity: 0.6, cursor: 'pointer' }}
//     >
//       {!clicked ? (
//         <a
//           href='#'
//           onClick={handleClick}
//           style={{ color: '#0089FF', cursor: 'pointer' }}
//         >
//           Resolve Denom
//         </a>
//       ) : loaded ? (
//         <span>ausdc (Axelar Lisbon 3/channel-312)</span>
//       ) : (
//         <CircularProgress style={{ width: 12, height: 12 }} />
//       )}
//     </Typography>
//   )
// }
