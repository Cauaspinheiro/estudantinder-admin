import axios from 'axios'

import api from 'infra/config/api'

export interface GetUserRepositoryDTO {
  id: number
  name: string
  email: string
}

export default class UserRepository {
  static async getUser(): Promise<GetUserRepositoryDTO> {
    try {
      const { data } = await api.get('/admins/me')

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      }

      throw new Error('Algo deu errado!')
    }
  }
}
