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
                scale: ["1", "1.5"],
                opacity: [1, 0],
                delay: 1000,
                duration: 1000,
                complete: () => endLoading()
                // Animation complete, navigate to the main app screen or perform any necessary actions    
            });
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Welcome</title>
                <meta name="description" content="splash screen" />
                <link rel="icon" href="/space-ship.webp" />
                <meta name="application-name" content="Portfolio" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="splash-screen">

                <Image id="logo" src='/next.svg' width={200} height={200} alt="NEXT.JS LOGO" />
            </div>
        </>
    )
}
