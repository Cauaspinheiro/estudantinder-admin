import axios from 'axios'

import FilterUsage from 'domain/analytics/filter_usage'
import Subject from 'domain/subject/subject'
import api from 'infra/config/api'

interface SubjectStatisticsDTO {
  subject: Subject
  users_searching: number
  users_preffered: number
}

export interface AnalyticsRepositoryDTO {
  subject_statistics: SubjectStatisticsDTO[]
  number_of_users: number
  filter_usage: FilterUsage[]
}

export default class AnalyticsRepository {
  static async getAnalytics(): Promise<AnalyticsRepositoryDTO> {
    try {
      const { data } = await api.get('/admins/analytics')

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      }

      throw new Error('Algo deu errado!')
    }
  }
}
