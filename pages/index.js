import HomePage from '../components/home/HomePage';
import Head from 'next/head';
export default function Home() {


  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
        <meta name="keywords" content="portfolio, web development, design, projects"/>
        <meta name="author" content="Bader Alyami"/>
        <link rel="icon" href="/space-ship.webp" />
      </Head>

      <HomePage />

    </>
  )
}
