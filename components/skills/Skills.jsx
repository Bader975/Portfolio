import React from 'react'
import { Box, Heading, Text, UnorderedList, Flex,  HStack, Divider } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNpm, FaGit } from "react-icons/fa";
import { SiChakraui, SiJavascript, SiTypescript, SiNextdotjs, SiMysql, SiPrisma, SiExpress } from "react-icons/si";
{/* <SiJavascript style={{display:"inline",color:"#F0E68C",fontSize:"28px"}} /> */ }
{/* <SiTypescript style={{display:"inline",color:"#4682B4",fontSize:"28px"}} />
<FaReact style={{display:"inline",color:"#4682B4",fontSize:"28px"}} /> */}
{/* <FaNodeJs style={{display:"inline",color:"#ADFF2F",fontSize:"28px"}} /> */ }


export default function Skills() {


    const iconSize = 30
    return (
        <>

            <Box p={8} mt={5} fontFamily="Montserrat" pb={0}>
                <Heading as="h2" size="lg" mb={4}>
                    Skills
                </Heading>
                <Divider />
                <Text fontSize={[16, 18]}>
                    Here are some of the key technologies and tools I work with:
                </Text>
                <Flex
                    mt={4}
                    fontSize={20}
                    flexWrap="wrap"
                    gap={8}
                    justifyContent={["space-evenly","center"]}
                    // justifyContent={"space-evenly"}
                    alignContent={"center"}
                    alignItems={"center"}
                    // flexDirection={["column","row"]}
                    flexDirection={"row"}
                >
                    {/* <UnorderedList mt={4} fontSize={20} spacing={2} listStyleType="none"> */}
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaHtml5 color="#E34F26" size={24} />
                                <Text as="span">HTML</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaCss3 color="#2965F1" size={24} />
                                <Text as="span">CSS</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaBootstrap color="#7952B3" size={24} />
                                <Text as="span">Bootstrap</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiChakraui color="#319795" size={24} />
                                <Text as="span">Chakra UI</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiJavascript color="#F7DF1E" size={24} />
                                <Text as="span">JavaScript</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiTypescript color="#3178C6" size={24} />
                                <Text as="span">TypeScript</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaReact color="#61DAFB" size={24} />
                                <Text as="span">React.js</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiNextdotjs color="#000000" size={24} />
                                <Text as="span">Next.js</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaNodeJs color="#339933" size={24} />
                                <Text as="span">Node.js</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaDatabase color="#4479A1" size={24} />
                                <Text as="span">MySQL</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiPrisma color="#1B222D" size={24} />
                                <Text as="span">Prisma</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaNpm color="#CB3837" size={24} />
                                <Text as="span">npm</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <FaGit color="#F05032" size={24} />
                                <Text as="span">Git</Text>
                            </HStack>
                        </>
                        <>
                            <HStack spacing={2} boxShadow={"2xl"} rounded={"2xl"} p={2}>
                                <SiExpress color="#000000" size={24} />
                                <Text as="span">Express.js</Text>
                            </HStack>
                        </>
                    {/* </UnorderedList> */}
                </Flex>
            </Box >
        </>
    )
}
