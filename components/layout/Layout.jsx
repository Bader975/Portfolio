import React, { useState, useEffect,useContext } from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';
import SplashScreen from '../ui/SplashScreen';
import { SplashScreenContext } from '../../context-api/SplashScreenContext';


export default function Layout({ children }) {

  const { splashScreenShown, updateSplashScreenShown } = useContext(SplashScreenContext);
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading ) return;

  }, [isLoading]);

  return (
    <>
    
      { isLoading && isHome && !splashScreenShown ?
        <div>

          <SplashScreen endLoading={() => {
            setIsLoading(false);
            updateSplashScreenShown();
          }} />
          
        </div>

        : (
          
          <>
            <NavBar />
            <>
              {children}
            </>
          </>

        )}
    </>
  )
}



