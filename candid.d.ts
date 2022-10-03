interface Window {
  ethereum: any
}

interface User {
  user_data?: UserData
  twitter_data?: UserData
  attributes?: Attribute[]
}

interface UserData {
  id: string
  name: string
  description: string
  image: string
  location?: string
  verified?: boolean
  displayName?: string
  assignedTokenId?: number
  attributes?: Object<string, Attribute>
}

interface TokenAttribute {
  display_type?: 'boost_number' | 'boost_percentage' | 'number'
  trait_type: string
  value: string | number
}

interface Token {
  name: string
  image: string
  description: string
  attributes: TokenAttribute[]
}

// interface Transaction {
//   accessList: string[]
//   blockHash: string
//   blockNumber: number
//   chainId: string
//   from: string
//   gas: number
//   gasPrice: string
//   hash: string
//   input: string
//   maxFeePerGas: string
//   maxPriorityFeePerGas: string
//   nonce: number
//   r: string
//   s: string
//   to: string
//   transactionIndex: number
//   type: number
//   v: string
//   value: string
// }

type AttributeType = 'select' | 'input' | 'textarea' | 'date'

interface AttributeConfig {
  id: string
  name: string
  type: AttributeType
  description: string
  valueGetter: () => string[] | Promise<string[]>
}

interface AttributesConfig {
  attributes: AttributeConfig[]
}

interface Attribute {
  id: string
  isCustom: boolean
  displayName: string
  value: string
  customAttributeConfig?: AttributeConfig
}
