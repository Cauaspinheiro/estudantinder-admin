import { Flex, Heading, Table, Tbody, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import SubjectsTableHead from '../atoms/subjects_table_head'
import SubjectsTableLabel from '../atoms/subjects_table_label'
import SubjectsTableValue from '../atoms/subjects_table_value'

const SubjectsTable: React.FC = () => {
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
          <Tr>
            <SubjectsTableLabel img="https://res.cloudinary.com/adamaugustinsky/image/upload/v1631024626/dxebbesw01x3rvjr8k0o.png">
              Matemática
            </SubjectsTableLabel>

            <SubjectsTableValue>18.990</SubjectsTableValue>
            <SubjectsTableValue>18.990</SubjectsTableValue>
          </Tr>

          <Tr>
            <SubjectsTableLabel img="https://res.cloudinary.com/adamaugustinsky/image/upload/v1631024626/dxebbesw01x3rvjr8k0o.png">
              Inglês
            </SubjectsTableLabel>

            <SubjectsTableValue>18.990</SubjectsTableValue>
            <SubjectsTableValue>18.990</SubjectsTableValue>
          </Tr>

          <Tr>
            <SubjectsTableLabel img="https://res.cloudinary.com/adamaugustinsky/image/upload/v1631024626/dxebbesw01x3rvjr8k0o.png">
              Educação Física
            </SubjectsTableLabel>

            <SubjectsTableValue>18.990</SubjectsTableValue>
            <SubjectsTableValue>18.990</SubjectsTableValue>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  )
}

export default SubjectsTable
