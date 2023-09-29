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
          <>
          {children}
          </>
        </>
    );
}