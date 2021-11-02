import { Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiBookmark, FiBookOpen, FiFlag, FiImage, FiType } from 'react-icons/fi'

import Student from 'domain/student/student'
import RemoveUserAlert from 'ui/components/atoms/remove_user_alert'
import PageContainer from 'ui/components/templates/page_container'

import SubjectItem from './components/subject_item'
import UserItemHeading from './components/user_item_heading'

export interface BaseUserPageProps {
  student: Student
}

export enum GENDERS {
  FEMALE = 0,
  MALE = 1,
}

export enum SHIFTS {
  MORNING = 1,
  AFTERNOON = 2,
}

const BaseUserPage: React.FC<BaseUserPageProps> = ({ student }) => {
  const getUserAge = (birthday: string) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime()

    const ageDate = new Date(ageDifMs)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const getGender = (gender: string | number) => {
    if (isNaN(gender as number)) return gender

    if (GENDERS.FEMALE === Number(gender)) return 'Feminino'
    if (GENDERS.MALE === Number(gender)) return 'Masculino'

    return gender
  }

  const getShift = (shift: number) => {
    if (SHIFTS.MORNING === shift) return 'Manhã'
    if (SHIFTS.AFTERNOON === shift) return 'Tarde'
    return String(shift)
  }

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
          {student.name}, {getUserAge(student.birthDate)}
        </Heading>

        <Image
          width="214px"
          height="264px"
          borderRadius="5px"
          objectFit="cover"
          objectPosition="center"
          src={student.photos?.[0]}
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
            {student.bio}
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
            {student.photos?.map((photo, index) => {
              if (index == 0) return undefined

              return (
                <Image
                  key={photo}
                  width="100%"
                  height="100%"
                  borderRadius="5px"
                  src={photo}
                />
              )
            })}
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
            {getGender(student.gender)}
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
              <Text>
                {student.school.address} - {student.course.name}
              </Text>

              <Text>Turno: {getShift(student.shift)}</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              gridGap="4"
              textAlign="left"
              w="50%"
            >
              <Text>Série: {student.schoolYear}º ano</Text>

              <Text>Sala: {student.classroom}</Text>
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

          <Flex w="full" justifyContent="space-around" px="12" gridGap="6">
            {student.subjects.map((subject) => (
              <SubjectItem key={subject.id}>{subject.name}</SubjectItem>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  )
}

export default BaseUserPage
