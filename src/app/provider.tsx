import { ChakraProvider } from '@chakra-ui/react'
import React, { FC } from 'react'

import theme from '../ui/theme/theme'

const AppProvider: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default AppProvider
