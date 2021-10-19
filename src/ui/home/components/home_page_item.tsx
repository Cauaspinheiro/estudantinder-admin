import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export interface HomePageItemProps {
  gridArea: string
  title: string
  techTitle: string
}

const HomePageItem: React.FC<HomePageItemProps> = (props) => {
  return (
    <Flex w="full" gridArea={props.gridArea} direction="column" gridGap="4">
      <Heading
        fontSize="sm"
        fontWeight="semibold"
        color="black"
        letterSpacing="wide"
      >
        {props.title}
      </Heading>

      <Flex w="full" bg="#000" py="5" px="6" borderTopRadius="5px">
        <Heading
          color="white"
          fontSize="sm"
          fontWeight="black"
          letterSpacing="wider"
        >
          {props.techTitle}
        </Heading>
      </Flex>
    </Flex>
  )
}

export default HomePageItem
