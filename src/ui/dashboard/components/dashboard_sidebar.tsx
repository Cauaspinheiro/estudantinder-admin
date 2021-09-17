import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

import dashboardTabs, { DashboardTabsNames } from '../dashboard_tabs'
import DashboardSidebarItem from './dashboard_sidebar_item'

export interface DashboardSidebarProps {
  currentItem: DashboardTabsNames
  onChange: (item: DashboardTabsNames) => void
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = (props) => {
  return (
    <Box
      as="aside"
      width="var(--sidebar-width)"
      background="#17142E"
      height="100vh"
      py="8"
      pr="6"
      position="fixed"
    >
      <Heading
        color="white"
        textTransform="uppercase"
        fontSize="1.375rem"
        fontWeight="black"
        letterSpacing="wide"
        pl="6"
      >
        Estudantinder
      </Heading>

      <Box display="flex" flexDir="column" gridRowGap="8" width="100%" mt="10">
        {Object.entries(dashboardTabs).map(([key, value]) => (
          <DashboardSidebarItem
            key={key}
            onClick={() => props.onChange(key as DashboardTabsNames)}
            icon={value.icon}
            isActive={key === props.currentItem}
          >
            {value.label}
          </DashboardSidebarItem>
        ))}
      </Box>
    </Box>
  )
}

export default DashboardSidebar
