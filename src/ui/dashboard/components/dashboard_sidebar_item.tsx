import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

export interface DashboardSidebarItemProps {
  icon: IconType
  children: string
  isActive: boolean
  onClick: () => void
  key: string
}

const DashboardSidebarItem: React.FC<DashboardSidebarItemProps> = (props) => {
  return (
    <Button
      colorScheme="white"
      onClick={props.isActive ? () => null : props.onClick}
      width="100%"
      background={props.isActive ? 'white' : 'transparent'}
      color={props.isActive ? 'purple.500' : 'white'}
      display="flex"
      alignItems="center"
      borderRadius="0"
      justifyContent="flex-start"
      gridColumnGap="3"
      borderEndRadius="3xl"
      pl="6"
      py="6"
      _hover={{
        filter: !props.isActive ? 'brightness(90%)' : undefined,
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <props.icon size={22} />

      <Text
        fontFamily="heading"
        as="span"
        fontSize="sm"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {props.children}
      </Text>
    </Button>
  )
}

export default DashboardSidebarItem
