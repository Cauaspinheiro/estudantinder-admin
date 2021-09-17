import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import NotFoundPage from 'ui/404/not_found_page'
import SignInPage from 'ui/sign-in/sign_in_page'

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Unauthenticated routes*/}

        <Route path="/sign-in" component={SignInPage} />

        {/* Redirection */}
        <Redirect path="/" to="/dashboard" exact />
        <Redirect path="/dashboard" to="/sign-in" />

        {/* Fallback routes */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default UnauthenticatedRoutes
