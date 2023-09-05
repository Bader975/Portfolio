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
                <Image w={"100%"} h={"100%"}  objectFit={"cover"} fetchpriority='high' pos={"relative"} zIndex={"-2"}  alt="Banner image"  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
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
