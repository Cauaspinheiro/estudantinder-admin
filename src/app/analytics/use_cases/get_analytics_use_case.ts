import Analytics from 'domain/analytics/analytics'
import AnalyticsModel from 'infra/analytics/analytics_model'
import AnalyticsRepository from 'infra/analytics/analytics_repository'

export default async function getAnalyticsUseCase(): Promise<Analytics> {
  const data = await AnalyticsRepository.getAnalytics()

  const analytics = AnalyticsModel.fromRepository(data)

  return analytics
}
