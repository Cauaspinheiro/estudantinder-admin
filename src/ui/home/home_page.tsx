import { Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import PageContainer from 'ui/components/templates/page_container'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

import HomePageItem from './components/home_page_item'
import {
  DeployLinks,
  DesignLinks,
  DocumentationLinks,
  GithubLinks,
  OthersLinks,
} from './home_page_link_data'

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
            Links para as plataformas abaixo contendo arquivos referentes ao
            desenvolvimento do projeto.
          </Text>
        </Flex>

        <Grid
          w="full"
          flex="1"
          gridTemplateColumns="repeat(3, 1fr)"
          rowGap="20"
          columnGap="12"
        >
          <HomePageItem
            img="/assets/links/github.svg"
            title="Repositórios"
            techTitle="Github"
            links={GithubLinks}
          />

          <HomePageItem
            img="/assets/links/figma.svg"
            title="Design"
            techTitle="Figma"
            links={DesignLinks}
          />

          <HomePageItem
            img="/assets/links/notion.svg"
            title="Documentação"
            techTitle="Notion"
            links={DocumentationLinks}
          />

          <HomePageItem
            img="/assets/links/default.svg"
            techTitle="Deploys"
            links={DeployLinks}
          />

          <HomePageItem
            img="/assets/links/default.svg"
            techTitle="Outros sites"
            links={OthersLinks}
          />
        </Grid>
      </PageContainer>
    </PageWithSidebarTemplate>
  )
}

export default HomePage
