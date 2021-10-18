import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Poppins, Roboto, sans-serif',
  },
  colors: {
    black: '#2d2d2d',
    purple: {
      500: '#6D36DA',
      600: '#3900BB',
      900: '#0C061C',
    },
    green: {
      400: '#0fad58',
      500: '#10A454',
    },
    red: {
      600: '#D84444',
    },
  },
})
