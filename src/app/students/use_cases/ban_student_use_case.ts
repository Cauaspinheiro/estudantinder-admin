import StudentRepository from 'infra/students/student_repository'

export default async function banStudentUseCase(
  studentId: number
): Promise<void> {
  await StudentRepository.ban(String(studentId))
}
