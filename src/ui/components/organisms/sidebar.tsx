import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FiFlag, FiSettings, FiLogOut, FiUsers } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import {
  ANALYTICS_PATH,
  HOME_PATH,
  REPORTS_PATH,
  SETTINGS_PATH,
  USERS_PATH,
} from 'app/router/paths'
import { SidebarData } from 'ui/@types/sidebar_data'

import SidebarGroup from '../molecules/sidebar_group'

const items: SidebarData = {
  geral: [
    {
      label: 'Dashboard',
      icon: MdDashboard,
      path: ANALYTICS_PATH,
    },
    {
      label: 'Usuários',
      icon: FiUsers,
      path: USERS_PATH,
    },
    {
      label: 'Denúncias',
      icon: FiFlag,
      path: REPORTS_PATH,
    },
  ],
  usuário: [
    {
      label: 'Configurações',
      icon: FiSettings,
      path: SETTINGS_PATH,
    },
    {
      label: 'Sair',
      icon: FiLogOut,
      path: '/sign-out',
    },
  ],
}

const Sidebar: React.FC = () => {
  const history = useHistory()

  const onClick = (item: string) => {
    history.push(item)
  }

  return (
    <Box
      as="aside"
      width="var(--sidebar-width)"
      background="white"
      height="100vh"
      py="8"
      px="5"
      position="fixed"
    >
      <Heading
        color="purple.500"
        textTransform="uppercase"
        fontSize="1.5rem"
        fontWeight="black"
        letterSpacing="wide"
        cursor="pointer"
        onClick={() => onClick(HOME_PATH)}
      >
        Estudantinder
      </Heading>

      <Box display="flex" flexDir="column" gridRowGap="6" width="100%" mt="10">
        {Object.entries(items).map(([key, value]) => (
          <SidebarGroup
            key={key}
            onItemClick={onClick}
            activePath={history.location.pathname}
            items={value}
            title={key}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
