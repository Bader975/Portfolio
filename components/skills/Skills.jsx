import React from 'react'
import { Box, Heading, Text, VStack, Divider, SimpleGrid } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNpm, FaGit } from "react-icons/fa";
import { SiChakraui, SiJavascript, SiTypescript, SiNextdotjs, SiMysql, SiPrisma, SiExpress } from "react-icons/si";



export default function Skills() {


   
    return (


        <Box p={8} fontFamily="Montserrat" pt={[100, 120]} pb={0} id="skills">
            <Heading as="h1" fontSize="2xl" mb={4}>
                Skills
            </Heading>
            <Divider />
            <Text fontSize={[16, 20]} mt={1}>
                Here are some of the key technologies and tools I work with:
            </Text>
            <SimpleGrid w={"full"} h={"full"} textAlign={"center"} fontSize={24} columns={[2, 2, 5]} mt={10} spacing={10} px={[5, 10, 50]}>

                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8} >
                    <FaHtml5 color="#E34F26" size={50} />
                    <Divider />
                    <Text as="span">HTML</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaCss3 color="#2965F1" size={50} />
                    <Divider />
                    <Text as="span">CSS</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaBootstrap color="#7952B3" size={50} />
                    <Divider />
                    <Text as="span">Bootstrap</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiChakraui color="#319795" size={50} />
                    <Divider />
                    <Text as="span">Chakra UI</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiJavascript color="#F7DF1E" size={50} />
                    <Divider />
                    <Text as="span">JavaScript</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiTypescript color="#3178C6" size={50} />
                    <Divider />
                    <Text as="span">TypeScript</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaReact color="#61DAFB" size={50} />
                    <Divider />
                    <Text as="span">React.js</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiNextdotjs color="#000000" size={50} />
                    <Divider />
                    <Text as="span">Next.js</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaNodeJs color="#339933" size={50} />
                    <Divider />
                    <Text as="span">Node.js</Text>
                </VStack>

                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiExpress color="#000000" size={50} />
                    <Divider />
                    <Text as="span">Express.js</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaDatabase color="#4479A1" size={50} />
                    <Divider />
                    <Text as="span">MySQL</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <SiPrisma color="#1B222D" size={50} />
                    <Divider />
                    <Text as="span">Prisma</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaNpm color="#CB3837" size={50} />
                    <Text as="span">npm</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={8}>
                    <FaGit color="#F05032" size={50} />
                    <Divider />
                    <Text as="span">Git</Text>
                </VStack>




            </SimpleGrid>
        </Box >

    )
}
