import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import FiltersTablePercentage from '../atoms/filters_table_percentage'

export interface FiltersTableRowProps {
  label: string
  value: number
  percentage: number
}

const FiltersTableRow: React.FC<FiltersTableRowProps> = (props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      gridGap="8"
    >
      <Text
        fontFamily="heading"
        fontSize="md"
        fontWeight="semibold"
        color="black"
        letterSpacing="wide"
        w="24"
        textAlign="left"
      >
        {props.label}
      </Text>

      <FiltersTablePercentage percentage={props.percentage} />

      <Text
        fontFamily="heading"
        fontSize="md"
        fontWeight="semibold"
        color="black"
        w="24"
        textAlign="right"
      >
        {props.value}
      </Text>
    </Flex>
  )
}

export default FiltersTableRow
