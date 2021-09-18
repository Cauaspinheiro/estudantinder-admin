import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

import Sidebar from '../organisms/sidebar'
import PageContainer from './page_container'

export interface PageWithSidebarTemplateProps extends BoxProps {
  children: React.ReactNode
}

const PageWithSidebarTemplate: React.FC = ({ children, ...rest }) => {
  return (
    <PageContainer justifyContent="flex-start">
      <Sidebar />

      <Box
        flex="1"
        marginLeft="var(--sidebar-width)"
        width="100%"
        height="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        display="flex"
        bg="#FCFAFF"
        {...rest}
      >
        {children}
      </Box>
    </PageContainer>
  )
}

export default PageWithSidebarTemplate
