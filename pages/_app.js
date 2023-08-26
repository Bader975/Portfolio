import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../redux/store';
import { Provider } from "react-redux";
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>  {/*  <== Redux Store */}
        <ChakraProvider>
          <Layout>
            <Head>
              <title>Portfolio</title>
              <meta name="description" content="This is my portfolio website showcasing my work and skills." />
              <meta name="keywords" content="portfolio, web development, design, projects" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </>
  )
}
