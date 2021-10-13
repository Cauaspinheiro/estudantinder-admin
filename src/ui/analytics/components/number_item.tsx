import { Flex, Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export interface AnalyticsNumberItemProps {
  title: string
  value: number
}

const AnalyticsNumberItem: React.FC<AnalyticsNumberItemProps> = (props) => {
  const [itemHover, setItemHover] = useState(false)

  return (
    <Flex
      direction="row"
      bg="white"
      h="40"
      px="12"
      justifyContent="center"
      align="center"
      boxShadow="15px 10px 20px rgba(0, 0, 0, 0.08);"
      border="1px solid #E5E5E5"
      borderRadius="5px"
      position="relative"
      onMouseOver={() => {
        setItemHover(true)
      }}
      onMouseLeave={() => {
        setItemHover(false)
      }}
    >
      <Box
        position="absolute"
        h="calc(100% + 2px)"
        w="8px"
        bg={itemHover ? 'green.400' : 'transparent'}
        left="0"
        marginLeft="-1px"
        marginTop="-1px"
        borderLeftRadius="5px"
        transition="background 0.3s"
      />

      <Flex direction="column" gridGap="4">
        <Text
          fontSize="md"
          color="black"
          fontFamily="heading"
          fontWeight="semibold"
        >
          {props.title}
        </Text>

        <Text
          fontFamily="heading"
          color="black"
          fontWeight="extrabold"
          fontSize="30px"
        >
          {props.value}
        </Text>

        <Box />
      </Flex>
    </Flex>
  )
}

export default AnalyticsNumberItem
