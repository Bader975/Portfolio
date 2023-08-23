import HomePage from '@/components/home/HomePage'
import Head from 'next/head'
export default function Home() {


  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
        <meta name="keywords" content="portfolio, web development, design, projects"/>
        <meta name="author" content="Bader Alyami"/>
        <link rel="icon" href="/briefcase.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomePage />

    </>
  )
}
