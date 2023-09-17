import { Box, Heading, Text, Image, Divider, SimpleGrid } from "@chakra-ui/react";
import React from 'react';


export default function About() {
    return (
        <>
            <Box p={8} id="about" pt={[100, 120]} fontSize="lg" >
                <Heading as="h1" fontSize="2xl" mb={3}  >
                    About Me
                </Heading>
                <Divider />
                <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} mt={5}>
                    <Box ml={[0, 5]}>
                        <Image src="/bader-dressed-saudi.webp" alt="Bader Mohammad" mb={4} w={"full"} h={"full"} clipPath={"circle(50%)"} boxSize={["300px", "450px"]} />
                    </Box>
                    <Box textAlign={"left"} w={["100%", "90%"]} lineHeight={"1.9"}>

                        <Text fontSize="xl" fontWeight="bold" mb={1} >
                            Hi, I'm Bader Mohammad!
                        </Text>
                        <Text>
                            I'm full-stack web developer specializing in  <Text as="span" fontWeight="bold">JavaScript</Text> , <Text as="span" fontWeight="bold">TypeScript</Text>  ,
                            I strive to create innovative and high-quality web applications. My focus is on delivering exceptional user experiences
                            through clean code and efficient solutions 💡.
                        </Text>
                        <Text mt={4} >
                            With expertise in front-end development
                            using modern frameworks like <Text as="span" fontWeight="bold" m>React</Text>  and
                            <Text as="span" fontWeight="bold" ml={1}>Next.js</Text>, I excel at crafting intuitive
                            and responsive user interfaces. On the back-end, I specialize in building robust
                            APIs and server-side applications using <Text as="span" fontWeight="bold" mr={1}>Node.js</Text>
                            and <Text as="span" fontWeight="bold">Express.js</Text>.
                        </Text>
                        <Text mt={4} >
                            If you have a project that you'd like to discuss or if you're interested in
                            collaborating, feel free to reach out to me. Let's work together to 🚀
                            bring your ideas to life!
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>

        </>
    )
}


