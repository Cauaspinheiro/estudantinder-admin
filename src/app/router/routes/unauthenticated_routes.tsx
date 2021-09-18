import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import SignInPage from 'ui/sign-in/sign_in_page'

import BaseRouter from '../base_router'
import { HOME_PATH, SIGN_IN_PATH } from '../paths'

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <BaseRouter>
      {/* Unauthenticated routes*/}
      <Route path={SIGN_IN_PATH} component={SignInPage} />

      {/* Redirection */}
      <Redirect path="/" to={SIGN_IN_PATH} exact />
      <Redirect path={HOME_PATH} to={SIGN_IN_PATH} />
    </BaseRouter>
  )
}

export default UnauthenticatedRoutes
