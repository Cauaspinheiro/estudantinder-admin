import React, { useEffect } from 'react'

import { useAuthContext } from './auth/auth_context'
import AuthenticatedRoutes from './router/routes/authenticated_routes'
import UnauthenticatedRoutes from './router/routes/unauthenticated_routes'

const App: React.FC = () => {
  const { isLoading, token, restore } = useAuthContext()

  useEffect(() => {
    restore()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (token) {
    return <AuthenticatedRoutes />
  }

  return <UnauthenticatedRoutes />
}

export default App
