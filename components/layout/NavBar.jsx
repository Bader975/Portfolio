import { Box, Flex, IconButton, Image, Slide, useDisclosure, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";


function Navbar() {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure();

  // Store The Hover Efffects  
  const HoverEfffects = {
    color: "#000", opacity: 1, transform: "scale(1.1)", transition:
      "transform 0.5s"
  }


  // Mobile My Projects Handler

  // function handleMyProjecsClick() {
  //   onToggle();
  //   if (router.pathname !== "/") {
  //     router.push("/");
  //   } else {
  //     router.push(`/#my-projects`)
  //   }
  // };

  return (
    <>

      <Box as={"nav"} py={4} px={[0, 5]} pb={5} bg={"#fff"} backdropFilter="blur(10px)"
        _backdropfilter="blur(5px)" color={"#0000"} pos={"sticky"}
        boxShadow={"lg"} top={0} zIndex={5} >
        <Flex>
          <Box ml={-20}>
            <IconButton
              aria-label="Menu"
              variant="balck"
              color="black"
              size="lg"
              ml={5}
              mixBlendMode={"darken"}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            >
              <Image src={"/bm-logo-remove-bg.png"} objectFit={"contain"} w={200} h={100} pb={2} pt={1} />
            </IconButton>
          </Box>


          <Box w={"auto"}>
            <Flex direction="row" spacing={5} justifyContent="center" fontWeight={"500"} bg={"#fff"}>
              {/* Mobile Menu */}
              <IconButton
                icon={<HamburgerIcon boxSize={6} />}
                aria-label="Mobile Menu"
                variant={"outline"}
                display={{ base: "block", md: "none" }}
                onClick={onToggle}
                border={"none"}
                ms={{ base: "180", sm: "300", lg: "100" }}
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
              {/* Mobile Links */}
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
                      _hover={HoverEfffects}
                      as="p"
                      color="#153243"
                      onClick={() => {
                        onToggle();
                        // router.pathname !== "/" ? router.push("/") : router.push(`/#my-projects`)
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
                      _hover={HoverEfffects}
                      rounded="xl"
                      color="#000"
                      opacity={0.9}
                      as="p"
                      p={2}
                      fontSize={18}
                      onClick={() => {
                        onToggle();
                        // router.push("/cv");
                      }}
                    >
                      Take a look at my CV
                    </ChakraLink>
                  </Link>

                  <Link href={router.pathname !== "/" ? "/" : "/#about"} passHref>
                    <ChakraLink
                      _hover={HoverEfffects}
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
              {/* The HOME PAGE */}
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


              {/* Desktop Menu */}
              <Flex
                direction="row"
                spacing={5}
                alignItems="center"
                display={{ base: "none", md: "flex" }}
              >

                <Link href={router.pathname !== "/" ? "/" : "/#my-projects"} passHref>
                  <ChakraLink
                    _hover={HoverEfffects}
                    color="#153243"
                    as="p"
                    // onClick={() => router.pathname == "/" ? router.push(`/#my-projects`) : router.push("/")}
                    rounded="xl"
                    fontSize={18}
                    opacity={0.9}
                    p={5}
                  >
                    {router.pathname !== "/" ? "Home" : "My Projects "}
                  </ChakraLink>
                </Link>

                <Link href="/cv" passHref>
                  <ChakraLink
                    _hover={HoverEfffects}
                    as="p"
                    rounded="xl"
                    color="#000"
                    opacity={0.9}
                    p={5}
                    fontSize={18}
                  // onClick={() => router.push("/cv")}
                  >
                    Take a look at my CV link
                  </ChakraLink>
                </Link>

                <Link href={router.pathname !== "/" ? "/" : "/#about"} passHref>
                  <ChakraLink
                    _hover={HoverEfffects}
                    rounded="xl"
                    as="p"
                    color="#000"
                    opacity={0.9}
                    p={5}
                    fontSize={18}
                    // onClick={() => {
                    //   router.push("/")
                 
                    // }}
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