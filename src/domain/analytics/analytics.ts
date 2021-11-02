import FilterUsage from './filter_usage'
import SubjectStatistic from './subjects_statistic'

export default class Analytics {
  subjectsStatistics: SubjectStatistic[]
  userCount: number
  filterUsage: FilterUsage[]

  constructor(props: Analytics) {
    this.subjectsStatistics = props.subjectsStatistics
    this.userCount = props.userCount
    this.filterUsage = props.filterUsage
  }
}
