import { Box, Flex, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import PageContainer from 'ui/components/templates/page_container'
import PageWithSidebarTemplate from 'ui/components/templates/page_with_sidebar_template'

const UsersPage: React.FC = () => {
  const toast = useToast()

  const [value, setValue] = useState('')

  const handleSubmit = () => {
    toast({
      title: value,
      status: 'success',
    })
  }

  return (
    <PageWithSidebarTemplate>
      <PageContainer
        w="full"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box w="full" position="relative">
          <Input
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}
            w="full"
            bg="white"
            h="60px"
            borderRadius="none"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
            border="none"
            placeholder="Digite o ID do usuário"
            pl="54px"
            fontFamily="Poppins"
            fontSize="sm"
            fontWeight="semibold"
            color="black"
            _placeholder={{
              color: '#989898',
              fontFamily: 'heading',
              fontSize: 'sm',
              fontWeight: 'semibold',
            }}
            _focus={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          />

          <Box
            position="absolute"
            left="24px"
            top="20px"
            onClick={value ? handleSubmit : undefined}
            cursor={value ? 'pointer' : 'not-allowed'}
          >
            <FiSearch
              size={18}
              color={value ? '#2d2d2d' : '#989898'}
              strokeWidth="3"
            />
          </Box>
        </Box>

        <Flex direction="column" alignItems="center" gridGap="14">
          <Image src="/assets/search.svg" width="28vw" />

          <Text
            fontFamily="heading"
            fontWeight="medium"
            fontSize="md"
            textAlign="center"
            color="black"
            maxW="382px"
          >
            Digite o ID do usuário que deseja encontrar no campo acima
          </Text>
        </Flex>

        <Box />
      </PageContainer>
    </PageWithSidebarTemplate>
  )
}

export default UsersPage
