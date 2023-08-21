import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Skill from '../skills/Skill'
import Video from '../animation/Video'


export default function HomePage() {

    // console.log(typeof window == "object" && window.navigator.platform);


    // The Mouse Traker Function
    MouseTraker();





    return (
        <>
            {/* <video autoplay loop id="myVideo" >
                <source src="/bgVideo.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video> */}

            {/* <Video /> */}
            <TypeWriter />
            <ButtonContainer />
            <Content />
            <Skill />

        </>
    )
}
