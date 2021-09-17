import { IconType } from 'react-icons'
import { FiFlag, FiUsers } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'

export interface DashboardTabsProps {
  label: string
  icon: IconType
}

export enum DashboardTabsNames {
  dashboard = 'dashboard',
  reports = 'reports',
  search = 'search',
}

const dashboardTabs: Record<DashboardTabsNames, DashboardTabsProps> = {
  [DashboardTabsNames.dashboard]: {
    label: 'Dashboard',
    icon: MdDashboard,
  },
  [DashboardTabsNames.reports]: {
    label: 'Ver Denúncias',
    icon: FiFlag,
  },
  [DashboardTabsNames.search]: {
    label: 'Ver Usuários',
    icon: FiUsers,
  },
}

export default dashboardTabs
