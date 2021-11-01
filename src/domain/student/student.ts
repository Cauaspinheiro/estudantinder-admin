import Course from 'domain/school/course'
import School from 'domain/school/school'
import Subject from 'domain/subject/subject'

export default class Student {
  id: number
  name: string
  bio: string
  email: string
  birthDate: string
  gender: string
  shift: number
  schoolYear: number
  classroom: string
  photos: string[] | null
  subjects: Subject[]
  course: Course
  school: School

  constructor(props: Student) {
    this.id = props.id
    this.name = props.name
    this.bio = props.bio
    this.email = props.email
    this.birthDate = props.birthDate
    this.gender = props.gender
    this.shift = props.shift
    this.schoolYear = props.schoolYear
    this.classroom = props.classroom
    this.photos = props.photos
    this.subjects = props.subjects
    this.course = props.course
    this.school = props.school
  }
}
