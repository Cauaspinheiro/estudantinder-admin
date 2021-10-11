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
      width="100%"
      height="44px"
      colorScheme="white"
      color={props.isActive ? 'green.400' : 'white'}
      bgColor={props.isActive ? 'white' : 'transparent'}
      onClick={props.isActive ? () => null : props.onClick}
      display="flex"
      pl="8"
      alignItems="center"
      borderRadius="none"
      borderRightRadius="10px"
      justifyContent="flex-start"
      gridColumnGap="4"
      _hover={{
        color: !props.isActive ? 'whiteAlpha.800' : undefined,
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <props.icon size={20} />

      <Text fontFamily="heading" as="span" fontSize="sm" fontWeight="bold">
        {props.children}
      </Text>
    </Button>
  )
}

export default SidebarItem
