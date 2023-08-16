import React from 'react'
import classes from './banner.module.css'

export default function Banner({ children }) {

    return (
        <>
            <div className={classes.banner}>
                {children}
            </div>
        </>
    )
}
