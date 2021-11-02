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

export enum AuthContextStatus {
  loading,
  authenticated,
  unauthenticated,
}

interface State {
  status: AuthContextStatus
}

interface Actions {
  login: (data: AuthLogin) => Promise<AuthContextStatus>
  logout: () => void
  restore: () => Promise<AuthContextStatus>
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

  const [status, setStatus] = useState<AuthContextStatus>(
    AuthContextStatus.loading
  )

  const login = useCallback(
    async (data: AuthLogin) => {
      try {
        await loginUseCase(data)

        setStatus(AuthContextStatus.authenticated)

        return AuthContextStatus.authenticated
      } catch (error) {
        toast({
          title: 'Algo deu errado!',
          description: String(error),
          status: 'error',
        })

        setStatus(AuthContextStatus.unauthenticated)

        return AuthContextStatus.unauthenticated
      }
    },
    [toast]
  )

  const logout = useCallback(() => {
    setStatus(AuthContextStatus.unauthenticated)
    logoutUseCase()
  }, [])

  const restore = useCallback(async () => {
    const tokenData = await restoreSessionUseCase()

    setStatus(
      tokenData
        ? AuthContextStatus.authenticated
        : AuthContextStatus.unauthenticated
    )

    if (tokenData === null) {
      return AuthContextStatus.unauthenticated
    }

    return AuthContextStatus.authenticated
  }, [])

  const value = useMemo<AuthContext>(
    () => ({
      status,
      login,
      logout,
      restore,
    }),
    [status, login, logout, restore]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
