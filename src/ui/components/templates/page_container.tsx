import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export type PageContainerProps = BoxProps

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      minH="100vh"
      alignItems="flex-start"
      justifyContent="center"
      display="flex"
      {...props}
    >
      {children}
    </Box>
  )
}

export default PageContainer
