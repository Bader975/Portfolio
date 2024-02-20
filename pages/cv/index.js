import React from 'react';
import Head from 'next/head';
import Cv from '@/components/cv/Cv';


export default function CvPage() {
  return (
    <>
      <Head>

        <title>Bader's CV </title>
        <meta name="description" content="Check out my PDF CV to learn more about my skills and experience." />
        <link rel="icon" href="/resume.webp" />
        <meta name="author" content="Bader Alyami" />
        <meta name="keywords" content="CV, resume, portfolio" />
        <meta name="application-name" content="Portfolio" />
        <meta property="og:title" content="PDF CV - Bader" />
        <meta property="og:description" content="Check out my PDF CV" />

      </Head>

      {/* my cv Component */}
      <Cv />

    </>
  )
}
