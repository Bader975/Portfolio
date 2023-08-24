import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';

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
                    translateY: ['0%', '100%'],
                    opacity: [1, 0],
                    delay: 1000,
                    duration: 2000,
                complete: () => endLoading()
                // Animation complete, navigate to the main app screen or perform any necessary actions    
            });
    }, []);
    return (
        <div className="splash-screen">
            <Image id="logo" src='/Astronaut suit.gif' width={200} height={200} />
        </div>
    )
}
