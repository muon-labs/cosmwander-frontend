export type PositiveInteger = number
export type PositiveIntegerDefault0 = PositiveInteger
export type SchemaArray = [
  HttpJsonSchemaOrgDraft04Schema,
  ...HttpJsonSchemaOrgDraft04Schema[]
]
export type StringArray = [string, ...string[]]
export type SimpleTypes =
  | 'array'
  | 'boolean'
  | 'integer'
  | 'null'
  | 'number'
  | 'object'
  | 'string'

/**
 * Core schema meta-schema
 */
export interface HttpJsonSchemaOrgDraft04Schema {
  id?: string
  $ref?: string
  $schema?: string
  title?: string
  description?: string
  default?: unknown
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  maxLength?: PositiveInteger
  minLength?: PositiveIntegerDefault0
  pattern?: string
  additionalItems?: boolean | HttpJsonSchemaOrgDraft04Schema
  items?: HttpJsonSchemaOrgDraft04Schema | SchemaArray
  maxItems?: PositiveInteger
  minItems?: PositiveIntegerDefault0
  uniqueItems?: boolean
  maxProperties?: PositiveInteger
  minProperties?: PositiveIntegerDefault0
  required?: string[]
  additionalProperties?: boolean | HttpJsonSchemaOrgDraft04Schema
  definitions?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema
  }
  properties?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema
  }
  patternProperties?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema
  }
  dependencies?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema | StringArray
  }
  enum?: [unknown, ...unknown[]]
  type?: SimpleTypes | [SimpleTypes, ...SimpleTypes[]]
  format?: string
  allOf?: SchemaArray
  anyOf?: SchemaArray
  oneOf?: SchemaArray
  not?: HttpJsonSchemaOrgDraft04Schema
  [k: string]: unknown
}
