import React, { useEffect } from 'react'

import { AuthContextStatus, useAuthContext } from './auth/auth_context'
import AuthenticatedRoutes from './router/routes/authenticated_routes'
import UnauthenticatedRoutes from './router/routes/unauthenticated_routes'

const App: React.FC = () => {
  const { status, restore } = useAuthContext()

  useEffect(() => {
    restore()
  }, [])

  if (status === AuthContextStatus.loading) {
    return <div>Loading...</div> // TODO: Make a loading component
  }

  if (status === AuthContextStatus.authenticated) {
    return <AuthenticatedRoutes />
  }

  return <UnauthenticatedRoutes />
}

export default App
