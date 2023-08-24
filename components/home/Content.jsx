import { Box, Heading, Image, SimpleGrid, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';
export default function Content() {

    return (
        <>
            <SimpleGrid w={"full"} h={"full"} columns={1} mx={"auto"} pt={10} >
                {/* Fist Card *1 */}
                <motion.div
                    initial={{ opacity: 0 }} // Set initial opacity to 0
                    animate={{ opacity: 1 }} // Animate opacity to 1
                    transition={{ duration: 2.5 }} // Set the transition duration
                    style={{ marginBottom: "auto" }}
                >
                    <Image w={["50%", "60%", "30%"]} h={"60%"} maxH={"90%"} src="/Astronaut suit.gif" alt="Animated GIF" />
                   
                </motion.div>

                <Box mx={"auto"} p={6} pos={"static"} rounded={"3xl"} w={"auto"} shadow={"2xl"} maxH={"80%"}>
                    <Heading color={"#fff"} p={5} fontSize={[18, 20, 25]} textAlign={"center"}>
                        Hello,
                        <Spacer />
                        I'm so happy that you visited my Portfolio
                        My name is Bader Mohammad <Text display={"inline"} fontStyle={"italic"} color={"yellow.200"}>JavaScript</Text> and <Text display={"inline"} fontStyle={"italic"} color={"blue.200"} fontWeight={"bold"} mr={1}>TypeScript</Text>
                        Developer
                    </Heading>
                </Box>

                {/* Fist Card *2 */}
                {/* bg={bg} */}


                {/* <Box mx={"auto"} p={6} pos={"static"} rounded={"xl"} w={"auto"} maxH={"80%"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"}>
                        I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                    </Heading>
                    <Image rounded={"xl"} mixBlendMode={"color-burn"} boxShadow={"xl"} mt={5} w={"full"} h={"full"} maxH={"70%"} src='https://img.freepik.com/free-vector/isometric-mars-illustration-with-rocket-mars-two-astronaut-set-flag-illustration_1284-60256.jpg?w=996&t=st=1692214117~exp=1692214717~hmac=74b7c78f4365604712c20805cff7b8e0e8335cf2a084f04f44d49ca5e6ca9678' />
                </Box> */}

            </SimpleGrid>
        </>
    )
}
