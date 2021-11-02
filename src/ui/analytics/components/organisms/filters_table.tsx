import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import FilterUsage from 'domain/analytics/filter_usage'

import FiltersTableRow from '../molecules/filters_table_row'

export interface FiltersTableProps {
  data: FilterUsage[]
}

const FiltersTable: React.FC<FiltersTableProps> = ({ data }) => {
  return (
    <Flex flexDir="column" align="flex-start" gridGap="10" w="full">
      <Heading
        fontWeight="semibold"
        fontSize="md"
        letterSpacing="wider"
        color="black"
      >
        Uso dos filtros
      </Heading>

      <Flex
        flexDir="column"
        align="center"
        justifyContent="center"
        gridGap="6"
        px="10"
        py="8"
        bg="white"
        w="full"
        borderRadius="10px"
        boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
        border="1px solid #EFEFEF"
      >
        {data.map((value) => (
          <FiltersTableRow
            key={value.name}
            label={value.name}
            percentage={value.percent}
            value={value.total}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default FiltersTable
