import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const SplashScreen = dynamic(
    () => import('../ui/SplashScreen').then((module) => module.default),
    { ssr: false }
);

export default function Layout({ children }) {
    const pathName = usePathname();
    const isHome = pathName === "/";
    const [isLoading, setIsLoading] = useState(isHome);
    const [showApp, setShowApp] = useState(false);

    //   useEffect(() => {
    //     if (!isLoading) {
    //       const delay = setTimeout(() => {
    //         setShowApp(true);
    //       }, 1000);

    //       return () => clearTimeout(delay);
    //     }
    //   }, [isLoading]);
    useEffect(() => {
        if (isLoading) return;
    }, [isLoading])

    // Render the SplashScreen component on the server-side
    if (isLoading && isHome) {
        return <SplashScreen endLoading={() => setIsLoading(false)} />;
    }

    return (
        <>
            <NavBar />
            {showApp && <>{children}</>}
        </>
    );
}