import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import getStudentUseCase from 'app/students/use_cases/get_student_use_cases'
import Student from 'domain/student/student'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'
import BaseUserPage from 'ui/user/base_user_page'

const TargetUserPage: React.FC = () => {
  const { id: userId } = useParams<{ id: string }>()
  const history = useHistory()

  const [student, setStudent] = useState<Student>()

  const toast = useToast()

  const getStudent = async () => {
    try {
      const student = await getStudentUseCase(userId)

      setStudent(student)
    } catch (error) {
      if (typeof error === 'string') {
        toast({
          title: 'Erro!',
          description: String(error),
          status: 'error',
        })

        history.goBack()
      }
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

export default TargetUserPage
