import { Box, Heading, Link, Text, Image } from '@chakra-ui/react'
import React from 'react'

import PageContainer from 'ui/components/templates/page_container'

import SignInForm from './components/sign_in_form'

const SignInPage: React.FC = () => {
  return (
    <PageContainer flexDirection="row" justifyContent="space-between">
      <Box
        backgroundImage="url(/assets/login-bg.svg)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        bgPosition="top left"
        height="100%"
        width="65vw"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="40px 8%"
        gridGap="12px"
      >
        <Image src="/assets/logo.svg" alt="logo" />

        <Heading
          as="h2"
          fontSize="xl"
          color="white"
          fontWeight="semibold"
          lineHeight="30px"
        >
          Crie novas conexões enquanto aprende!
        </Heading>
      </Box>

      <Box
        marginLeft="-8%"
        marginRight="-4%"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        paddingBottom="12"
        paddingTop="24"
        zIndex="2"
      >
        <div />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gridRowGap="10"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gridRowGap="6"
          >
            <Heading
              as="h2"
              textAlign="center"
              fontWeight="bold"
              fontSize="3xl"
            >
              Faça login
            </Heading>

            <Heading
              as="h3"
              textAlign="center"
              fontWeight="regular"
              fontSize="xl"
              color="gray.600"
            >
              Utilize o seu login já estabelecido
            </Heading>
          </Box>

          <SignInForm />
        </Box>

        <Text fontSize="sm" color="black">
          Este site é destinado aos administradores, para acessar o site público{' '}
          <Link
            href="https://estudantinder.com.br"
            fontWeight="bold"
            _hover={{
              color: 'purple.500',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            clique aqui.
          </Link>
        </Text>
      </Box>

      <Box
        backgroundImage="url(/assets/login-right-bg.svg)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        bgPosition="top right"
        height="100%"
        width="10vw"
        minH="100vh"
      />
    </PageContainer>
  )
}

export default SignInPage
