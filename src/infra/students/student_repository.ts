import axios from 'axios'

import Course from 'domain/school/course'
import School from 'domain/school/school'
import Subject from 'domain/subject/subject'
import api from 'infra/config/api'

export interface StudentRepositoryDTO {
  id: number
  name: string
  email: string
  school_year: number
  birth_date: string
  bio: string
  gender: string
  shift: number
  classroom: string
  photos: string[]
  subjects: Subject[]
  course: Course
  school: School
}

export default class StudentRepository {
  static async getById(id: string): Promise<StudentRepositoryDTO> {
    try {
      const { data } = await api.get(`/admins/users/${id}`)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw 'USUÁRIO NÃO ENCONTRADO'
        }
      }

      throw error
    }
  }
}
