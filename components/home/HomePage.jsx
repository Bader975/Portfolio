import React from 'react'
import TypeWriter from '../animation/TypeWriter'
import Content from './Content'
import ButtonContainer from './ButtonContainer'
import Projects from '../projects/Projects'
import ContactMe from '../animation/ContactMe';
import About from '../about/About'
import Skills from '../skills/Skills'

export default function HomePage({ projects }) {

    return (
        <>
            <section aria-label="hero-section" className="w-full h-full md:h-[600px] shadow-md bg-black/50 relative">

                {/* ------------------Hero Image-------------------------------------  */}
               
                <img
                    src="/hero-image.jpg"
                    alt="Banner image"
                    width={680}
                    height={900} 
                    // priority="true" // React/HTML doesn't support priority on img tag usually (Next/Image does)
                    id='laptop-hero-image'
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                
                {/* ------------------Hero Image-------------------------------------  */}
                <TypeWriter />
            </section>
            <ButtonContainer />
            <Content />
            <About />
            <Skills />
            <Projects projects={projects} />
            <ContactMe />

        </>

    )
}
