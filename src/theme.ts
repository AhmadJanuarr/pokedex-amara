import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    fonts: {
        body: 'Open Sans, sans-serif',
    }
    ,
    breakpoints: {
        sm: '40em',
        md: '52em',
        lg: '64em',
        xl: '80em',
    }
})