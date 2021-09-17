import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

import PrimaryButton from 'ui/components/atoms/primary_button'
import PageContainer from 'ui/components/templates/page_container'

const NotFoundPage: React.FC = () => {
  const router = useHistory()

  const handleGoBack = () => {
    router.replace('/')
  }

  return (
    <PageContainer
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gridRowGap="32"
    >
      <Image
        src="/assets/not-found.svg"
        alt="Not found"
        width="44vw"
        minH="320px"
        maxH="740px"
      />

      <Box display="flex" alignItems="center" flexDir="column" gridRowGap="12">
        <Heading>Página não encontrada</Heading>

        <PrimaryButton onClick={handleGoBack}>
          Voltar para a página inicial
        </PrimaryButton>
      </Box>
    </PageContainer>
  )
}

export default NotFoundPage
