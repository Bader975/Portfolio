import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import MouseTraker from '../animation/MouseTraker'
import Banner from '../UI/Banner'
export default function HomePage() {
    return (
        <>
            <Banner>
                <MouseTraker />
                <TypeWriter >
                </TypeWriter>
            </Banner>

        </>
    )
}
