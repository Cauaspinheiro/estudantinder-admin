import AuthStorageRepository from 'infra/auth/auth_storage_repository'

export default function logoutUseCase(): void {
  AuthStorageRepository.remove()
}
