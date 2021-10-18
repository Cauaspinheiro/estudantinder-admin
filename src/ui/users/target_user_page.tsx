import React from 'react'
import { useParams } from 'react-router-dom'

import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'
import BaseUserPage from 'ui/user/base_user_page'

const TargetUserPage: React.FC = () => {
  const { id: userId } = useParams<{ id: string }>()

  return (
    <PageWithSidebarTemplate>
      <BaseUserPage />
    </PageWithSidebarTemplate>
  )
}

export default TargetUserPage
