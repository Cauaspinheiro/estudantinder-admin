import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { TARGET_REPORT_PATH } from 'app/router/paths'
import Report, { ReportLabels } from 'domain/report/report'
import PrimaryRedButton from 'ui/components/atoms/primary_red_button'
import SecondaryRedButton from 'ui/components/atoms/secondary_red_button'

import ReportItemText from './report_item_text'

export interface ReportItemProps {
  report: Report
  handleDeleteReport: (report: Report) => void
  handleDeleteUser: (report: Report) => void
}

const ReportItem: React.FC<ReportItemProps> = ({ report, ...props }) => {
  const customReports = report.reports.find(
    (report) => report.type === 'custom' && report.dates.length > 0
  )

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
        <Link to={TARGET_REPORT_PATH.replace(':id', String(report.user.id))}>
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
          objectFit="cover"
          objectPosition="center"
          src={report.user.photos?.[0] || 'https://via.placeholder.com/200'}
        />

        <Flex direction="column" alignItems="flex-start">
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="lg"
            color="black"
          >
            {report.user.name} foi reportado
          </Text>

          <Flex gridGap="6px" direction="column" py="2" alignItems="flex-start">
            {report.reports.map((report) => {
              if (!report.dates.length) return

              if (report.type === 'custom') return

              return (
                <ReportItemText
                  key={report.type}
                  label={ReportLabels[report.type]}
                  value={report.dates.length}
                />
              )
            })}

            {customReports && (
              <Text
                fontFamily="body"
                fontSize="sm"
                fontWeight="medium"
                color="gray.600"
              >
                Denúncias personalizadas:
              </Text>
            )}

            {customReports?.descriptions.map((value) => (
              <Text
                key={value}
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
                {value}
              </Text>
            ))}
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
        <PrimaryRedButton onClick={() => props.handleDeleteUser(report)}>
          Excluir Usuário
        </PrimaryRedButton>

        <SecondaryRedButton onClick={() => props.handleDeleteReport(report)}>
          Excluir Denúncia
        </SecondaryRedButton>
      </Flex>
    </Flex>
  )
}

export default ReportItem
