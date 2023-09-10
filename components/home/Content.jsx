import { Box, Heading, SimpleGrid, Text, Spacer, Divider, Icon } from '@chakra-ui/react'
import React from 'react'
import { PiEngineFill } from 'react-icons/pi'
import { SiNextdotjs } from "react-icons/si";
export default function Content() {
    
    return (
        <>
            <SimpleGrid w={"full"} h={"full"} columns={1} mx={"auto"} pt={10} >
                {/* bg={bg} */}
                <Box color={"#000"} fontSize={[18, 20, 25]} textAlign={"center"} mx={"auto"}  p={5} pos={"static"} rounded={"xl"} w={["90%","80%"]}  shadow={"xl"} >
                    <Text>
                        Hi,👋
                    </Text>
                    <Spacer />
                    <Text display={"inline"}>
                        I'm so happy that you visited my Portfolio 😍,
                        My name is Bader Mohammad and I'm </Text><Text display="inline"  fontWeight={"600"} color="yellow.400">
                          {" "} JavaScript  
                    </Text>{" "}
                   {"  "} and {" "}
                    <Text display="inline" color="blue.200" fontWeight={"600"} mr={1}>
                        TypeScript {" "}
                    </Text>
                    <Text display={"inline"}>
                        Developer

                    </Text>

                </Box >


                <Box  mx={"auto"} p={[5,5]} w={["90%","80%"]} rounded={"xl"} shadow={"xl"} mt={10}>
                    <Text color="#000" my="auto" fontSize={[18, 20, 25]} opacity={0.9} textAlign="center" >
                        I used for this Project NEXT.js{" "}
                        <Icon as={SiNextdotjs} color="black.500" mr={1} /> Page Router,
                        NEXT.js is so powerful because of Server-side Rendering (SSR) and Search engine optimization (SEO){" "}
                        <Icon as={PiEngineFill} color="black.500"  mr={1} /> 
                        {/* <br/> The result? A seamless and performant web experience for visitors. */}
                    </Text>
                </Box>

            </SimpleGrid >


        </>
    )
}
