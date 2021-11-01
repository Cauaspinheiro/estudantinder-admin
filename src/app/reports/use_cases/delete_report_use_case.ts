import ReportsRepository from 'infra/reports/reports_repository'

export default async function deleteReportUserUseCase(
  userId: number
): Promise<void> {
  await ReportsRepository.delete(userId)
}
