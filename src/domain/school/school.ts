import Course from './course'

export default class School {
  id: number
  name: string
  address: string
  courses: Course[]

  constructor(props: School) {
    this.id = props.id
    this.name = props.name
    this.address = props.address
    this.courses = props.courses
  }
}
