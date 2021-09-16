import AuthLogin from 'domain/auth/auth_login'
import AuthRepository from 'infra/auth/auth_repository'
import AuthStorageRepository from 'infra/auth/auth_storage_repository'

export default async function loginUseCase(data: AuthLogin): Promise<string> {
  const response = await AuthRepository.login(data)

  AuthStorageRepository.insert({
    token: response.jwt,
    expireDate: new Date(response.expireDate),
  })

  return response.jwt
}
