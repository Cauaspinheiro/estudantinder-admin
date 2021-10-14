import { Text, Flex, Td } from '@chakra-ui/react'
import React from 'react'

export interface SubjectsTableLabelProps {
  children: React.ReactText
  img: string
}

const SubjectsTableLabel: React.FC<SubjectsTableLabelProps> = (props) => {
  return (
    <Td border="1px solid #E5E5E5">
      <Flex justifyContent="center" alignItems="center" width="full">
        <Flex
          gridGap="4"
          alignItems="center"
          justifyContent="flex-start"
          width="160px"
        >
          <img
            src={props.img}
            alt={props.children.toString()}
            width="20px"
            height="20px"
          />

          <Text
            fontFamily="heading"
            fontSize="sm"
            fontWeight="medium"
            color="black"
          >
            {props.children}
          </Text>
        </Flex>
      </Flex>
    </Td>
  )
}

export default SubjectsTableLabel
