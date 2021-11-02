import Analytics from 'domain/analytics/analytics'
import SubjectStatistic from 'domain/analytics/subjects_statistic'

import { AnalyticsRepositoryDTO } from './analytics_repository'

export default class AnalyticsModel {
  static fromRepository(data: AnalyticsRepositoryDTO): Analytics {
    return new Analytics({
      filterUsage: data.filter_usage,
      subjectsStatistics: data.subject_statistics.map(
        (s) =>
          new SubjectStatistic({
            subject: s.subject,
            usersPreferred: s.users_preffered,
            usersSearching: s.users_searching,
          })
      ),
      userCount: data.number_of_users,
    })
  }
}
