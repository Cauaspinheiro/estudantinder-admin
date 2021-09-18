import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuthContext } from 'app/auth/auth_context'

const SignOutPage: React.FC = () => {
  const { logout } = useAuthContext()

  const history = useHistory()

  useEffect(() => {
    logout()

    history.push('/')
  }, [])

  return <div />
}

export default SignOutPage
