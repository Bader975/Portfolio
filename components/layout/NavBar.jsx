import { Box, Flex, IconButton, Image,Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";


function Navbar() {
  const router = useRouter()


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

      <Box as={"nav"} py={4} px={[0, 5]} pb={5} bg={"transparent"} backdropFilter="blur(10px)"
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
              // mixBlendMode={"darken"}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            >
              <Image src={"/bm-logo-remove-bg.png"} objectFit={"contain"} w={200} h={100} pb={2} pt={1} />
            </IconButton>
          </Box>


          <Box w={"auto"}>
            <Flex direction="row" spacing={5} justifyContent="center" fontWeight={"500"} bg={"transparent"}>
              {/* Mobile Menu */}
                  <MobileNavBar/>
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
                    _hover={HoverEfffects}
                    color="#153243"
                    as="p"
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

                  >
                    Take a look at my CV 
                  </ChakraLink>
                </Link>

                <Link href={router.pathname !== "/" ? "/" : "/#skills"} passHref>
                  <ChakraLink
                    _hover={HoverEfffects}
                    rounded="xl"
                    as="p"
                    color="#000"
                    opacity={0.9}
                    p={5}
                    fontSize={18}
                  >
                    My Skills
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

