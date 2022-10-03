import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import Editor, { Monaco } from '@monaco-editor/react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import React, { useRef, useState } from 'react'
import config from '../../../config'
// to restore when i figure out type issues (nextjs build does not ignore excluded typescript files)
// import { osmosis } from '../../codegen'
import { HttpJsonSchemaOrgDraft04Schema } from '../../types/HttpJsonSchemaOrgDraft04Schema'
import swag from './tmpswagger.json'

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false })

const RPC_ENDPOINT = 'https://rpc.osmosis.zone/'
const REST_ENDPOINT = 'https://lcd.osmosis.zone/'


const useStyles = makeStyles({
  root: {
    background: '#222222',
    borderRadius: 6,
    padding: 8,
    border: '1px solid ' + config.PALETTE.BORDER_COLOR,
    borderLeft: '6px solid ' + config.PALETTE.COLOR_PRIMARY
  },
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

  //  type might be ["string", "null"], extract the non null type from type
  let type = schema.type
  if (Array.isArray(schema.type)) {
    const nonNullType = schema.type.filter(t => t !== 'null')
    if (nonNullType.length === 1) {
      type = nonNullType[0]
    }
  }

  switch (type) {
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
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const editorRef = useRef(null)

  function handleEditorDidMount (editor: any, monaco: Monaco) {
    editorRef.current = editor
  }

  // function getModuleFromPath (path: string) {
  //   const pathParts = path.split('.')
  //   let module = osmosis
  //   for (let i = 0; i < pathParts.length; i++) {
  //     let part = pathParts[i]
  //     module = module[part]
  //   }
  //   return module
  // }

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
      // WARNING DO NOT DELETE
      // try {
      //   if (!schemaPath) {
      //     alert("No schema path found for selected query. Can't send request.")
      //     return
      //   }
      //   const module = getModuleFromPath(schemaPath)
      //   // const chain =
      //   const queryClient = new osmosis.gamm.v1beta1.LCDQueryClient({
      //     restEndpoint: REST_ENDPOINT
      //   })
      //   const poolparams = await queryClient.pool({ poolId: 1 })
      //   console.log({ poolparams })
      //   const tfqclient = new osmosis.tokenfactory.v1beta1.LCDQueryClient({
      //     restEndpoint: REST_ENDPOINT
      //   })
      //   const token = await tfqclient.params({
      //     denom:
      //       'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
      //   })
      //   console.log({ token })
      //   // const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT)
      //   // const client = new QueryClient(tmClient)
      //   // const rpc = createProtobufRpcClient(client)
      //   // const request: QueryPoolsRequest = {
      //   //   pagination: undefined
      //   // }
      //   // const data = QueryPoolsRequest.encode(request).finish()
      //   // const responseData = await rpc.request(
      //   //   'osmosis.gamm.v1beta1.Query',
      //   //   'Pools',
      //   //   data
      //   // )
      //   // const response = QueryPoolsResponse.decode(responseData)
      //   // console.log({ response })
      //   setResponse(res)
      // } catch (e) {
      //   setError(
      //     e.response
      //       ? e.response.data?.message
      //         ? e.response.data.message
      //         : JSON.stringify(e.response.data, null, 2)
      //       : e.message
      //   )
      // }
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
    propKey: string | undefined,
    isPrimitive: boolean = false,
    index: number
  ) {
    return (
      <div
        key={propKey}
        // className={isPrimitive ? classes.primitiveProp : classes.subProp}
        style={
          index % 2 === 1
            ? {
                backgroundColor: '#1B1B1B',
                border: '1px solid ' + config.PALETTE.BORDER_COLOR,
                borderRadius: 6,
                padding: 8
              }
            : {}
        }
      >
        {isPrimitive ? (
          <div className='horiz justify-between' style={{ marginTop: 16 }}>
            <Typography variant='body2' className='label-text'>
              {propKey || definition.title}:
            </Typography>
            {children}
          </div>
        ) : (
          <div>
            <Typography variant='body2' className='detail-text'>
              {propKey || definition.title}
            </Typography>
            {children}
          </div>
        )}
        {/* {definition.description && (
          <Typography
            variant='body2'
            className='detail-text'
            style={{ fontSize: 12, opacity: 0.6 }}
          >
            {definition.description.substring(0, 60)}...
          </Typography>
        )} */}
      </div>
    )
  }

  function renderObjectPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey: string | undefined,
    index: number
  ) {
    const children = []
    for (const propName in definition.properties) {
      const property = definition.properties[propName]
      children.push(
        <div key={definition.title + propName}>
          {renderPropertyEditor(
            property,
            concatPath(propPath, propKey),
            propName,
            index + 1
          )}
        </div>
      )
    }

    return wrapInPropContainer(definition, children, propKey, false, index + 1)
  }

  function renderArrayPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey: string | undefined,
    index: number
  ) {
    const rootPath = concatPath(propPath, propKey)

    const children = []
    for (const idx in getValueFromPath(rootPath)) {
      const property = definition.items
      children.push(
        renderPropertyEditor(
          property as HttpJsonSchemaOrgDraft04Schema,
          rootPath,
          idx + '',
          index + 1
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
          component={null}
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

    return wrapInPropContainer(definition, children, propKey, false, index + 1)
  }

  function renderStringPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey: string | undefined,
    index: number
  ) {
    const hasDenom = propKey.toLowerCase().includes('denom')
    return wrapInPropContainer(
      definition,
      <div style={{ flexBasis: '50%' }}>
        <TextField
          style={{ flex: 1, display: 'flex' }}
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
      true,
      index + 1
    )
  }

  function renderNumberPropEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey: string | undefined,
    index: number
  ) {
    return wrapInPropContainer(
      definition,
      <div style={{ flexBasis: '50%' }}>
        <TextField
          style={{ flex: 1, display: 'flex' }}
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
        />
      </div>,
      propKey,
      true,
      index
    )
  }

  function renderPropertyEditor (
    definition: HttpJsonSchemaOrgDraft04Schema,
    propPath: string,
    propKey: string | undefined,
    index: number
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
        propKey,
        index // same level
      )
    }

    // if properties are null it means we have a partial schema and we should render a freeform
    // console.log('dlwef', definition.properties)
    // if (!definition.properties || !Object.keys(definition.properties).length) {
    //   return (
    //     <Editor
    //       height='100px'
    //       defaultLanguage='json'
    //       defaultValue={`{\n\t"${propKey}" : {}\n}`}
    //       onMount={handleEditorDidMount}
    //     />
    //   )
    // }

    //  type might be ["string", "null"], extract the non null type from type
    let type = definition.type
    if (Array.isArray(definition.type)) {
      const nonNullType = definition.type.filter(t => t !== 'null')
      if (nonNullType.length === 1) {
        type = nonNullType[0]
      }
    }

    switch (type) {
      case 'object':
        return renderObjectPropEditor(definition, propPath, propKey, index)
      case 'string':
        return renderStringPropEditor(definition, propPath, propKey, index)
      case 'array':
        return renderArrayPropEditor(definition, propPath, propKey, index)
      case 'number':
      case 'integer':
        return renderNumberPropEditor(definition, propPath, propKey, index)
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
                <Typography variant='body1' className='label-text'>
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
            {renderPropertyEditor(msgSchema, '', schemaName, 0)}
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
                className='label-text paragraph-important'
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
              className='label-text paragraph-important'
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
