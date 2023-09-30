import React, { useState, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/ui/SplashScreen';
import { SplashScreenContext } from '../context-api/SplashScreenContext';
export default function splash() {
    const { splashScreenShown, updateSplashScreenShown } = useContext(SplashScreenContext);
    const pathName = usePathname();
    const isHome = pathName === '/';
    const [isLoading, setIsLoading] = useState(isHome);


    
  useEffect(() => {
    if (isLoading ) return;

  }, [isLoading]);

  return (
    <div>
         <SplashScreen endLoading={() => {
            setIsLoading(false);
          updateSplashScreenShown();
          }} />
    </div>
  )
}
