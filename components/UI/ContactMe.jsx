import { Image, SimpleGrid, Box, HStack, Button, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
export default function ContactMe() {

    const [showDiv, setShowDiv] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "0px 0px", 
        threshold: 0
    });

    useEffect(() => {
        if (inView) {
            const timeoutId = setTimeout(() => {
                setShowDiv(true);
            }, 500); // Adjust the delay duration as needed
            return () => clearTimeout(timeoutId);
        }
    }, [inView]);
    return (
        <>

            <SimpleGrid w={"full"} h={"full"} columns={1} justifyItems="center" mx={"auto"} p={10} >
                <Heading color={"#fff"} mx={"auto"} textAlign={"center"} h={"auto"}>
                    Feel Free to Get in touch
                </Heading>
                <Box ref={ref} w={["100%", "80%", "30%"]} h={"auto"}>
                    <motion.div
                        initial={{ translateX: "-100%", opacity: 0 }}
                        animate={{ translateX: inView ? "0%" : "-100%", opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image rounded={"xl"} w={"100%"} h={"100%"} src="/mobile-marketing.svg" alt="Animated SVG" />
                    </motion.div>

                </Box>

                {/* -------------Social Buttons------------------- */}
                <Box>
                    <HStack>
                        {/* -------------Linkedin------------------ */}
                        <Link href={"https://www.linkedin.com/in/bader-mohammad-al/"} target='_blank' >
                            <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
                                Linkedin
                            </Button>
                        </Link>
                        {/* -------------Github----------------- */}
                        <Link href={"https://github.com/Bader975"} target='_blank' >
                            <Button colorScheme="gray"
                                color="white"
                                bg="gray.900"
                                _hover={{ bg: "gray.700" }}
                                _active={{ bg: "gray.800" }}
                                _focus={{ boxShadow: "outline" }} leftIcon={<FaGithub />}>
                                Github
                            </Button>
                        </Link>
                        {/* -------------3----------------- */}
                    </HStack>

                </Box>
            </SimpleGrid>

        </>
    )
}
