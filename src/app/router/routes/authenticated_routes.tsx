import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AnalyticsPage from 'ui/analytics/analytics_page'
import HomePage from 'ui/home/home_page'
import ReportsPage from 'ui/reports/reports_page'
import SettingsPage from 'ui/settings/settings_page'
import SignInPage from 'ui/sign-in/sign_in_page'
import SignOutPage from 'ui/sign-out/sign_out_page'
import UsersPage from 'ui/users/users_page'

import BaseRouter from '../base_router'
import {
  ANALYTICS_PATH,
  HOME_PATH,
  REPORTS_PATH,
  SETTINGS_PATH,
  SIGN_IN_PATH,
  SIGN_OUT_PATH,
  USERS_PATH,
  USER_PATH,
} from '../paths'

const AuthenticatedRoutes: React.FC = () => {
  return (
    <BaseRouter>
      {/* Authenticated routes*/}
      <Route path={SIGN_IN_PATH} component={SignInPage} />
      <Route path={SIGN_OUT_PATH} component={SignOutPage} />

      <Route path={HOME_PATH} exact component={HomePage} />
      <Route path={USERS_PATH} exact component={UsersPage} />
      <Route path={USER_PATH} component={() => <h1>User</h1>} />
      <Route path={REPORTS_PATH} component={ReportsPage} />
      <Route path={ANALYTICS_PATH} component={AnalyticsPage} />
      <Route path={SETTINGS_PATH} component={SettingsPage} />

      {/* Redirection */}
      <Redirect path="/" to={HOME_PATH} exact />
    </BaseRouter>
  )
}

export default AuthenticatedRoutes