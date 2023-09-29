import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';



const DynamicSplashScreen = dynamic(
  () => import('../ui/SplashScreen').then((module) => module.default),
  { ssr: false }
);

export default function Layout({ children }) {
  const pathName = usePathname();
  const isHome = pathName === '/';
//   const [isLoading, setIsLoading] = useState(isHome);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
}, [isLoading])

  return (
    <>
      {isLoading && isHome ? 
        <div>
            {/* <DynamicSplashScreen endLoading={() => setIsLoading(false)} /> */}
        </div>
       : (
        <>
          <NavBar />
          <>{children}</>
        </>
      )}
    </>
  );
}