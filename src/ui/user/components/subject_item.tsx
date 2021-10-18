import { Center, Text } from '@chakra-ui/react'
import React from 'react'

export interface SubjectItemProps {
  children: React.ReactText
}

const SubjectItem: React.FC<SubjectItemProps> = ({ children }) => {
  return (
    <Center py="1" bg="purple.500" w="full" borderRadius="4px">
      <Text
        fontFamily="heading"
        fontSize="lg"
        fontWeight="semibold"
        letterSpacing="wide"
        textTransform="uppercase"
        color="white"
      >
        {children}
      </Text>
    </Center>
  )
}

export default SubjectItem
