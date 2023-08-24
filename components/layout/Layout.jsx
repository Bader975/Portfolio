import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SplashScreen from '../UI/SplashScreen'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
    const pathName = usePathname()
    const isHome = pathName === "/"
    const [isLoading, setIsLoading] = useState(isHome)

    useEffect(() => {
        if (isLoading) return;
    }, [isLoading])


    return (
        <>
            {isLoading && isHome ? <SplashScreen endLoading={() => setIsLoading(false)} /> : <>
                <NavBar />
                <main >{children}</main>

            </>}
        </>
    )
}
