import { Chain } from '@chain-registry/types'
import { chains } from './chains'

export function getChainById (chainId: string): Chain {
  const chain = chains.find(chain => chain.chain_id === chainId)
  if (!chain) throw new Error('ChAINN NOT FOUNDE WTFFF')
  return chain
}

//   getBestRPC(chainId: string): string {
//     const chain = this.getChainById(chainId);
//     if (!chain.apis?.rpc?.length) throw new HttpError(501);
//     const [rpcNode] = chain.apis.rpc;
//     return rpcNode.address;
//   }
