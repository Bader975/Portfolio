import { Box, Flex, IconButton, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from 'react';
import MobileNavBar from "./MobileNavBar";


function Navbar() {
  const [navBarTextColor, setNavBarTextColor] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter()



  if (typeof window == "object") {

    window.addEventListener("scroll", () => {

      const scrollY = window.scrollY;

      if (scrollY >= 50 && scrollY <= 650) {
        setNavBarTextColor(true);

      } else {
        setNavBarTextColor(false);

      }

    })

  }

  // Store The Hover Efffects  
  const HoverEfffects = {
    color: navBarTextColor ? "#fff" : "#000", opacity: 1, transform: "scale(1.1)", transition:
      "transform 0.3s"
  }

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>

      <Box as={"nav"} py={4} pb={5} bg={"transparent"} backdropFilter="blur(10px)"
        _backdropfilter="blur(5px)" color={"#0000"} pos={"sticky"}
        boxShadow={"lg"} top={0} zIndex={5} >

        <Flex>

          <Box >
            <IconButton
              aria-label="Menu"
              variant="black"
              color="white"
              size="lg"
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            >
              <Image src={"/bm-logo-remove-bg.png"} objectFit={"contain"} w={200} h={100} pb={2} pt={1} />
            </IconButton>
          </Box>



          <Box w={"auto"}>
            {/* The Color Of the Text Changing Dependenig of the ScrollY */}
            <Flex direction="row" spacing={5} justifyContent="center" fontWeight={"500"} color={navBarTextColor ? "#fff" : "#000"} bg={"transparent"}>
              {/* Mobile Menu */}
              <MobileNavBar />
              {/* Mobile Links */}
              {/* Desktop Menu */}
              <Flex
                direction="row"
                spacing={5}
                alignItems="center"
                display={{ base: "none", md: "flex" }}
              >

                <Link href={router.pathname !== "/" ? "/" : "/#my-projects"} passHref>
                  <ChakraLink
                    _hover={activeLink !== 0 && HoverEfffects}
                    as="p"
                    rounded="xl"
                    fontSize={18}
                    opacity={0.9}
                    p={3}
                    bg={activeLink === 0 ? "#153243" : "none"}
                    color={activeLink === 0 ? "#fff" : "none"}
                    onClick={() => handleLinkClick(0)}

                  >
                    {router.pathname !== "/" ? "Home" : "My Projects "}

                  </ChakraLink>
                </Link>

                <Link href="/cv" passHref>
                  <ChakraLink
                    _hover={activeLink !== 1 && HoverEfffects}
                    as="p"
                    rounded="xl"
                    opacity={0.9}
                    p={3}
                    fontSize={18}
                    bg={activeLink === 1 ? "#153243" : "none"}
                    color={activeLink === 1 ? "#fff" : "none"}
                    onClick={() => handleLinkClick(1)}

                  >
                    Take a look at my CV
                  </ChakraLink>
                </Link>

                <Link href={router.pathname !== "/" ? "/" : "/#skills"} passHref>
                  <ChakraLink
                    _hover={activeLink !== 2 && HoverEfffects}
                    rounded="xl"
                    as="p"
                    opacity={0.9}
                    p={3}
                    fontSize={18}

                    bg={activeLink === 2 ? "#153243" : "none"}
                    color={activeLink === 2 ? "#fff" : "none"}
                    onClick={() => handleLinkClick(2)}
                  >
                    My Skills
                  </ChakraLink>
                </Link>

                <Link href={router.pathname !== "/" ? "/" : "/#about"} passHref>
                  <ChakraLink
                    _hover={activeLink !== 3 && HoverEfffects}
                    rounded="xl"
                    as="p"
                    opacity={0.9}
                    p={3}
                    fontSize={18}
                    bg={activeLink === 3 ? "#153243" : "none"}
                    color={activeLink === 3 ? "#fff" : "none"}
                    onClick={() => handleLinkClick(3)}
                  >
                    About Me
                  </ChakraLink>
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Flex >
      </Box >
    </>
  );
}

export default Navbar;



{/* The HOME PAGE */ }
{/* {router.pathname !== "/" && <Box color="balck" mx={"auto"}>
                <Button
                  aria-label="Menu"
                  variant="balck"
                  color="black"
                  fontSize={[16, 20]}
                  border={"1px"}
                  p={2}
                  shadow={"sm"}
                  rounded={"xl"}
                  onClick={() => { router.pathname !== "/" && router.push("/") }}
                >
                  HOME PAGE
                </Button>

              </Box>
              } */}

