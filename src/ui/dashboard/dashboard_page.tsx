import React, { useState } from 'react'

import PageContainer from 'ui/components/templates/page_container'

import DashboardContentTemplate from './components/dashboard_content_template'
import DashboardSidebar from './components/dashboard_sidebar'
import { DashboardTabsNames } from './dashboard_tabs'

const DashboardPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<DashboardTabsNames>(
    DashboardTabsNames.dashboard
  )

  return (
    <PageContainer justifyContent="flex-start">
      <DashboardSidebar currentItem={currentTab} onChange={setCurrentTab} />

      {currentTab === 'dashboard' && (
        <DashboardContentTemplate>Dashboard</DashboardContentTemplate>
      )}

      {currentTab === 'reports' && (
        <DashboardContentTemplate>reports</DashboardContentTemplate>
      )}

      {currentTab === 'search' && (
        <DashboardContentTemplate>search</DashboardContentTemplate>
      )}
    </PageContainer>
  )
}

export default DashboardPage
