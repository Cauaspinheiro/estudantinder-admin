import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons/lib'

export interface UserItemHeadingProps {
  name: string
  icon: IconType
}

const UserItemHeading: React.FC<UserItemHeadingProps> = (props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      gridGap="2"
      color="purple.600"
    >
      <props.icon size={24} />

      <Heading fontSize="md" fontWeight="bold" letterSpacing="wide">
        {props.name}
      </Heading>
    </Flex>
  )
}

export default UserItemHeading
