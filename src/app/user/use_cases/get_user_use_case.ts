import User from 'domain/user/user'
import UserModel from 'infra/user/user_model'
import UserRepository from 'infra/user/user_repository'

export default async function getUserUseCase(): Promise<User> {
  const data = await UserRepository.getUser()

  const admin = UserModel.fromRepository(data)

  return admin
}
