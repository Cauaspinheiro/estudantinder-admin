import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { TARGET_REPORT_PATH } from 'app/router/paths'
import PrimaryRedButton from 'ui/components/atoms/primary_red_button'
import SecondaryRedButton from 'ui/components/atoms/secondary_red_button'

import ReportItemText from './report_item_text'

const ReportItem: React.FC = () => {
  return (
    <Flex
      direction="column"
      px="5"
      py="6"
      bg="white"
      boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1);"
      borderRadius="20px"
      w="full"
      gridGap="2"
    >
      <Flex justify="flex-end">
        <Link to={TARGET_REPORT_PATH.replace(':id', '2')}>
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="sm"
            color="black"
            transition="color 0.3s"
            _hover={{
              color: 'purple.500',
            }}
          >
            Ver perfil
          </Text>
        </Link>
      </Flex>

      <Flex gridGap="6">
        <Image
          width="214px"
          height="264px"
          borderRadius="5px"
          src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
        />

        <Flex direction="column" alignItems="flex-start">
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="lg"
            color="black"
          >
            User foi reportado
          </Text>

          <Flex gridGap="6px" direction="column" py="2" alignItems="flex-start">
            <ReportItemText label="Perfil falso" value={8} />
            <ReportItemText label="Spam ou conteúdo comercial" value={1} />
            <ReportItemText label="Hackeado" value={2} />
            <ReportItemText label="Conteúdo inapropriado" value={6} />
            <ReportItemText label="Intenções de suicídio" value={12} />

            <Text
              fontFamily="body"
              fontSize="sm"
              fontWeight="medium"
              color="gray.600"
            >
              Denúncias personalizadas:
            </Text>

            <Text
              fontFamily="monospace"
              bg="#F5F5F5"
              fontSize="sm"
              color="black"
              textAlign="left"
              alignSelf="flex-start"
              px="4"
              py="2"
              borderRadius="5px"
              my="2"
              mr="4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              error iste in inventore iure repellendus recusandae nulla nam
              distinctio facere? Illum ipsum id quos quasi laborum fuga et, esse
              iste?
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justify="center"
        alignItems="center"
        gridGap="8"
        w="full"
        maxW="440px"
        margin="0 auto"
      >
        <PrimaryRedButton onClick={() => 0}>Excluir Usuário</PrimaryRedButton>

        <SecondaryRedButton onClick={() => 0}>Excluir Denúncia</SecondaryRedButton>
      </Flex>
    </Flex>
  )
}

export default ReportItem
