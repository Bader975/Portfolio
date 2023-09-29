import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
// import SplashScreen from '../ui/SplashScreen';
import { usePathname } from 'next/navigation';

import dynamic from 'next/dynamic';

const SplashScreen = dynamic(
  () => import('../ui/SplashScreen'),
  { ssr: false } // Set ssr to false to render only on the client-side
);


export default function Layout({ children }) {


    const pathName = usePathname()
    const isHome = pathName === "/"
    const [isLoading, setIsLoading] = useState(isHome)



    const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (!isLoading) {

      const delay = setTimeout(() => {
        setShowApp(true);
      }, 200); 

      return () => clearTimeout(delay);
    }
  }, [isLoading]);


    return (
        <>
            {isLoading && isHome ? <div ><SplashScreen endLoading={() => setIsLoading(false)} /></div>  : <>
           
            <NavBar />
           
         {showApp && <>{children}</>}

            </>
            }

        </>
    )
}
