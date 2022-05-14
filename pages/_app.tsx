import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import { Chakra } from '../src/components/Chakra'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
export default MyApp
