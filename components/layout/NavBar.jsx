import { Box, Flex, Spacer, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";



function Navbar() {
  const router = useRouter()
  let backgroundMode=true;

  return (
    <>

      <Box as={"nav"} py={4} px={6} pb={5} bg={"#fff"}color={"#0000"} pos={"sticky"} shadow={"lg"} top={0} zIndex={2} >
        <Flex alignItems="center">
          <Box>
            <IconButton
              icon={<AiOutlineHome size={"2rem"} color={"#000"} />}
              aria-label="Menu"
              variant="balck"
              color="balck"
              size="md"
              mr={2}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            />

          </Box>
          <Box flex="1" color="balck" >

          </Box>
          <Spacer />
          <Box>
            {/* <Text color="white" display={"inline"} bg={"#00000080"} rounded={"xl"} p={5}> Toggle Mode To {backgroundMode ? <u>Night</u> : <u>Day</u>}</Text> */}
            <IconButton
              icon={backgroundMode ? <MoonIcon boxSize={"1.5rem"} color={"#000"} /> : <SunIcon boxSize={"1.5rem"} color={"#000"} />}
              aria-label="Toggle Dark Mode"
              variant="white"
              color="balck"
              // onClick={ toggleBackground}
              size="md"

            />

          </Box>
        </Flex >
      </Box >
    </>
  );
}

export default Navbar;