import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import Head from 'next/head';


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
                targets: '#logo',
                // translateY: ['0%', '100%'],
                // scale: ["1", "1.8"],
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
                <title>Portfolio</title>
                <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
                <link rel="icon" href="/bm-logo-hd.webp" />
                <meta name="application-name" content="Portfolio" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="splash-screen">
                <Image id="logo" src='/bm-logo-hd.webp' width={350} height={300} alt="Bader LOGO" />  
            </div>
        </>
    )
}
