import AuthStorageRepository from 'infra/auth/auth_storage_repository'
import api from 'infra/config/api'

export default function logoutUseCase(): void {
  api.defaults.headers.common.Authorization = undefined

  AuthStorageRepository.remove()
}
