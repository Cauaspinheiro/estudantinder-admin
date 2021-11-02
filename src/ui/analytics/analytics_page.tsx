import { Box, Flex, Heading, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import getAnalyticsUseCase from 'app/analytics/use_cases/get_analytics_use_case'
import Analytics from 'domain/analytics/analytics'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import AnalyticsNumberItem from './components/atoms/number_item'
import FiltersTable from './components/organisms/filters_table'
import SubjectsTable from './components/organisms/subjects_table'

const AnalyticsPage: React.FC = () => {
  const toast = useToast()

  const [analytics, setAnalytics] = useState<Analytics>()

  const getAnalytics = async () => {
    try {
      const data = await getAnalyticsUseCase()

      setAnalytics(data)
    } catch (error) {
      if (error instanceof Error) {
        return toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }

      toast({
        title: 'Error',
        description: String(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    getAnalytics()
  }, [])

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
          <AnalyticsNumberItem
            title="Total de alunos cadastrados"
            value={analytics?.userCount || 0}
          />
        </Flex>

        <Box h="16" />

        <Flex direction="row" justifyContent="flex-start" w="full">
          {analytics?.subjectsStatistics && (
            <SubjectsTable data={analytics.subjectsStatistics} />
          )}
        </Flex>

        <Box h="16" />

        <Flex direction="row" justifyContent="flex-start" w="full">
          {analytics?.filterUsage && (
            <FiltersTable data={analytics.filterUsage} />
          )}
        </Flex>
      </Flex>
    </PageWithSidebarTemplate>
  )
}

export default AnalyticsPage
