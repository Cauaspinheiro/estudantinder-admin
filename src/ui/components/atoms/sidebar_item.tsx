import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

export interface SidebarItemProps {
  icon: IconType
  children: string
  isActive: boolean
  onClick: () => void
  key: string
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  return (
    <Button
      colorScheme="white"
      onClick={props.isActive ? () => null : props.onClick}
      width="100%"
      background={props.isActive ? 'purple.500' : 'transparent'}
      color={props.isActive ? 'white' : 'blackAlpha.600'}
      display="flex"
      alignItems="center"
      borderRadius="base"
      justifyContent="flex-start"
      gridColumnGap="3"
      p="4"
      _hover={{
        color: !props.isActive ? 'purple.500' : undefined,
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <props.icon size={20} />

      <Text fontFamily="heading" as="span" fontSize="sm" fontWeight="semibold">
        {props.children}
      </Text>
    </Button>
  )
}

export default SidebarItem
