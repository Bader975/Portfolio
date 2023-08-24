import React from 'react'
import Typewriter from 'typewriter-effect';
import classes from './TypeWriter.module.css'


export default function TypeWriter() {

    return (

        <div className={classes.container}>
            <span className={classes.typeWriter}>
                I'm
                <Typewriter
                    options={{
                        strings: ['Bader Alyami', 'Web Devoleper', 'REACT Devoleper', 'JS/TS Devoleper'],
                        autoStart: true,
                        loop: true,

                    }}
                />
            </span>
        </div>

    )
}
