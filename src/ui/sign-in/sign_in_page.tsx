import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

import PrimaryButton from '../components/atoms/primary_button'
import SignInput from '../components/atoms/sign_input'
import PageContainer from '../components/templates/page_container'

const SignInPage: React.FC = () => {
  return (
    <PageContainer flexDirection="row" justifyContent="space-between">
      <Box
        backgroundImage="url(/assets/login-bg.svg)"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        bgPosition="top"
        height="100%"
        width="65vw"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="40px 8%"
      >
        <Heading
          as="h1"
          fontSize="3xl"
          textTransform="uppercase"
          color="white"
          fontWeight="black"
          lineHeight="54px"
          letterSpacing="wider"
        >
          Estudantinder
        </Heading>
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
        <div></div>

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

          <Box
            as="form"
            display="flex"
            flexDirection="column"
            gridRowGap="8"
            width="100%"
            maxW="md"
          >
            <SignInput type="email" placeholder="E-mail" name="email" />

            <SignInput type="password" placeholder="Senha" name="password" />

            <PrimaryButton>Continuar</PrimaryButton>
          </Box>
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
      ></Box>
    </PageContainer>
  )
}

export default SignInPage
