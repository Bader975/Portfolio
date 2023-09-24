import React from 'react'
import { Box, Heading, Text, VStack, Divider, SimpleGrid ,useBreakpointValue} from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNpm, FaGit, FaChartBar } from "react-icons/fa";
import { SiChakraui, SiJavascript, SiTypescript, SiNextdotjs, SiMysql, SiJquery, SiPrisma, SiExpress, SiRedux } from "react-icons/si";



export default function Skills() {

    const iconSize = useBreakpointValue({ base: 30, md: 40 });
    const boxSize = useBreakpointValue({ base: 4, md: 4 });
    
    return (


        <Box p={boxSize} fontFamily="Montserrat" pt={[100, 120]} pb={0} id="skills">
            <Heading as="h1" fontSize="2xl" mb={4}>
                Skills
            </Heading>
            <Divider />
            <Text fontSize={[16, 20]} mt={1}>
                Here are some of the key technologies and tools I work with:
            </Text>
            <SimpleGrid w={"full"} h={"full"} textAlign={"center"} fontSize={24} columns={[2, 2, 3,4, 5]} mt={10} spacing={10} px={[5, 10, 50]}>

                <VStack spacing={2} boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize} >
                    <FaHtml5 color="#E34F26" size={iconSize} />
                    <Divider />
                    <Text as="span">HTML</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaCss3 color="#2965F1" size={iconSize} />
                    <Divider />
                    <Text as="span">CSS</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaBootstrap color="#7952B3" size={iconSize} />
                    <Divider />
                    <Text as="span">Bootstrap</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiChakraui color="#319795" size={iconSize} />
                    <Divider />
                    <Text as="span">Chakra UI</Text>
                </VStack>

                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded="md" p={boxSize}>
                    <FaChartBar color="#FF6384" size={iconSize} />
                    <Divider />
                    <Text as="span">Chart.js</Text>
                </VStack>

                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded="md" p={boxSize}>
                    <SiJquery color="#0868AC" size={iconSize} />
                    <Divider />
                    <Text as="span">jQuery</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiJavascript color="#F7DF1E" size={iconSize} />
                    <Divider />
                    <Text as="span">JavaScript</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiTypescript color="#3178C6" size={iconSize} />
                    <Divider />
                    <Text as="span">TypeScript</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaReact color="#61DAFB" size={iconSize} />
                    <Divider />
                    <Text as="span">React.js</Text>
                </VStack>
                <VStack
                    spacing={2}
                    boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
                    rounded="md"
                    p={boxSize}
                >
                    <SiRedux size={iconSize} color="#764abc" />
                    <Divider />
                    <Text>Redux Toolkit</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiNextdotjs color="#000000" size={iconSize} />
                    <Divider />
                    <Text as="span">Next.js</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaNodeJs color="#339933" size={iconSize} />
                    <Divider />
                    <Text as="span">Node.js</Text>
                </VStack>

                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiExpress color="#000000" size={iconSize} />
                    <Divider />
                    <Text as="span">Express.js</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaDatabase color="#4479A1" size={iconSize} />
                    <Divider />
                    <Text as="span">MySQL</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiPrisma color="#1B222D" size={iconSize} />
                    <Divider />
                    <Text as="span">Prisma</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaNpm color="#CB3837" size={iconSize} />
                    <Text as="span">npm</Text>
                </VStack>


                <VStack spacing={2} boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaGit color="#F05032" size={iconSize} />
                    <Divider />
                    <Text as="span">Git</Text>
                </VStack>




            </SimpleGrid>
        </Box >

    )
}
