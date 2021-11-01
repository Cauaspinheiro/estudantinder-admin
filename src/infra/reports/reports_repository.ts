import axios from 'axios'

import Report from 'domain/report/report'
import api from 'infra/config/api'

export default class ReportsRepository {
  static async getReports(): Promise<Report[]> {
    try {
      const { data } = await api.get('/admins/reports')

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      }

      throw new Error('Algo deu errado!')
    }
  }

  static async delete(userId: number) : Promise<void> {
    try {
      await api.delete(`/admins/users/${userId}/reports`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      }

      throw new Error('Algo deu errado!')
    }
  }
}
