import { Box, Flex, Link, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiCopy } from 'react-icons/fi'

export interface HomePageLinkProps {
  href: string
  children: React.ReactText
}

const HomePageLink: React.FC<HomePageLinkProps> = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const toast = useToast()

  const onClick = () => {
    setIsClicked(true)

    navigator.clipboard.writeText(props.href)

    toast({
      title: 'Link copiado!',
      status: 'success',
    })
  }

  return (
    <Flex
      gridGap="3"
      alignItems="center"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      w="full"
    >
      <Link
        href={props.href}
        isExternal
        fontFamily="heading"
        fontSize="sm"
        fontWeight="semibold"
        zIndex="2"
        bg="page.background"
        _focus={{
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        {props.children}
      </Link>

      <Box
        marginLeft={isMouseOver ? 0 : '-32px'}
        marginRight={isMouseOver ? 0 : '32px'}
        transition="all 0.2s ease-in-out"
        cursor="pointer"
        color="black"
        _hover={{ color: isClicked ? 'green.500' : 'purple.500' }}
        onClick={onClick}
        onMouseOut={() => setIsClicked(false)}
      >
        <FiCopy size={16} color={isMouseOver ? undefined : 'transparent'} />
      </Box>
    </Flex>
  )
}

export default HomePageLink
