import AuthStorageRepository from 'infra/auth/auth_storage_repository'
import api from 'infra/config/api'

export default function restoreSessionUseCase(): string | null {
  const token = AuthStorageRepository.get()

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  return token ?? null
}
