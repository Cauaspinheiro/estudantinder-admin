import { Td } from '@chakra-ui/react'
import React from 'react'

export interface SubjectsTableValueProps {
  children: React.ReactText
}

const SubjectsTableValue: React.FC<SubjectsTableValueProps> = ({
  children,
}) => {
  return (
    <Td
      textAlign="center"
      fontFamily="heading"
      fontWeight="medium"
      fontSize="md"
      color="black"
      border="1px solid #E5E5E5"
    >
      {children}
    </Td>
  )
}

export default SubjectsTableValue
