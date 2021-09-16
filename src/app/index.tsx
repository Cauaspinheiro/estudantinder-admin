import React, { useEffect } from 'react'

import SignInPage from 'ui/sign-in/sign_in_page'

import { useAuthContext } from './auth/auth_context'

const App: React.FC = () => {
  const { isLoading, token, restore } = useAuthContext()

  useEffect(() => {
    restore()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (token) {
    return <div>Welcome to the dashboard!</div>
  }

  return <SignInPage />
}

export default App
