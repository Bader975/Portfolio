import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SplashScreen from '../ui/SplashScreen';
import { usePathname } from 'next/navigation';

import dynamic from 'next/dynamic';

// const SplashScreen = dynamic(
//   () => import('../ui/SplashScreen'),
//   { ssr: false } 
// );


export default function Layout({ children }) {


    const pathName = usePathname()
    const isHome = pathName === "/"
    const [isLoading, setIsLoading] = useState(isHome)



    useEffect(() => {
        if (isLoading) return;
    }, [isLoading])


    return (
        <>
            {isLoading && isHome ? <div ><SplashScreen endLoading={() => setIsLoading(false)} /></div>  : <>
           
            <NavBar />
           
            <>{children}</>

            </>
            }

        </>
    )
}
