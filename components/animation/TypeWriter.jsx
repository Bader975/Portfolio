import React from 'react'
import Typewriter from 'typewriter-effect';
import classes from './typeWriter.module.css'


export default function TypeWriter() {
    const arrOfStrings = ['Bader Alyami', 'Web Devoleper', 'REACT Devoleper', 'JS/TS Devoleper'];
    if (typeof document === 'object') {
        console.log("document start")
        const container = document.getElementsByClassName('container');
        document.addEventListener("touchstart", (e) => {
            console.log("touch start")
        })
    }
    return (

        <div className={classes.container}>
            <span className={classes.typeWriter}>
                I'm
                <Typewriter
                    options={{
                        strings: arrOfStrings,
                        autoStart: true,
                        loop: true,

                    }}
                />
            </span>
        </div>

    )
}


