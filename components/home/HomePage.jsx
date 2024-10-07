import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Projects from '../projects/Projects'
import ContactMe from '../animation/ContactMe';
import { Box } from '@chakra-ui/react';
import About from '../about/About'
import Skills from '../skills/Skills'




export default function HomePage({ projects }) {

    return (
        <>
            <Box as="section" aria-label="hero-section" w={"100%"} h={["100%", 600]} shadow={"md"} bg={"#00000080"}>

                {/* ------------------Hero Image-------------------------------------  */}
                {/* <ChakraImage w={"100%"} h={"100%"} objectFit={"cover"} fetchpriority='high' pos={"relative"} zIndex={"-2"} alt="Banner image" src="/laptop image.webp" /> */}
               

                <img
                    src="/hero-image.jpg"
                    alt="Banner image"
                    width={680}
                    height={900} 
                    priority="true"
                    id='laptop-hero-image'
                    style={{
                        position: 'relative',
                        zIndex: -2,
                        width: "100%",
                        height: "100%",
                        objectFit: 'cover'
                    }}

                />
                
                {/* ------------------Hero Image-------------------------------------  */}
                <TypeWriter />
            </Box>
            <ButtonContainer />
            <Content />
            <About />
            <Skills />
            <Projects projects={projects} />
            <ContactMe />

        </>

    )
}
