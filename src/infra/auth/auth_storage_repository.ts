export interface AuthStorageRepositoryInsertProps {
  token: string
  expireDate: Date
}

export default class AuthStorageRepository {
  private static TOKEN_KEY = 'token'
  private static TOKEN_PATH = '/'

  static get(): string | undefined {
    const cookies = document.cookie

    return cookies.split(`${this.TOKEN_KEY}=`)[1]
  }

  static insert({ token, expireDate }: AuthStorageRepositoryInsertProps): void {
    document.cookie = `${this.TOKEN_KEY}=${token};expires=${new Date(
      expireDate
    )};path=${this.TOKEN_PATH}`
  }

  static remove(): void {
    document.cookie = `${this.TOKEN_KEY}=; Max-Age=0;path=${this.TOKEN_PATH}`
  }
}
