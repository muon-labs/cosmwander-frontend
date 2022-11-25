export type PositiveInteger = number;
export type PositiveIntegerDefault0 = PositiveInteger;
export type SchemaArray = [JSONSchema, ...JSONSchema[]];
export type StringArray = [string, ...string[]];
export type SimpleTypes = "array" | "boolean" | "integer" | "null" | "number" | "object" | "string";

export interface JSONSchema {
  id?: string;
  $ref?: string;
  $schema?: string;
  title?: string;
  description?: string;
  default?: unknown;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: PositiveInteger;
  minLength?: PositiveIntegerDefault0;
  pattern?: string;
  additionalItems?: boolean | JSONSchema;
  items?: JSONSchema | SchemaArray;
  maxItems?: PositiveInteger;
  minItems?: PositiveIntegerDefault0;
  uniqueItems?: boolean;
  maxProperties?: PositiveInteger;
  minProperties?: PositiveIntegerDefault0;
  required?: string[];
  additionalProperties?: boolean | JSONSchema;
  definitions?: {
    [k: string]: JSONSchema;
  };
  properties?: {
    [k: string]: JSONSchema;
  };
  patternProperties?: {
    [k: string]: JSONSchema;
  };
  dependencies?: {
    [k: string]: JSONSchema | StringArray;
  };
  enum?: [unknown, ...unknown[]];
  type?: SimpleTypes | [SimpleTypes, ...SimpleTypes[]];
  format?: string;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: JSONSchema;
  [k: string]: unknown;
}
