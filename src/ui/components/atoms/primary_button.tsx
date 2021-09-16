import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export interface PrimaryButtonProps extends ButtonProps {
  children: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      colorScheme="green"
      height="14"
      color="white"
      textTransform="uppercase"
      isTruncated
      fontFamily="heading"
      fontSize="lg"
      fontWeight="800"
      letterSpacing="wide"
      _focus={{
        boxShadow: '0px 4px 16px rgba(0,0,0, 0.14)',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
