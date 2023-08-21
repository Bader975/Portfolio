import React from 'react'
import ImageComp from '../UI/ImageComp'
import { Box, Heading, Image, SimpleGrid, useColorMode, Button, useColorModeValue, Divider, Avatar, Text } from '@chakra-ui/react'

import { PiEngineFill } from 'react-icons/pi'
import { AiFillFire } from 'react-icons/ai'
const bg = "#00000080"
export default function Skill() {
    return (
        <>
            {/* Grid number 1 */}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} rounded={"xl"} mx={"auto"} pl={10} pr={10} spacingX={10} spacingY={10} id={"my-skills"}>

                <Box my={"auto"} mx={"auto"} p={5} bg={"#00000080"} rounded={"xl"} >
                    <Heading color={"#fff"} fontSize={[16, 20, 25]} opacity={"0.90"} textAlign={"left"} >
                        I used for this Project NEXT.js Page Router<Divider /> NEXT.js is so powerful becuse of Server-side Rendering (SSR) and Search engine optimization (SEO) <PiEngineFill color='lightblue' style={{ display: "inline" }} />
                    </Heading>
                </Box>
                {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://img-c.udemycdn.com/course/750x422/3873464_403c.jpg"} /> */}
                <Box bg={bg} rounded={"xl"} my={"auto"} >

                    <ImageComp image={"https://img-c.udemycdn.com/course/750x422/3873464_403c.jpg"} />
                </Box>

                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} h={"90%"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        For Sure React.js reuseble components
                    </Heading>
                </Box>
                {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"} /> */}
                <Box bg={bg} rounded={"xl"} my={"auto"} >
                    <ImageComp image={"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"} />
                </Box>


            </SimpleGrid>


            {/* Grid number 2 */}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} rounded={"xl"} mx={"auto"} pl={10} pr={10} spacingX={10} spacingY={5} mt={10} >
                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} h={"90%"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        node js for all things
                    </Heading>
                </Box>
                <Box bg={bg} rounded={"xl"} my={"auto"} >

                    {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"} /> */}
                    <ImageComp image={"https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"} />
                </Box>

                <Box my={"auto"} mx={"auto"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 24]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                        Last But not Least The King and Monster Of Web devlobment<Image mx={"auto"} rounded={"xl"} mixBlendMode={"darken"} src='https://media.istockphoto.com/id/1159980027/fr/vectoriel/t%C3%AAte-de-dragon-sur-le-fond-en-pierre.jpg?s=170667a&w=0&k=20&c=JB3i8tl0tu3_yY67fRTu0DAXPbUOtav2k6KEwjGrTcA=' />
                        <Text display={"inline"} fontStyle={"italic"} color={"yellow.200"}>JavaScript</Text> It is responsible for the interaction of the application with the user and all events such as (Click and Touch) and in NEXT.JS it Optimize the App and optimizes all the images and tools used to make the website load faster<AiFillFire color='yellow' size={"2rem"} />
                    </Heading>
                </Box>

                <Box bg={bg} rounded={"xl"} my={"auto"} h={"60%"}>
                    {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} /> */}
                    <ImageComp image={"https://miro.medium.com/v2/resize:fit:1200/1*yUNfohs9jA6GCDmyCYJTvA@2x.png"} />
                </Box>
            </SimpleGrid>



        </>
    )
}
