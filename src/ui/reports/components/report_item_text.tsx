import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export interface ReportItemTextProps {
  label: string
  value: number
}

const ReportItemText: React.FC<ReportItemTextProps> = (props) => {
  return (
    <Flex gridGap="2px">
      <Text
        fontFamily="body"
        fontSize="sm"
        fontWeight="medium"
        color="gray.600"
      >
        {props.label}:
      </Text>

      <Text fontWeight="bold" fontFamily="body" fontSize="sm" color="red.500">
        {props.value}
      </Text>
    </Flex>
  )
}

export default ReportItemText
