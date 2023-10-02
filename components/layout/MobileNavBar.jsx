import React, { useRef } from 'react';
import { Flex, IconButton, Slide, Divider, useDisclosure, Link as ChakraLink, useOutsideClick } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function MobileNavBar() {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const router = useRouter();
    const menuRef = useRef();
    const HamburgerIconRef = useRef();


    const slieStyles = {
        width: '100%',
        textAlign: 'center',
        height: '50%',
        /* background: 'rgba(255, 255, 255, 0.86)', */
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(3px)',
        webkitBackdropFilter: 'blur(3px)',
        /* border: '1px solid rgba(255, 255, 255, 0.27)', */
        border: '1px solid #0000',
    };

    function closeMenu() {

        if (isOpen) {
            onToggle();
        }

    };


    const handleMenuIconClick = () => {
        onToggle();
    };


    // useOutsideClick({
    //     ref: menuRef,
    //     handler: closeMenu
    // });


    useOutsideClick({
        ref: HamburgerIconRef,
        handler: closeMenu
    });




    return (
        <>



            <IconButton
                icon={isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={6} />}
                aria-label="Mobile Menu"
                ref={HamburgerIconRef}
                variant={"outline"}
                display={{ base: "block", md: "none" }}
                onClick={handleMenuIconClick}
                border={"none"}
                ms={{ base: "200", sm: "300", lg: "100" }}
                zIndex={"99"}
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

            {/* {isOpen && ( */}
            {/* style={`${isOpen ? ...slieStyles : null}`} */}
            <Slide direction="top" in={isOpen} backdropFilter="blur(10px)"  >
                <Flex
                    // ref={menuRef}
                    direction="column"
                    mt={14}
                    bg="white"
                    // id={"menu-slide"}
                    p={4}
                    gap={5}
                    ms={"auto"}
                    h={isOpen ? "90%" : "auto"}
                    mr={2}
                    // w={"50%"}
                    rounded="md"

                    // boxShadow="md"
                    pos={"relative"}
                    zIndex={"99"}
                    display={isOpen && { base: "block", md: "none" }}




                >
                    <Link href={router.pathname !== "/" ? "/" : "/#my-projects"} passHref>
                        <ChakraLink
                            as="p"
                            color="#000"
                            onClick={closeMenu}
                            rounded="xl"
                            fontSize={20}

                            p={2}
                        >
                            {router.pathname !== "/" ? "Home" : "My Projects "}
                        </ChakraLink>
                    </Link>
                    <Divider colorScheme="black" />
                    <Link href="/cv" passHref>
                        <ChakraLink
                            rounded="xl"
                            color="#000"

                            as="p"
                            p={2}
                            fontSize={20}
                            onClick={closeMenu}
                        >
                            Take a look at my CV
                        </ChakraLink>
                    </Link>
                    <Divider colorScheme="black" />
                    <Link href={router.pathname !== "/" ? "/" : "/#skills"} passHref>
                        <ChakraLink
                            rounded="xl"
                            as="p"
                            color="#000"

                            link="/"
                            p={2}
                            fontSize={20}
                            onClick={closeMenu}
                        >
                            My Skills
                        </ChakraLink>
                    </Link>
                    <Divider colorScheme="black" />
                    <Link href={router.pathname !== "/" ? "/" : "/#about"} passHref>
                        <ChakraLink
                            rounded="xl"
                            as="p"
                            color="#000"

                            link="/"
                            p={2}
                            fontSize={20}
                            onClick={closeMenu}
                        >
                            About Me
                        </ChakraLink>
                    </Link>
                    <Divider colorScheme="black" />
                </Flex>
            </Slide>



        </>
    )
}