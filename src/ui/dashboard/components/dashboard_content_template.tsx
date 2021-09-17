import { Box } from '@chakra-ui/react'
import React from 'react'

const DashboardContentTemplate: React.FC = ({ children }) => {
  return (
    <Box
      flex="1"
      marginLeft="var(--sidebar-width)"
      width="100%"
      height="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      {children}
    </Box>
  )
}

export default DashboardContentTemplate
