export default class AuthLogin {
  public email: string
  public password: string

  constructor(props: AuthLogin) {
    this.email = props.email
    this.password = props.password
  }
}
