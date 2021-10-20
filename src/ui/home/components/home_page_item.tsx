import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

import { HomePageLinkDataProps } from '../home_page_link_data'
import HomePageLink from './home_page_link'

export interface HomePageItemProps {
  title?: string
  techTitle: string
  links: HomePageLinkDataProps[]
  img: string
}

const HomePageItem: React.FC<HomePageItemProps> = (props) => {
  return (
    <Flex w="full" h="full" direction="column" gridGap="4">
      <Heading
        fontSize="sm"
        fontWeight="semibold"
        color="black"
        letterSpacing="wide"
      >
        {props.title}
      </Heading>

      <Box h="full" w="full">
        <Flex
          w="full"
          bg="#000"
          py="5"
          px="6"
          borderTopRadius="5px"
          alignItems="center"
          gridGap="4"
        >
          <Image src={props.img} w="30px" h="30px" />

          <Heading
            color="white"
            fontSize="sm"
            fontWeight="extrabold"
            letterSpacing="wider"
          >
            {props.techTitle}
          </Heading>
        </Flex>

        <Flex
          w="full"
          h="full"
          maxH="400px"
          px="6"
          pt="5"
          border="1px solid #D9D9D9"
          borderBottomRadius="5px"
          flexDirection="column"
          gridGap="6"
        >
          {props.links.map((value) => (
            <HomePageLink key={value.title} href={value.href}>
              {value.title}
            </HomePageLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomePageItem
