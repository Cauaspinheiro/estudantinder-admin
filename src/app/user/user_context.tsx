import { useToast } from '@chakra-ui/react'
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
} from 'react'

import User from 'domain/user/user'

import getUserUseCase from './use_cases/get_user_use_case'

type UserContext = User | undefined

const Context = createContext<UserContext | null>(null)

export function useUserContext(): UserContext {
  const context = useContext(Context)

  if (context === null) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = React.useState<User>()

  const toast = useToast()

  const getUser = useCallback(async () => {
    try {
      const newUser = await getUserUseCase()

      setUser(newUser)
    } catch (error) {
      toast({
        title: 'Algo deu errado!',
        description: String(error),
        status: 'error',
      })
    }
  }, [])

  useEffect(() => {
    getUser()
  }, [])

  return <Context.Provider value={user}>{children}</Context.Provider>
}
