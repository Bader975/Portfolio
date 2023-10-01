import React, { useRef } from 'react';
import { Flex, IconButton, Slide, useDisclosure, Link as ChakraLink, useOutsideClick } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function MobileNavBar() {
    const { isOpen, onToggle,onClose } = useDisclosure();
    const router = useRouter();
    const menuRef = useRef();
    const HamburgerIconRef = useRef();




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

            {/* {isOpen && ( */}

            <Slide direction="top" in={isOpen}>
                <Flex
                    // ref={menuRef}
                    direction="column"
                    mt={14}
                    bg="white"
                    p={4}
                    gap={5}
                    ms={"auto"}
                    mr={2}
                    w={"50%"}
                    rounded="md"
                    boxShadow="md"
                    pos={"relative"}
                    zIndex={"99"}
                display={{base: "block", md : "none"}}




                >
                    <Link href={router.pathname !== "/" ? "/" : "/#my-projects"} passHref>
                        <ChakraLink
                            as="p"
                            color="#000"
                            onClick={closeMenu}
                            rounded="xl"
                            fontSize={20}
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
                            fontSize={20}
                            onClick={closeMenu}
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
                            fontSize={20}
                            onClick={closeMenu}
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
                            fontSize={20}
                            onClick={closeMenu}
                        >
                            About Me
                        </ChakraLink>
                    </Link>
                </Flex>
            </Slide>



        </>
    )
}