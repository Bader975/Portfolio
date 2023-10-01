import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import Head from 'next/head';
import { Text } from "@chakra-ui/react";


export default function SplashScreen({ endLoading }) {


  useEffect(() => {

    // Animation logic using anime.js
    const animation = anime.timeline({
      easing: 'easeOutExpo', // Easing function for smoother animation

    });
    animation
      .add({
        targets: '#logo',
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 1500,
      })
      .add({
        targets: '#text',
        translateY: ['-50%', '5%'],
        opacity: [0, 1],
        duration: 1000,

      })
      .add({
        targets: '#logo',
        scale: ["1", "2"],
        opacity: [1, 0],
        delay: 1000,
        duration: 1000,
        complete: () => endLoading(),
        // Animation complete
      });
  }, []);

  return (
    <>
      <Head>
        <title>Bader's Mohammad Portfolio</title>
        <meta
          name="description"
          content="This is my portfolio website showcasing my work and skills."
        />
        <meta name="application-name" content="Portfolio" />
      </Head>

      <section aria-label="splash-screen-section" className="splash-screen">
        <div className="logo-container" id="logo">
          <Image
          id='bader-logo'
            src="/bm-logo-hd.webp"
            alt="Bader LOGO"
            width={350}
            height={300}
            priority={true}
            
            style={{ width: '100%', height: 'auto' }}
          />

          <Text id="text" as={"p"}>Welcome</Text>
        </div>
      </section>
    </>
  );
}