import { Box } from '@chakra-ui/react'
import React from 'react'

export interface FiltersTablePercentageProps {
  percentage: number
}

const FiltersTablePercentage: React.FC<FiltersTablePercentageProps> = ({
  percentage,
}) => {
  return (
    <Box bg="gray.200" w="full" h="10px" borderRadius="20px">
      <Box
        bg="linear-gradient(270deg, rgba(0, 0, 0, 0.25) 4.09%, rgba(0, 0, 0, 0) 50%), #0FAD58"
        w={`${percentage * 100}%`}
        h="full"
        borderRadius="20px"
      />
    </Box>
  )
}

export default FiltersTablePercentage
