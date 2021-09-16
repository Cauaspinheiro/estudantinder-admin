import { useToast } from '@chakra-ui/react'
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react'

import AuthLogin from 'domain/auth/auth_login'

import loginUseCase from './use_cases/login_use_case'
import logoutUseCase from './use_cases/logout_use_case'
import restoreSessionUseCase from './use_cases/restore_session_use_case'

interface State {
  token?: string | null
  isLoading: boolean
}

interface Actions {
  login: (data: AuthLogin) => void
  logout: () => void
  restore: () => void
}

export type AuthContext = State & Actions

const Context = createContext<AuthContext | null>(null)

export function useAuthContext(): AuthContext {
  const context = useContext(Context)

  if (context === null) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}

export const AuthProvider: React.FC = ({ children }) => {
  const toast = useToast()

  const [token, setToken] = useState<string | null>()

  const isLoading = useMemo(() => token === undefined, [token])

  const login = useCallback(
    async (data: AuthLogin) => {
      try {
        const tokenData = await loginUseCase(data)

        setToken(tokenData)

        toast({
          title: 'Login',
          description: 'Login successful',
          status: 'success',
        })
      } catch (error) {
        toast({
          title: 'Algo deu errado!',
          description: String(error),
          status: 'error',
        })
      }
    },
    [toast]
  )

  const logout = useCallback(() => {
    setToken(null)
    logoutUseCase()
  }, [])

  const restore = useCallback(() => {
    const tokenData = restoreSessionUseCase()

    setToken(tokenData)
  }, [])

  const value = useMemo<AuthContext>(
    () => ({
      token,
      isLoading,
      login,
      logout,
      restore,
    }),
    [token, isLoading, login, logout, restore]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
