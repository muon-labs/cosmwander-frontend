import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { RPC_ENDPOINT } from '../utils/config'

const MNEMONIC = process.env.MNEMONIC as string
if (!MNEMONIC) {
  throw new Error('MNEMONIC env var is required')
}

export async function getSigningClient () {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, {
    prefix: 'osmo'
  })
  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    RPC_ENDPOINT,
    wallet
  )

  return {
    signingClient,
    accounts: await wallet.getAccounts()
  }
}
