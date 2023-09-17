import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Projects from '../projects/Projects'
import ContactMe from '../animation/ContactMe';
import {  Image, Box } from '@chakra-ui/react';
import About from '../about/About'
import Skills from '../skills/Skills'



export default function HomePage({projects}) {



    return (
        <>
            {/* ------------------Hero Image-------------------------------------  */}
            <Box w={"100%"}  h={["100%",600]} shadow={"md"} bg={"#00000080"}>
                <Image w={"100%"} h={"100%"}  objectFit={"cover"} fetchpriority='high' pos={"relative"} zIndex={"-2"}  alt="Banner image"  src="/laptop image.webp" />
            {/* ------------------Hero Image-------------------------------------  */}
                <TypeWriter />
            </Box>
            <ButtonContainer />
            <Content />
            <About/>
            <Skills/>
            <Projects projects={projects}/>
            <ContactMe />
        </>
    )
}
