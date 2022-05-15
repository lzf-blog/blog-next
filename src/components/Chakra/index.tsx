import {
  ChakraProvider,
  createCookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import theme from '../../theme'

type Props = PropsWithChildren<{ cookies: string }>

export function Chakra({ cookies, children }: Props) {
  const colorModeManager =
    typeof cookies === 'string'
      ? createCookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={theme}
      resetCSS={true}
    >
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
