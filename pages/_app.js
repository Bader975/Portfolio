import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',

});

export default function App({ Component, pageProps }) {
  return (
    <>
        <ChakraProvider>
          <Layout>
            <Head>
              <meta charSet="UTF-8"/>
              <title>Portfolio</title>
              <meta name="description" content="This is my portfolio website showcasing my work and skills" />
              <meta name="keywords" content="portfolio, web development, design, next.js,animations" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
              <meta property="og:image" content="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" />
            </Head>
            <main className={inter.className}>
            <Component {...pageProps} />
            </main>
          </Layout>
        </ChakraProvider>
    </>
  )
}
