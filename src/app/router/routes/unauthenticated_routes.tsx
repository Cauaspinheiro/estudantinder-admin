import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import SignInPage from 'ui/sign-in/sign_in_page'

import BaseRouter from '../base_router'
import { HOME_PATH } from '../paths'

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <BaseRouter>
      {/* Unauthenticated routes*/}
      <Route path={HOME_PATH} component={SignInPage} />

      {/* Redirection */}
      <Redirect path="/" to={HOME_PATH} exact />
    </BaseRouter>
  )
}

export default UnauthenticatedRoutes
