import { Button } from '@chakra-ui/react'
import React from 'react'

export interface PrimaryRedButtonProps {
  children: React.ReactText
  onClick: () => void
}

const PrimaryRedButton: React.FC<PrimaryRedButtonProps> = (props) => {
  return (
    <Button
      colorScheme="red"
      height="40px"
      fontFamily="heading"
      textTransform="uppercase"
      fontWeight="bold"
      fontSize="sm"
      _focus={{
        outline: 'none',
      }}
      w="full"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default PrimaryRedButton
