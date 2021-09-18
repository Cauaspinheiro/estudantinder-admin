import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import NotFoundPage from 'ui/404/not_found_page'

import { NOT_FOUND_PATH } from './paths'

const BaseRouter: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        {children}

        {/* Fallback routes */}
        <Route component={NotFoundPage} path={NOT_FOUND_PATH} />
        <Redirect to={NOT_FOUND_PATH} />
      </Switch>
    </BrowserRouter>
  )
}

export default BaseRouter
