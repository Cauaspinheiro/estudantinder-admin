import { Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiBookmark, FiBookOpen, FiFlag, FiImage, FiType } from 'react-icons/fi'

import RemoveUserAlert from 'ui/components/atoms/remove_user_alert'
import PageContainer from 'ui/components/templates/page_container'

import SubjectItem from './components/subject_item'
import UserItemHeading from './components/user_item_heading'

const BaseUserPage: React.FC = () => {
  return (
    <PageContainer
      gridGap="16"
      flexDirection="column"
      justifyContent="flex-start"
      p="12"
      w="full"
    >
      <RemoveUserAlert />

      <Flex
        direction="column"
        alignItems="center"
        w="full"
        gridGap="12"
        maxW="800px"
        px="12"
        margin="0 auto"
      >
        <Heading
          textAlign="center"
          fontSize="2xl"
          fontWeight="semibold"
          color="black"
        >
          User 1, 17
        </Heading>

        <Image
          width="214px"
          height="264px"
          borderRadius="5px"
          src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
        />

        <Flex
          direction="column"
          gridGap="6"
          alignItems="flex-start"
          textAlign="left"
          px="8"
          py="6"
          background="gray.100"
          borderRadius="10px"
          w="full"
        >
          <UserItemHeading icon={FiType} name="Biografia" />

          <Text fontFamily="body" fontSize="md" color="black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam.
          </Text>
        </Flex>

        <Flex
          direction="column"
          gridGap="8"
          alignItems="flex-start"
          textAlign="left"
          w="full"
        >
          <UserItemHeading icon={FiImage} name="Fotos" />

          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            <Image
              width="100%"
              height="100%"
              borderRadius="5px"
              src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
            />

            <Image
              width="100%"
              height="100%"
              borderRadius="5px"
              src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
            />

            <Image
              width="100%"
              height="100%"
              borderRadius="5px"
              src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
            />

            <Image
              width="100%"
              height="100%"
              borderRadius="5px"
              src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
            />

            <Image
              width="100%"
              height="100%"
              borderRadius="5px"
              src="https://res.cloudinary.com/adamaugustinsky/image/upload/v1632240779/v1rgirb6c0b1ahcthmpw.jpg"
            />
          </Grid>
        </Flex>

        <Flex gridGap="1" alignItems="center" w="full">
          <UserItemHeading icon={FiFlag} name="Gênero:" />

          <Text
            mt="2px"
            fontFamily="heading"
            fontSize="md"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="capitalize"
            color="black"
          >
            Masculino
          </Text>
        </Flex>

        <Divider />

        <Flex
          direction="column"
          gridGap="8"
          alignItems="flex-start"
          textAlign="left"
          w="full"
        >
          <UserItemHeading icon={FiBookmark} name="Informações escolares" />

          <Flex
            alignItems="center"
            justify="space-between"
            px="1"
            w="full"
            color="black"
            fontFamily="heading"
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="wide"
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              gridGap="4"
              textAlign="left"
              w="full"
            >
              <Text>ITB Belval - Informática</Text>

              <Text>Turno: Manhã</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              gridGap="4"
              textAlign="left"
              w="50%"
            >
              <Text>Série: 2º ano</Text>

              <Text>Sala: F</Text>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        <Flex
          direction="column"
          gridGap="8"
          alignItems="flex-start"
          textAlign="left"
          w="full"
        >
          <UserItemHeading icon={FiBookOpen} name="Matérias com afinidade" />

          <Flex w="full" justifyContent="space-around" px="14" gridGap="8">
            <SubjectItem>artes</SubjectItem>

            <SubjectItem>física</SubjectItem>

            <SubjectItem>inglês</SubjectItem>
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  )
}

export default BaseUserPage
