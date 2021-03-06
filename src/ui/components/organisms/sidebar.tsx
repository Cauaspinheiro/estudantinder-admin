import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FiFlag, FiLogOut, FiUsers } from 'react-icons/fi'
import { MdHome, MdShowChart } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import { useAuthContext } from 'app/auth/auth_context'
import Env from 'app/env'
import {
  ANALYTICS_PATH,
  HOME_PATH,
  REPORTS_PATH,
  USERS_PATH,
} from 'app/router/paths'
import { useUserContext } from 'app/user/user_context'
import { SidebarItemData } from 'ui/@types/sidebar_data'

import SidebarItem from '../atoms/sidebar_item'

const items: SidebarItemData[] = [
  {
    icon: MdHome,
    label: 'Home',
    path: HOME_PATH,
  },
  {
    label: 'Relatórios',
    icon: MdShowChart,
    path: ANALYTICS_PATH,
  },

  {
    label: 'Estudantes',
    icon: FiUsers,
    path: USERS_PATH,
  },

  {
    label: 'Denúncias',
    icon: FiFlag,
    path: REPORTS_PATH,
  },
]

const Sidebar: React.FC = () => {
  const history = useHistory()

  const { logout } = useAuthContext()

  const user = useUserContext()

  const onClick = (item: string) => {
    history.push(item)
  }

  return (
    <Flex
      flexDirection="column"
      as="aside"
      width="var(--sidebar-width)"
      minWidth="var(--sidebar-min-width)"
      background="purple.900"
      height="100vh"
      pt="8"
      pb="2"
      position="fixed"
    >
      <Heading
        color="white"
        textTransform="uppercase"
        fontSize="2xl"
        fontWeight="black"
        letterSpacing="wide"
        cursor="pointer"
        onClick={() => onClick(HOME_PATH)}
      >
        Estudantinder
      </Heading>

      <Box h="24" />

      <Flex flexDir="column" gridRowGap="4" width="100%" pr="4">
        {items.map((item) => {
          const path = history.location.pathname

          const folder = item.path.replaceAll('/dashboard', '')

          const isActive = folder ? path.includes(folder) : path === item.path

          return (
            <SidebarItem
              key={item.label + item.path}
              onClick={() => onClick(item.path)}
              isActive={isActive}
              icon={item.icon}
            >
              {item.label}
            </SidebarItem>
          )
        })}
      </Flex>

      <Flex
        flex="1"
        alignItems="center"
        justify="flex-end"
        flexDirection="column"
      >
        <Flex
          alignItems="center"
          px="8"
          h="16"
          w="full"
          justify="space-between"
          color="white"
        >
          <Text fontFamily="heading" fontSize="md">
            {user?.name}
          </Text>

          <Box
            onClick={logout}
            cursor="pointer"
            transition="color 0.3s"
            _hover={{
              color: 'whiteAlpha.800',
            }}
          >
            <FiLogOut />
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          px="8"
          h="10"
          w="full"
          color="gray"
          fontSize="xs"
          fontFamily="mono"
        >
          v{__VERSION__} - {Env.name}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sidebar
