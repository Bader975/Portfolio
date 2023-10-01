import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';
import LoadingState from './LoadingState';
import { SplashScreenContext } from '../../context-api/SplashScreenContext'

export default function Layout({ children }) {

  const { splashScreenShown, updateSplashScreenShown } = useContext(SplashScreenContext);
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [doneLoading, setDoneLoading] = useState(false);

  // useEffect(() => {
  //   if (isLoading) return;

  // }, [isLoading]);

  useEffect(() => {
    // if (!(isLoading && isHome && !splashScreenShown)) {
    setTimeout(() => {
      setDoneLoading(true);
    }, 4000)

    // }


  }, [isLoading, doneLoading]);

  return (
    <>

      {(!doneLoading && isLoading && isHome && !splashScreenShown) &&
        <div>
          <LoadingState endLoading={() => {
            setIsLoading(false);
            updateSplashScreenShown();
          }} />
        </div>

      }
      {/* {(isLoading && isHome) &&  */}
      <>
        <NavBar />

        <>
          {children}
        </>

      </>
      {/* } */}


    </>
  )
}





// {isLoading && isHome && !splashScreenShown ?
//   <div>
//     <LoadingState endLoading={() => {
//       setIsLoading(false);
//       updateSplashScreenShown();
//     }} />
//   </div>

//   : (
//     <>
//       <NavBar />

//       <>
//         {children}
//       </>

//     </>

//   )}