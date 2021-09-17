import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import NotFoundPage from 'ui/404/not_found_page'
import DashboardPage from 'ui/dashboard/dashboard_page'
import SignInPage from 'ui/sign-in/sign_in_page'

const AuthenticatedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Authenticated routes*/}
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/sign-in" component={SignInPage} />

        {/* Redirection */}
        <Redirect path="/" to="/dashboard" exact />

        {/* Fallback routes */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthenticatedRoutes
