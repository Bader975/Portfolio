import { Image,Text, SimpleGrid, Box, HStack, Link as ChakraLink, Button, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


export default function ContactMe() {

    const [showDiv, setShowDiv] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-100px 0px",
        threshold: 0
    });

    useEffect(() => {
        if (inView) {
            const timeoutId = setTimeout(() => {
                setShowDiv(true);
            }, 500); // Adjust the delay duration as needed
            return () => clearTimeout(timeoutId);
        }
    }, [inView])
    return (
        <>

            <SimpleGrid as="section" aria-label="contactMe-section"  w={"full"} h={"full"} columns={1} justifyItems="center" mx={"auto"} mt={10} p={10} >

                <Box ref={ref} w={["100%", "80%", "30%"]} h={"auto"}>
                    <motion.div
                        initial={{ translateX: "-100%", opacity: 0 }}
                        animate={{ translateX: inView ? "0%" : "-100%", opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Text as={"h1"} color={"#000"} mx={"auto"} textAlign={"center"} h={"auto"} fontWeight={"800"} fontSize={[20, 26]}>
                            Get to know me better through my Social Media platforms ⬇️
                        </Text>
                        <Image rounded={"xl"} loading={"lazy"} w={"100%"} h={"100%"} src="/mobile-marketing.svg" alt="Animated SVG" />
                    </motion.div>

                </Box>
                {/* -------------Social Buttons------------------- */}
                <Box as='footer'>
                    <HStack>
                        {/* -------------Linkedin------------------ */}
                        <ChakraLink href={"https://www.linkedin.com/in/bader-mohammad-al/"} isExternal>
                            <Button bg={"#2368A9"} _hover={{opacity:0.75}} color={"#fff"} leftIcon={<FaLinkedin />}>
                                Linkedin
                            </Button>
                        </ChakraLink>
                        {/* -------------Github----------------- */}
                        <ChakraLink href={"https://github.com/Bader975"} isExternal>
                            <Button colorScheme="gray"
                                color="white"
                                bg="gray.900"
                                _hover={{ bg: "gray.700" }}
                                _active={{ bg: "gray.800" }}
                                _focus={{ boxShadow: "outline" }} leftIcon={<FaGithub />}>
                                Github
                            </Button>
                        </ChakraLink>

                        {/* ------------Email-------------- */}
                        <ChakraLink href={"mailto:bader97alyami@hotmail.com"} isExternal >
                            <Button colorScheme="blue"
                                bg={"#0666E5"} color={"#fff"}
                                _hover={{ bg: "blue.500" }}
                                _active={{ bg: "gray.800" }}
                                _focus={{ boxShadow: "outline" }} leftIcon={<AiOutlineMail />}>
                                Email Me
                            </Button>
                        </ChakraLink>
                    </HStack>
                </Box>
            </SimpleGrid>

        </>
    )
}
