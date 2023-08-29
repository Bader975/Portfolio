import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
import ContactMe from '../ui/ContactMe';

export default function HomePage() {

    // The Mouse Traker Function
    // MouseTraker();


    return (
        <>
            {/* ------ I will come back to this later-------- */}
            {/* <Box pos={"relative"}> */}
            {/* <Image pos={"absolute"} zIndex={"-1"} top={0} w={"full"}  h={"auto"} src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" /> */}
            <TypeWriter />
            {/* </Box> */}
            <ButtonContainer />
            <Content />
            <Skill />
            <ContactMe />
        </>
    )
}
