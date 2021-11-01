import Student from 'domain/student/student'

import { StudentRepositoryDTO } from './student_repository'

export default class StudentModel {
  static fromRepository(data: StudentRepositoryDTO): Student {
    return new Student({
      id: data.id,
      name: data.name,
      email: data.email,
      bio: data.bio,
      birthDate: data.birth_date,
      schoolYear: data.school_year,
      classroom: data.classroom,
      course: data.course,
      gender: data.gender,
      photos: data.photos,
      school: data.school,
      shift: data.shift,
      subjects: data.subjects,
    })
  }
}
