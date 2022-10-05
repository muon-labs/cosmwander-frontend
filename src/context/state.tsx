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
  setAddress: defaultSetter as Dispatch<SetStateAction<string>>,
  activeWindow: 'instantiate',
  setActiveWindow: defaultSetter as Dispatch<
    SetStateAction<'instantiate' | 'query' | 'execute'>
  >,
  activeTab: 'see-contract',
  setActiveTab: defaultSetter as Dispatch<
    SetStateAction<'see-contract' | 'contracts'>
  >
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
  const [activeWindow, setActiveWindow] = useState<
    'instantiate' | 'query' | 'execute'
  >('instantiate')
  const [activeTab, setActiveTab] = useState<'see-contract' | 'contracts'>(
    'see-contract'
  )

  console.log('state', { address, code, path: router.pathname })

  useEffect(() => {
    // get chain Id from params
    const urlParams = new URLSearchParams(window.location.search)
    const chainIdParam = urlParams.get('chainId')
    const codeIdParam = urlParams.get('codeId')
    let contractAddressParam = urlParams.get('contractAddress')
    const activeWindowParam = urlParams.get('activeWindow')
    const activeTabParam = urlParams.get('activeTab')

    // if (
    //   (router.pathname !== '/' || router.pathname !== '') &&
    //   !codeIdParam &&
    //   !contractAddressParam
    // )
    //   window.location.href = '/?chainId=osmo-test-4'

    console.log({ chainIdParam, codeIdParam, contractAddressParam })

    try {
      const _ = fromBech32(contractAddressParam)
    } catch (e) {
      setAddress('')
      contractAddressParam = null
    }

    if (chainIdParam) setChainId(chainIdParam as string)
    if (codeIdParam) setCode(codeIdParam as string)
    if (contractAddressParam) setAddress(contractAddressParam as string)
    if (activeWindowParam)
      setActiveWindow(activeWindowParam as 'instantiate' | 'query' | 'execute')
    if (activeTabParam)
      setActiveTab(activeTabParam as 'see-contract' | 'contracts')
  }, [])

  useEffect(() => {
    // update url params
    // router.push(
    //   `${router.pathname}?contractAddress=${address}&chainId=${chainId}&codeId=${code}&activeWindow=${activeWindow}&activeTab=${activeTab}`,
    //   undefined,
    //   { shallow: true }
    // )
  }, [chainId, code, address, activeWindow, activeTab])

  let sharedState = {
    chainId,
    setChainId,
    code,
    setCode,
    address,
    setAddress,
    activeWindow,
    setActiveWindow,
    activeTab,
    setActiveTab
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
