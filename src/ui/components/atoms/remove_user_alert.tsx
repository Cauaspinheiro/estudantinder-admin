import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { MdInfo } from 'react-icons/md'

const RemoveUserAlert: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      gridGap="2"
      bg="red.500"
      width="100%"
      maxWidth="900px"
      margin="0 auto"
      p="4"
      borderRadius="10px"
      boxShadow="0px 15px 20px rgba(0, 0, 0, 0.05);"
      color="white"
    >
      <MdInfo />

      <Text mt="3px" fontFamily="heading" fontSize="sm" fontWeight="semibold">
        Ao excluir um usuário envie um email esclarecendo o ocorrido.
      </Text>
    </Flex>
  )
}

export default RemoveUserAlert
