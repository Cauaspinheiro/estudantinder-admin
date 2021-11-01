import Student from 'domain/student/student'

export enum ReportLabels {
  fakeProfile = 'Perfil falso',
  inappropriateContent = 'Conteúdo inapropriado',
  spanContent = 'Spam',
  hackedAccount = 'Conta hackeada',
  selfHarm = 'Intenções de suicídio',
  custom = 'Denúncias personalizadas',
}

export type ReportLabelsKey = keyof typeof ReportLabels

export interface ReportData {
  type: ReportLabelsKey
  dates: string[]
  descriptions: string[]
}

export default class Report {
  user: Student
  reports: ReportData[]

  constructor(props: Report) {
    this.user = props.user
    this.reports = props.reports
  }
}
