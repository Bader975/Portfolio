import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
import ContactMe from '../ui/ContactMe';
import { SimpleGrid, Image, Box } from '@chakra-ui/react';


export default function HomePage({projects}) {



    return (
        <>
            {/* ------------------Hero Image-------------------------------------  */}
            <Box w={"100%"}  h={["100%",600]} shadow={"md"} bg={"#00000080"}>
                <Image w={"100%"} h={"100%"}  objectFit={"cover"} fetchpriority='high' pos={"relative"} zIndex={"-2"}  alt="Banner image"  src="/laptop image.webp" />
                <TypeWriter />
            </Box>
            {/* ------------------Hero Image-------------------------------------  */}
    
            <ButtonContainer />
            <Content />
            <Skill projects={projects}/>
            <ContactMe />
        </>
    )
}
