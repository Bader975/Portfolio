import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
// import { usePathname } from 'next/navigation';
// import LoadingState from './LoadingState';


export default function Layout({ children }) {

  // const pathName = usePathname();
  // const isHome = pathName === '/';
  // const [isLoading, setIsLoading] = useState(isHome);


  // useEffect(() => {
  //   if (isLoading) return;

  // }, [isLoading]);



  return (
    <>

      {/* {(!doneLoading && isLoading && isHome && !splashScreenShown) &&
        <div>
          <LoadingState endLoading={() => {
            setIsLoading(false);

          }} />
        </div>

      } */}
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