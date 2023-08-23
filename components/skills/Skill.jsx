import React from 'react'
import ImageComp from '../UI/ImageComp'
import { Box, Heading, Image, SimpleGrid,  Divider,  Text } from '@chakra-ui/react'

import { PiEngineFill } from 'react-icons/pi'
import { AiFillFire } from 'react-icons/ai'
const bg = "#00000080"
export default function Skill() {
    return (
        <>
            {/* ---------------------------Grid number 1 ---------------*/}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} rounded={"xl"} mx={"auto"} pl={10} pr={10} spacingX={10} spacingY={10} id={"my-skills"}>

                <Box my={"auto"} mx={"auto"} p={5} bg={"#00000080"} rounded={"xl"} >
                    <Heading color={"#fff"} fontSize={[16, 20, 25]} opacity={"0.90"} textAlign={"left"} >
                        I used for this Project NEXT.js Page Router<Divider /> NEXT.js is so powerful becuse of Server-side Rendering (SSR) and Search engine optimization (SEO) <PiEngineFill color='lightblue' style={{ display: "inline" }} />
                    </Heading>
                </Box>
               
                <Box bg={bg} rounded={"xl"} my={"auto"} >

                    <ImageComp image={"/next-js.webp"}/>
                </Box>

                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} h={"90%"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        For Sure React.js reuseble components
                    </Heading>
                </Box>
                
                <Box bg={bg} rounded={"xl"} my={"auto"} >
                    <ImageComp image={"/react-js.webp"} />
                </Box>


            </SimpleGrid>


            {/*------------------ Grid number 2 ------------*/}

            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} rounded={"xl"} mx={"auto"} pl={10} pr={10} spacingX={10} spacingY={5} mt={10} >
                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} h={"90%"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        node js for all things
                    </Heading>
                </Box>
                <Box bg={bg} rounded={"xl"} my={"auto"} >

                    
                    <ImageComp image={"/node-js.webp"} />
                </Box>

                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 24]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        Last But not Least The King and Monster Of Web devlobment
                        <Image mx={"auto"} rounded={"xl"} w={"40%"} maxH={"30%"} my={2} mixBlendMode={"color-burn"} src='/monster.webp' />
                        <Text display={"inline"} fontStyle={"italic"} color={"yellow.200"}>JavaScript</Text> It is responsible for the interaction of the application with the user and all events such as (Click and Touch) and in NEXT.JS it Optimize the App and optimizes all the images and tools used to make the website load faster<AiFillFire color='yellow' size={"2rem"} />
                    </Heading>
                </Box>

                <Box bg={bg} rounded={"xl"} my={"auto"}  h={"60%"}>
                 
                    <ImageComp  image={"js.webp"} />
                </Box>
            </SimpleGrid>



        </>
    )
}
