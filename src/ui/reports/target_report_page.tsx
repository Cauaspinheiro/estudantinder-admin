import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getStudentUseCase from 'app/students/use_cases/get_student_use_cases'
import Student from 'domain/student/student'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'
import BaseUserPage from 'ui/user/base_user_page'

const TargetReportPage: React.FC = () => {
  const { id: reportedUserId } = useParams<{ id: string }>()

  const [student, setStudent] = useState<Student>()

  const toast = useToast()

  const getStudent = async () => {
    try {
      const student = await getStudentUseCase(reportedUserId)

      setStudent(student)
    } catch (error) {
      toast({
        title: 'Erro!',
        description: String(error),
        status: 'error',
      })
    }
  }

  useEffect(() => {
    getStudent()
  }, [])

  return (
    <PageWithSidebarTemplate>
      {student && <BaseUserPage student={student} />}
    </PageWithSidebarTemplate>
  )
}

export default TargetReportPage
