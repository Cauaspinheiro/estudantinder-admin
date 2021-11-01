import Student from 'domain/student/student'
import StudentModel from 'infra/students/student_model'
import StudentRepository from 'infra/students/student_repository'

export default async function getStudentUseCase(id: string): Promise<Student> {
  const data = await StudentRepository.getById(id)

  const student = StudentModel.fromRepository(data)

  return student
}
