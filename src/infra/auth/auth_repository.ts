import axios from 'axios'

import AuthLogin from 'domain/auth/auth_login'
import api from 'infra/config/api'

export interface SignResponseAuthRepositoryDTO {
  jwt: string
  expireDate: string
}

export default class AuthRepository {
  static async login(data: AuthLogin): Promise<SignResponseAuthRepositoryDTO> {
    try {
      const response = await api.post('/admins/login', {
        email: data.email,
        password: data.password,
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      }

      throw new Error('Algo deu errado!')
    }
  }
}
