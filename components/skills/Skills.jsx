import React, { useState } from 'react'
import { Box, Text, VStack, Divider, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNpm, FaGit, FaChartBar } from "react-icons/fa";
import { SiChakraui, SiJavascript, SiTypescript, SiNextdotjs, SiJquery, SiPrisma, SiExpress, SiRedux } from "react-icons/si";

// import { motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";


export default function Skills() {

    const iconSize = useBreakpointValue({ base: 30, md: 40 });
    const boxSize = useBreakpointValue({ base: 4, md: 5 });


    // const [ref, inView] = useInView({
    //     triggerOnce: false,
    //     rootMargin: "-100px 0px",
    //     threshold: 0
    // });

// old padding 
    // pt={[100, 120]}
    return (

       

        <Box as="section" aria-label="skills-section" p={5} pt={[70, 100]} pb={0} id="skills">
            <Text as="h1" fontWeight={"bold"} fontSize={[24, 30]} mb={4}>
                Skills
            </Text>
            <Divider />
            <Text fontSize={[18, 20]} mt={1}>
                Here are some of the key technologies and tools I work with:
            </Text>
            {/* <div ref={ref}>
                <h2>{`Header inside viewport ${inView}.`}</h2>
            </div> */}
            {/* <Box ref={ref} h={"auto"}>
                <motion.div
                    initial={{ translateY: "0%", opacity: 0 }}
                    animate={{ translateY: inView ? "0%" : "-50%", opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}

                > */}
            <SimpleGrid w={"full"} h={"full"} textAlign={"center"} fontSize={24} columns={[2, 2, 3, 4, 5]} mt={10} spacing={10} px={[5, 50, 100]}>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize} >
                    <FaHtml5 color="#E34F26" size={iconSize} />
                    <Divider />
                    <Text as="span">HTML</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaCss3 color="#2965F1" size={iconSize} />
                    <Divider />
                    <Text as="span">CSS</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaBootstrap color="#7952B3" size={iconSize} />
                    <Divider />
                    <Text as="span">Bootstrap</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiChakraui color="#319795" size={iconSize} />
                    <Divider />
                    <Text as="span">Chakra UI</Text>
                </VStack>

                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded="md" p={boxSize}>
                    <FaChartBar color="#FF6384" size={iconSize} />
                    <Divider />
                    <Text as="span">Chart.js</Text>
                </VStack>

                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded="md" p={boxSize}>
                    <SiJquery color="#0868AC" size={iconSize} />
                    <Divider />
                    <Text as="span">jQuery</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiJavascript color="#F7DF1E" size={iconSize} />
                    <Divider />
                    <Text as="span">JavaScript</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiTypescript color="#3178C6" size={iconSize} />
                    <Divider />
                    <Text as="span">TypeScript</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaReact color="#61DAFB" size={iconSize} />
                    <Divider />
                    <Text as="span">React.js</Text>
                </VStack>
                <VStack
                    spacing={2} minH={"150px"}
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                    rounded={"md"}
                    p={boxSize}
                >
                    <SiRedux size={iconSize} color="#764abc" />
                    <Divider />
                    <Text as="span">Redux Toolkit</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiNextdotjs color="#000000" size={iconSize} />
                    <Divider />
                    <Text as="span">Next.js</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaNodeJs color="#339933" size={iconSize} />
                    <Divider />
                    <Text as="span">Node.js</Text>
                </VStack>

                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiExpress color="#000000" size={iconSize} />
                    <Divider />
                    <Text as="span">Express.js</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaDatabase color="#4479A1" size={iconSize} />
                    <Divider />
                    <Text as="span">MySQL</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <SiPrisma color="#1B222D" size={iconSize} />
                    <Divider />
                    <Text as="span">Prisma</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaNpm color="#CB3837" size={iconSize} />
                    <Text as="span">npm</Text>
                </VStack>


                <VStack spacing={2} minH={"150px"} boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" rounded={"md"} p={boxSize}>
                    <FaGit color="#F05032" size={iconSize} />
                    <Divider />
                    <Text as="span">Git</Text>
                </VStack>


            </SimpleGrid>
            {/* </motion.div> */}
            {/* </Box> */}


        </Box >

    )
}
