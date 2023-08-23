import { Box, Flex, Spacer, IconButton, useColorMode, useBoolean } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai';

import Video from "../animation/Video";
import { useRouter } from "next/router";
function Navbar() {
  const [BGtoggle, setBGtoggle] = useBoolean(false);
  const [isButtonDisabled, setIsButtonDisabled] = useBoolean(false);
  const [isButtonActive, setIsButtonActive] = useState(false)
  const router = useRouter()

  const mainTag = typeof document == "object" ? document.getElementById("main") : undefined

  function toggleBackground() {
    setIsButtonDisabled.on();
    setBGtoggle.toggle();
    setTimeout(() => {
      setIsButtonDisabled.off();

    }, 500); // Adjust the timeout value as needed
  }


  return (
    <>

      <Video toggleBG={BGtoggle} />
      <Box bg="transparent" py={4} px={6} pb={5} pos={"sticky"} top={0} zIndex={2} >
        <Flex alignItems="center">
          <Box>
            <IconButton
              icon={<AiOutlineHome size={"2rem"} />}
              aria-label="Menu"
              variant="white"
              color="white"
              size="md"
              mr={2}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            />

          </Box>
          <Box flex="1" color="white" >

          </Box>
          <Spacer />
          <Box>
            <IconButton
              icon={BGtoggle ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle Dark Mode"
              variant="white"
              color="white"
              bg="transparent"
              onClick={toggleBackground}
              size="md"
              isDisabled={isButtonDisabled}
              isActive={isButtonActive}

            />
          </Box>
        </Flex >
      </Box >
    </>
  );
}

export default Navbar;