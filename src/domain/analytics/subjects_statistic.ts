import Subject from 'domain/subject/subject'

export default class SubjectStatistic {
  subject: Subject
  usersSearching: number
  usersPreferred: number

  constructor(props: SubjectStatistic) {
    this.subject = props.subject
    this.usersSearching = props.usersSearching
    this.usersPreferred = props.usersPreferred
  }
}
