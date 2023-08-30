import { Box, Heading, Image, SimpleGrid, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Content() {
const textColor="#fff"
const bg = "#00000080"
    return (
        <>
            <SimpleGrid w={"full"} h={"full"} columns={1} mx={"auto"} pt={10} >
                {/* Fist Card *1 */}
                {/* <motion.div
                    // initial={{ opacity: 0 }} // Set initial opacity to 0
                    initial={{ translateY: "-100%" }} // Set initial opacity to 0
                    // animate={{ opacity: 1 }} // Animate opacity to 1
                    animate={{ translateY: "0%" }} // Animate opacity to 1
                    transition={{ duration: 2.5 }} // Set the transition duration
                    style={{ marginBottom: "auto" }} */}
                {/* > */}
                    {/* <Image w={["50%", "60%", "30%"]} h={"60%"} maxH={"90%"} src="/Astronaut suit.gif" alt="Animated GIF" /> */}
                    {/* <Image w={["50%", "60%", "30%"]} h={"60%"} maxH={"90%"} src="/astronaut-suit-animate.svg" alt="Animated SVG" /> */}
                {/* </motion.div> */}

                <Box mx={"auto"} p={6} pos={"static"} bg={bg} rounded={"3xl"} w={"80%"} shadow={"2xl"} maxH={"90%"}>
                    <Heading color={textColor} p={5} fontSize={[18, 20, 25]} textAlign={"center"}>
                        Hello,
                        <Spacer />
                        I'm so happy that you visited my Portfolio
                        My name is Bader Mohammad <Text display={"inline"} fontStyle={"italic"} color={"yellow.200"}>JavaScript</Text> and <Text display={"inline"} fontStyle={"italic"} color={"blue.200"} fontWeight={"bold"} mr={1}>TypeScript</Text>
                        Developer
                    </Heading>
                </Box>

            </SimpleGrid>
            {/* Grid 2  */}
           
        </>
    )
}
