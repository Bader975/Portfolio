import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
export default function HomePage() {

    // console.log(typeof window == "object" && window.navigator.platform);

   
// The Mouse Traker Function
    MouseTraker();

    return (
        <>

            <TypeWriter />
            <ButtonContainer />
            <Content />
            <Skill />

        </>
    )
}
