import React from 'react'
import Typewriter from 'typewriter-effect';
import classes from './typeWriter.module.css'
import { BsWordpress } from 'react-icons/bs';


export default function TypeWriter() {

   

    return (

        <div className={classes.container}>

            <span className={classes.typeWriter}>
                <span style={{display:"inline"}}>I'm </span>
                <Typewriter
                    options={{
                        strings: ['Bader Mohammad', 'Web Devoleper', 'REACT Devoleper', 'JS/TS Devoleper'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </div>

    )
}


