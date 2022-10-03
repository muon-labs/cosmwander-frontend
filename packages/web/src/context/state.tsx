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

function defaultSetChainId () {}

const AppContext = createContext({
  chainId: 'osmo-test-4',
  setChainId: defaultSetChainId as Dispatch<SetStateAction<string>>,
  code: '',
  setCode: defaultSetChainId as Dispatch<SetStateAction<string>>
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

  useEffect(() => {
    // get chain Id from params
    const urlParams = new URLSearchParams(window.location.search)
    const chainIdParam = urlParams.get('chainId')
    const codeIdParam = urlParams.get('codeId')

    console.log({ chainIdParam, codeIdParam }, router.state)
    if (chainIdParam) setChainId(chainIdParam as string)
    if (codeIdParam) setCode(codeIdParam as string)
  }, [])

  useEffect(() => {
    // update url params
    router.push(
      `${router.pathname}?chainId=${chainId}&codeId=${code}`,
      undefined,
      { shallow: true }
    )
  }, [chainId, code])

  let sharedState = {
    chainId,
    setChainId,
    code,
    setCode
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
