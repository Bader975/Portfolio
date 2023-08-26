import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
import ContactMe from '../UI/ContactMe';
export default function HomePage() {

    // The Mouse Traker Function
    MouseTraker();
   
    
    return (
        <>
            <TypeWriter />
            <ButtonContainer />
            <Content />
            <Skill />
            <ContactMe/>
        </>
    )
}
