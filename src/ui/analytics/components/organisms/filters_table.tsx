import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import FiltersTableRow from '../molecules/filters_table_row'

const FiltersTable: React.FC = () => {
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
        <FiltersTableRow label="Escolas" percentage={0.64} value="20.432" />

        <FiltersTableRow label="Curso" percentage={0.86} value="108.256" />

        <FiltersTableRow label="Série" percentage={0.22} value="3.323" />

        <FiltersTableRow label="Matérias" percentage={0.42} value="13.323" />
      </Flex>
    </Flex>
  )
}

export default FiltersTable
