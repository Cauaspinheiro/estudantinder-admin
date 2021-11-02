import AuthRepository from 'infra/auth/auth_repository'
import AuthStorageRepository from 'infra/auth/auth_storage_repository'
import api from 'infra/config/api'

export default async function restoreSessionUseCase(): Promise<string | null> {
  const token = AuthStorageRepository.get()

  if (!token) return null

  api.defaults.headers.common.Authorization = `Bearer ${token}`

  try {
    await AuthRepository.validate()

    return token
  } catch (error) {
    api.defaults.headers.common.Authorization = ''
    AuthStorageRepository.remove()
    return null
  }
}
