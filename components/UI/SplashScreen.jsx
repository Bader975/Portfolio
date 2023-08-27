import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic'
const VideoNoSSR = dynamic(
    () => import("../animation/Video"),
    { ssr: false }
)
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
                scale: ["1", "1.8"],
                opacity: [1, 0],
                delay: 1000,
                duration: 1000,
                complete: () => endLoading(),


                // Animation complete, navigate to the main app screen or perform any necessary actions    
            });
    }, []);
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
                <link rel="icon" href="/space-ship.webp" />
                <meta name="application-name" content="Portfolio" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="splash-screen">
                <Image id="logo" src='/next.svg' width={100} height={100} alt="NEXT.JS LOGO" />
            </div>
        </>
    )
}
