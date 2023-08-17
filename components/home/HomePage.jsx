import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
export default function HomePage() {

    // The function which move the cursor around
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
