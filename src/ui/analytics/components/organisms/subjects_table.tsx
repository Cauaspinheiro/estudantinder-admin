import { Flex, Heading, Table, Tbody, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import SubjectStatistic from 'domain/analytics/subjects_statistic'

import SubjectsTableHead from '../atoms/subjects_table_head'
import SubjectsTableLabel from '../atoms/subjects_table_label'
import SubjectsTableValue from '../atoms/subjects_table_value'

export interface SubjectsTableProps {
  data: SubjectStatistic[]
}

const SubjectsTable: React.FC<SubjectsTableProps> = ({ data }) => {
  return (
    <Flex flexDir="column" align="flex-start" gridGap="10" w="full">
      <Heading
        fontWeight="semibold"
        fontSize="md"
        letterSpacing="wider"
        color="black"
      >
        Relação entre matérias e estudantes
      </Heading>

      <Table
        variant="unstyled"
        border="1px solid #E5E5E5"
        borderRadius="5px"
        colorScheme="green"
        boxShadow="15px 10px 20px rgba(0, 0, 0, 0.08)"
        bg="white"
      >
        <Thead>
          <Tr>
            <SubjectsTableHead>Matéria</SubjectsTableHead>
            <SubjectsTableHead>Procurando</SubjectsTableHead>
            <SubjectsTableHead>Afinidade</SubjectsTableHead>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((value) => (
            <Tr key={value.subject.id}>
              <SubjectsTableLabel
                img={
                  value.subject.photo ||
                  'https://res.cloudinary.com/adamaugustinsky/image/upload/v1631024626/dxebbesw01x3rvjr8k0o.png'
                }
              >
                {value.subject.name}
              </SubjectsTableLabel>
              <SubjectsTableValue>{value.usersSearching}</SubjectsTableValue>
              <SubjectsTableValue>{value.usersPreferred}</SubjectsTableValue>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}

export default SubjectsTable
