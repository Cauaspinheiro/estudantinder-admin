import { Flex } from '@chakra-ui/react'
import React from 'react'

import RemoveUserAlert from 'ui/components/atoms/remove_user_alert'
import PageContainer from 'ui/components/templates/page_container'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import ReportItem from './components/report_item'

const ReportsPage: React.FC = () => {
  return (
    <PageWithSidebarTemplate>
      <PageContainer
        gridGap="16"
        flexDirection="column"
        justifyContent="flex-start"
        p="12"
        w="full"
      >
        <RemoveUserAlert />

        <Flex direction="column" w="full" alignItems="center" gridGap="16">
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
          <ReportItem></ReportItem>
        </Flex>
      </PageContainer>
    </PageWithSidebarTemplate>
  )
}

export default ReportsPage
