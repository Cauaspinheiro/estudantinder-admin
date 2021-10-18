import React from 'react'
import { useParams } from 'react-router-dom'

import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'
import BaseUserPage from 'ui/user/base_user_page'

const TargetReportPage: React.FC = () => {
  const { id: reportId } = useParams<{ id: string }>()

  return (
    <PageWithSidebarTemplate>
      <BaseUserPage />
    </PageWithSidebarTemplate>
  )
}

export default TargetReportPage
