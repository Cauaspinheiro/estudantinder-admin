import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import AnalyticsNumberItem from './components/atoms/number_item'
import FiltersTable from './components/organisms/filters_table'
import SubjectsTable from './components/organisms/subjects_table'

const AnalyticsPage: React.FC = () => {
  return (
    <PageWithSidebarTemplate>
      <Flex
        direction="column"
        flex="1"
        px="16"
        py="14"
        h="full"
        minH="100vh"
        w="full"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading as="h1" fontSize="2xl" fontWeight="semibold" color="black">
          Análise dos dados
        </Heading>

        <Box h="12" />

        <Flex direction="row" justifyContent="flex-start" w="full">
          <AnalyticsNumberItem title="Total de alunos cadastrados" value={12} />
        </Flex>

        <Box h="16" />

        <Flex direction="row" justifyContent="flex-start" w="full">
          <SubjectsTable />
        </Flex>

        <Box h="16" />

        <Flex direction="row" justifyContent="flex-start" w="full">
          <FiltersTable />
        </Flex>
      </Flex>
    </PageWithSidebarTemplate>
  )
}

export default AnalyticsPage
