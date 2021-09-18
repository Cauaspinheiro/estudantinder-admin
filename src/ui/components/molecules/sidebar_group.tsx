import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

import { SidebarItemData } from 'ui/@types/sidebar_data'

import SidebarItem from '../atoms/sidebar_item'

export interface SidebarGroupProps {
  title: string
  items: SidebarItemData[]
  activePath: string
  onItemClick: (to: string) => void
}

const SidebarGroup: React.FC<SidebarGroupProps> = (props) => {
  return (
    <Box display="flex" flexDir="column" alignItems="flex-start" gridRowGap="2">
      <Heading
        as="h3"
        color="black"
        fontSize="md"
        fontWeight="semibold"
        textTransform="capitalize"
      >
        {props.title}
      </Heading>

      <Box display="flex" flexDir="column" w="100%" gridRowGap="1">
        {props.items.map((item) => {
          return (
            <SidebarItem
              icon={item.icon}
              isActive={props.activePath === item.path}
              key={item.label}
              onClick={() => props.onItemClick(item.path)}
            >
              {item.label}
            </SidebarItem>
          )
        })}
      </Box>
    </Box>
  )
}

export default SidebarGroup
