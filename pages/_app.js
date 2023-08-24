import Layout from "@/components/layout/Layout"
import "../styles/globals.css"
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../redux/store'
import { Provider } from "react-redux"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}> {/*  <== Redux Store */}
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>

    </>
  )
}
