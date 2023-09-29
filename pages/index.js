import HomePage from '@/components/home/HomePage';
import { projectsArray } from '@/data/projects';
import Head from 'next/head';
import React, { useState, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/ui/SplashScreen';
import { SplashScreenContext } from '../context-api/SplashScreenContext';
import Navbar from '../components/layout/NavBar';

export default function Home({ projects }) {
  const { splashScreenShown, updateSplashScreenShown } = useContext(SplashScreenContext);
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLoading, setIsLoading] = useState(isHome);



  useEffect(() => {
    if (isLoading ) return;

  }, [isLoading]);


  return (
    <>
      <Head>

        <title>Bader's Mohammad Portfolio</title>
        <meta name="description" content="This is my portfolio website showcasing my work and skills." />
        <meta name="keywords" content="portfolio, web development, design, projects" />
        <meta name="author" content="Bader Alyami" />


      </Head>
      {isLoading && isHome && !splashScreenShown ?
        <div>
          <SplashScreen endLoading={() => {
            setIsLoading(false);
          updateSplashScreenShown();
          }} />
        </div>
        : (
          <>
          <Navbar/>
            <HomePage projects={projects} />
          </>

        )}

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

