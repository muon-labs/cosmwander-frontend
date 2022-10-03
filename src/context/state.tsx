import { AppContext } from 'next/app'
import { NextRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { fromBech32 } from '@cosmjs/encoding'

function defaultSetter () {}

const AppContext = createContext({
  chainId: 'osmo-test-4',
  setChainId: defaultSetter as Dispatch<SetStateAction<string>>,
  code: '',
  setCode: defaultSetter as Dispatch<SetStateAction<string>>,
  address: '',
  setAddress: defaultSetter as Dispatch<SetStateAction<string>>
})

const defaultChainId = 'osmo-test-4'

export function AppWrapper ({
  children,
  router
}: {
  children: any
  router: any
}) {
  const [chainId, setChainId] = useState(defaultChainId)
  const [code, setCode] = useState('')
  const [address, setAddress] = useState('')

  console.log('state', { address })

  useEffect(() => {
    // get chain Id from params
    const urlParams = new URLSearchParams(window.location.search)
    const chainIdParam = urlParams.get('chainId')
    const codeIdParam = urlParams.get('codeId')
    let contractAddressParam = urlParams.get('contractAddress')

    console.log({ chainIdParam, codeIdParam, contractAddressParam })

    try {
      const _ = fromBech32(contractAddressParam)
    } catch (e) {
      setAddress(null)
      contractAddressParam = null
    }

    console.log({ chainIdParam, codeIdParam, contractAddressParam })

    if (chainIdParam) setChainId(chainIdParam as string)
    if (codeIdParam) setCode(codeIdParam as string)
    if (contractAddressParam) setAddress(contractAddressParam as string)
  }, [])

  useEffect(() => {
    // update url params
    router.push(
      `${router.pathname}?contractAddress=${address}&chainId=${chainId}&codeId=${code}`,
      undefined,
      { shallow: true }
    )
  }, [chainId, code, address])

  let sharedState = {
    chainId,
    setChainId,
    code,
    setCode,
    address,
    setAddress
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
