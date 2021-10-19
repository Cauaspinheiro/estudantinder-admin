import { Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import PageContainer from 'ui/components/templates/page_container'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import HomePageItem from './components/home_page_item'

const HomePage: React.FC = () => {
  return (
    <PageWithSidebarTemplate>
      <PageContainer
        py="20"
        maxW="944px"
        w="full"
        px="8"
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="flex-start"
        textAlign="left"
        margin="0 auto"
        gridGap="20"
      >
        <Flex direction="column" gridGap="8">
          <Heading color="black" fontSize="3xl" fontWeight="extrabold">
            Olá, Cauã Pinheiro! 👋
          </Heading>

          <Text
            fontFamily="heading"
            fontSize="sm"
            fontWeight="medium"
            color="black"
            letterSpacing="wide"
          >
            Link para as plataformas abaixo contendo arquivos referentes ao
            desenvolvimento do projeto.
          </Text>
        </Flex>

        <Grid
          w="full"
          flex="1"
          gridTemplateAreas={`"a b c" "d e c"`}
          rowGap="16"
          columnGap="12"
        >
          <HomePageItem gridArea="a" title="Repositórios" techTitle="Github" />

          <HomePageItem gridArea="b" title="Design" techTitle="Figma" />

          <HomePageItem gridArea="c" title="Documentação" techTitle="Notion" />
          <HomePageItem gridArea="d" title="Sites" techTitle="Landing Page" />
          <HomePageItem gridArea="e" title="Outros" techTitle="Outros sites" />
        </Grid>
      </PageContainer>
    </PageWithSidebarTemplate>
  )
}

export default HomePage
