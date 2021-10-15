import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { UserContextProvider } from 'app/user/user_context'
import AnalyticsPage from 'ui/analytics/analytics_page'
import HomePage from 'ui/home/home_page'
import ReportsPage from 'ui/reports/reports_page'
import UsersPage from 'ui/users/users_page'

import BaseRouter from '../base_router'
import {
  ANALYTICS_PATH,
  HOME_PATH,
  REPORTS_PATH,
  USERS_PATH,
  USER_PATH,
} from '../paths'

const AuthenticatedRoutes: React.FC = () => {
  return (
    <UserContextProvider>
      <BaseRouter>
        {/* Authenticated routes*/}

        <Route path={HOME_PATH} exact component={HomePage} />

        <Route path={USERS_PATH} exact component={UsersPage} />
        <Route path={USER_PATH} component={UsersPage} />

        <Route path={REPORTS_PATH} component={ReportsPage} />
        <Route path={ANALYTICS_PATH} component={AnalyticsPage} />

        {/* Redirection */}
        <Redirect path="/" to={HOME_PATH} exact />
      </BaseRouter>
    </UserContextProvider>
  )
}

export default AuthenticatedRoutes
