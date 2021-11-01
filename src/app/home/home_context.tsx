import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'

import HomeData from 'domain/home/home_data'

export enum HomeContextStatus {
  loading,
  successful,
  failed,
}

interface State {
  status: HomeContextStatus
  data?: HomeData
}

export type HomeContext = State

const Context = createContext<HomeContext | null>(null)

export function useHomeContext(): HomeContext {
  const context = useContext(Context)

  if (context === null) {
    throw new Error('useHomeContext must be used within a HomeProvider')
  }

  return context
}

export const HomeProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState(HomeContextStatus.loading)

  const [data, setData] = useState<HomeData>()

  const handleGetData = async () => {
    try {
      setData({})
      setStatus(HomeContextStatus.successful)
    } catch (error) {
      setStatus(HomeContextStatus.failed)
    }
  }

  useEffect(() => {
    handleGetData()
  }, [])

  const value = useMemo<HomeContext>(
    () => ({
      status,
      data,
    }),
    [status]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
