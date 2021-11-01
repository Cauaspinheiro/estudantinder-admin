export default class Subject {
  id: number
  name: string
  photo: string | null

  constructor(props: Subject) {
    this.id = props.id
    this.name = props.name
    this.photo = props.photo
  }
}
