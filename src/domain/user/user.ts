export default class User {
  public id: number
  public name: string
  public email: string

  constructor(props: User) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
  }
}
