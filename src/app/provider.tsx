import { ChakraProvider } from '@chakra-ui/react'
import React, { FC } from 'react'

import theme from 'ui/theme'

import { AuthProvider } from './auth/auth_context'

const AppProvider: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  )
}

export default AppProvider
