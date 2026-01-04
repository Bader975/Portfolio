import HomePage from '@/components/home/HomePage';
import { projectsArray } from '@/data/projects';
import Head from 'next/head';
import React from 'react';



export default function Home({ projects }) {

  return (
    <>
      <Head>
        <title>Bader's Mohammad Portfolio</title>
        <meta name="description" content="This is my portfolio website showcasing my work and skills." />
        <meta name="keywords" content="portfolio, web development, design, projects" />
        <meta name="author" content="Bader Alyami" />
      </Head>
      <HomePage projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: projectsArray

    },
    revalidate: 60,
  }
}

