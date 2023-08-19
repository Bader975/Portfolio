import React from 'react'
import NavBar from './NavBar'
export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main id="main">{children}</main>
        </>
    )
}
