import User from 'domain/user/user'

import { GetUserRepositoryDTO } from './user_repository'

export default class UserModel {
  static fromRepository(data: GetUserRepositoryDTO): User {
    return new User({
      id: data.id,
      name: data.name,
      email: data.email,
    })
  }
}
