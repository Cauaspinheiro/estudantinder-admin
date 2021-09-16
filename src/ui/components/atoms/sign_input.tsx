import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'

const SignInput: React.FC<InputProps> = (props) => {
  return (
    <Input
      backgroundColor="gray.50"
      width="100%"
      height="12"
      color="gray.700"
      focusBorderColor="purple.500"
      _placeholder={{
        color: 'gray.400',
      }}
      {...props}
    />
  )
}

export default SignInput
