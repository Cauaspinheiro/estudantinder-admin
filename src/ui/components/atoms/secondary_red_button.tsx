import { Button } from '@chakra-ui/react'
import React from 'react'

export interface SecondaryRedButtonProps {
  children: React.ReactText
  onClick: () => void
}

const SecondaryRedButton: React.FC<SecondaryRedButtonProps> = (props) => {
  return (
    <Button
      colorScheme="red"
      variant="outline"
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

export default SecondaryRedButton
