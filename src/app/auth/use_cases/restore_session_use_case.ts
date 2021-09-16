import AuthStorageRepository from 'infra/auth/auth_storage_repository'

export default function restoreSessionUseCase(): string | null {
  const token = AuthStorageRepository.get()

  return token ?? null
}
