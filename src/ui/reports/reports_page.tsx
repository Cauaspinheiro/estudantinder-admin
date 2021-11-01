import { Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import deleteReportUserUseCase from 'app/reports/use_cases/delete_report_use_case'
import getReportsUseCase from 'app/reports/use_cases/get_reports_use_case'
import banStudentUseCase from 'app/students/use_cases/ban_student_use_case'
import Report from 'domain/report/report'
import RemoveUserAlert from 'ui/components/atoms/remove_user_alert'
import PageContainer from 'ui/components/templates/page_container'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import ReportItem from './components/report_item'

const ReportsPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([])
  const toast = useToast()

  const handleDeleteReport = async (report: Report) => {
    try {
      setReports((r) => r.filter((r) => r.user.id !== report.user.id))

      await deleteReportUserUseCase(report.user.id)
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

  const handleDeleteUser = async (report: Report) => {
    try {
      setReports((r) => r.filter((r) => r.user.id !== report.user.id))

      await banStudentUseCase(report.user.id)
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

  const getReports = async () => {
    try {
      const data = await getReportsUseCase()

      setReports(data)
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
    getReports()
  }, [])

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
          {reports.map((report) => (
            <ReportItem
              key={report.user.id}
              report={report}
              handleDeleteReport={handleDeleteReport}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </Flex>
      </PageContainer>
    </PageWithSidebarTemplate>
  )
}

export default ReportsPage
