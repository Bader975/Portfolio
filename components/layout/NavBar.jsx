import { Box, Flex, IconButton, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from 'react';
import MobileNavBar from "./MobileNavBar";


export default function Navbar() {

  const [navBarTextColor, setNavBarTextColor] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const router = useRouter()

  if (typeof window == "object") {
    
    // added the padding for scrollin 
    const navbarHeight = document.querySelector('#navbar')?.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navbarHeight + "px");

    // Scroll handler
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // add delay to the scroll
      // setTimeout(()=>{

      
      if (scrollY >= 50 && scrollY <= 650) {

        setNavBarTextColor(true);
      } 
      else 
      {
        setNavBarTextColor(false);
      }
      // },1000)
    })

  }

  // Store The Hover Efffects  
  // color: navBarTextColor ? "#fff" : "#000"
  const HoverEfffects = {
    color: "#fff", opacity: 1, transform: "scale(1.0)", transition:
      "transform 0.5s", backgroundColor: "#637681"
  }

  // Function to know which link is active
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };


  return (
    <>

      <Box as="header" pos={"sticky"}
        boxShadow={"lg"} top={0} zIndex={5}>

        <Box as={"nav"} py={4} pb={5} id={"navbar"} bg={"transparent"} backdropFilter="blur(10px)"
          _backdropfilter="blur(5px)">

          <Flex>
            <Box>
              <IconButton
                aria-label="Menu"
                variant="black"
                color="white"
                size="lg"
                onClick={() => { router.pathname !== "/" && router.push("/") }}
              >
                {/* bg={!navBarTextColor ? "#fff" : null} */}
                <Image src={"/bm-logo-remove-bg.webp"} objectFit={"contain"} rounded={"xl"} w={120} h={100} mb={1} pt={1} bg={{ base: null, md: navBarTextColor ? "#F5F5F5" : null }} />
              </IconButton>
            </Box>


            <Box w={"auto"}>
              {/* The Color Of the Text Changing Dependenig on the ScrollY */}
              <Flex direction="row" spacing={5} justifyContent="center" fontSize={20} fontFamily="Inter" color={navBarTextColor ? "#fff" : "#000"} bg={"transparent"}>
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
                      opacity={0.9}
                      p={3}
                      bg={activeLink === 0 ? "#153243" : "none"}
                      color={activeLink === 0 && "#fff"}
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
                      bg={activeLink === 1 ? "#153243" : "none"}
                      color={activeLink === 1 && "#fff"}
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


                      bg={activeLink === 2 ? "#153243" : "none"}
                      color={activeLink === 2 && "#fff"}
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

                      bg={activeLink === 3 ? "#153243" : "none"}
                      color={activeLink === 3 && "#fff"}
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
      </Box>
    </>
  );
}





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

