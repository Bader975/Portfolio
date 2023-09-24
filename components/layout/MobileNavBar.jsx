import React from 'react'
import { Flex, IconButton, Slide, useDisclosure, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileNavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const router = useRouter()
   

    return (
        <>
            <IconButton
                icon={<HamburgerIcon boxSize={6} />}
                aria-label="Mobile Menu"
                variant={"outline"}
                display={{ base: "block", md: "none" }}
                onClick={onToggle}
                border={"none"}
                ms={{ base: "200", sm: "300", lg: "100" }}
                zIndex={isOpen ? "99" : "1"}
                css={`
          background-color: transparent;
          &:hover {
            background-color: transparent;
          }
          &:active {
            background-color: #97A3AB;
          }
        `}
            />

            <Slide direction="top" in={isOpen}>
                <Flex
                    direction="column"
                    mt={10}
                    bg="white"
                    p={4}
                    ms={"auto"}
                    w={"50%"}
                    rounded="md"
                    boxShadow="md"
                    zIndex={isOpen ? "98" : "-1"} // Adjust the z-index value
                    visibility={isOpen ? "visible" : "hidden"}
                    opacity={isOpen ? 1 : 0}
                    transform={`translateY(${isOpen ? "0" : "-100%"})`}
                    transition="transform 0.5s ease-in-out, opacity 0.3s ease-in-out"
                >
                    <Link href={router.pathname !== "/" ? "/" : "/#my-projects"} passHref>
                        <ChakraLink

                            as="p"
                            color="#153243"
                            onClick={() => {
                                onToggle();
                              
                            }}
                            rounded="xl"
                            fontSize={18}
                            opacity={0.9}
                            p={2}
                        >
                            {router.pathname !== "/" ? "Home" : "My Projects "}
                        </ChakraLink>
                    </Link>

                    <Link href="/cv" passHref>
                        <ChakraLink

                            rounded="xl"
                            color="#000"
                            opacity={0.9}
                            as="p"
                            p={2}
                            fontSize={18}
                            onClick={() => {
                                onToggle();
                                
                            }}
                        >
                            Take a look at my CV
                        </ChakraLink>
                    </Link>
                    <Link href={router.pathname !== "/" ? "/" : "/#skills"} passHref>
                        <ChakraLink

                            rounded="xl"
                            as="p"
                            color="#000"
                            opacity={0.9}
                            link="/"
                            p={2}
                            fontSize={18}
                            onClick={() => {
                                onToggle();
                              
                            }}
                        >
                            My Skills
                        </ChakraLink>
                    </Link>

                    <Link href={router.pathname !== "/" ? "/" : "/#about"} passHref>
                        <ChakraLink

                            rounded="xl"
                            as="p"
                            color="#000"
                            opacity={0.9}
                            link="/"
                            p={2}
                            fontSize={18}
                            onClick={() => {
                                onToggle();
                                // router.push("/about");
                            }}
                        >
                            About Me
                        </ChakraLink>
                    </Link>

                </Flex>
            </Slide>
        </>
    )
}
