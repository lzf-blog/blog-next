import { FC, PropsWithChildren } from 'react'
import { Container } from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

type Props = PropsWithChildren<{}>
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="container.md" px={{ base: 4, lg: 0 }} centerContent>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
