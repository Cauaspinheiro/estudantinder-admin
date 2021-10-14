import { Flex, Th, Text } from '@chakra-ui/react'
import React from 'react'
import { FiHash } from 'react-icons/fi'

export interface SubjectsTableHeadProps {
  children: React.ReactText
}

const SubjectsTableHead: React.FC<SubjectsTableHeadProps> = ({ children }) => {
  return (
    <Th border="1px solid #E5E5E5">
      <Flex justifyContent="center" alignItems="center" width="full">
        <Flex
          gridGap="4"
          alignItems="center"
          justifyContent="flex-start"
          width="160px"
        >
          <FiHash size={20} />

          <Text
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="capitalize"
          >
            {children}
          </Text>
        </Flex>
      </Flex>
    </Th>
  )
}

export default SubjectsTableHead
