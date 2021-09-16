import { Box, useToast } from '@chakra-ui/react'
import React from 'react'

import { useAuthContext } from 'app/auth/auth_context'
import PrimaryButton from 'ui/components/atoms/primary_button'
import SignInput from 'ui/components/atoms/sign_input'

const SignInForm: React.FC = () => {
  const toast = useToast()
  const { login } = useAuthContext()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = e.currentTarget.email.value?.trim()
    const password = e.currentTarget.password.value?.trim()

    if (!email.trim()) {
      return toast({
        title: 'Digite o email!',
        status: 'error',
        isClosable: false,
      })
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(email).toLowerCase())) {
      return toast({
        title: 'Email inválido!',
        status: 'error',
        isClosable: false,
      })
    }

    if (!password.trim()) {
      return toast({
        title: 'Digite a senha!',
        status: 'error',
        isClosable: false,
      })
    }

    login({ email, password })
  }

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gridRowGap="8"
      width="100%"
      maxW="md"
      onSubmit={handleSubmit as any}
    >
      <SignInput type="email" placeholder="E-mail" name="email" />

      <SignInput type="password" placeholder="Senha" name="password" />

      <PrimaryButton type="submit">Continuar</PrimaryButton>
    </Box>
  )
}

export default SignInForm
