import { AppContext } from 'next/app'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'

function defaultSetChainId() {}

const AppContext = createContext({
  chainId: 'osmo-test-4',
  setChainId: defaultSetChainId as Dispatch<SetStateAction<string>>
})

export function AppWrapper ({ children, router }) {
  const [chainId, setChainId] = useState('osmo-test-4')

  useEffect(() => {
    // get chain Id from params
    const { chain_id } = router.query
    setChainId(chain_id)
  }, [])

  let sharedState = {
    chainId,
    setChainId
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
