import Report from 'domain/report/report'
import ReportsRepository from 'infra/reports/reports_repository'

export default async function getReportsUseCase(): Promise<Report[]> {
  return ReportsRepository.getReports()
}
