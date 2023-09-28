import Layout from "../components/layout/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',

});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Head>
            <meta charSet="UTF-8" />
            <title>Bader's Mohammad Portfolio</title>
            <meta name="description" content="This is my portfolio website showcasing my work and skills" />
            <meta name="keywords" content="portfolio, web development, design, next.js,animations" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* The FavIcon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            {/* The FavIcon */}
            


            {/*  <!-- GOOGLE SEO Meta Tags --> */}
            <meta name="google-site-verification" content="OQtDBl4loczi5G1TaxIPG9iKNkDrpy0cfg16wleS3Qc" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://www.portfolio-bader.online/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Bader's Mohammad Portfolio" />
            <meta property="og:description" content="This is my portfolio website showcasing my work and skills." />
            <meta property="og:image" content="https://github.com/Bader975/NEXT-Auth/assets/80196102/d019df5c-5d9d-44c7-bf8d-63f95fb5bb83" />
            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="portfolio-bader.online" />
            <meta property="twitter:url" content="https://www.portfolio-bader.online/" />
            <meta name="twitter:title" content="Bader's Mohammad Portfolio" />
            <meta name="twitter:description" content="This is my portfolio website showcasing my work and skills." />
            <meta name="twitter:image" content="https://github.com/Bader975/NEXT-Auth/assets/80196102/d019df5c-5d9d-44c7-bf8d-63f95fb5bb83" />

          </Head>

          {/* added google fonts */}
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ChakraProvider>
    </>
  )
}
