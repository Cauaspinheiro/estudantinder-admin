export default class Course {
  id: number
  name: string

  constructor(props: Course) {
    this.id = props.id
    this.name = props.name
  }
}
