import { Box, Flex, Spacer, IconButton, useColorMode, Avatar, Image, useBoolean } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai';

import Video from "../animation/Video";
import { useRouter } from "next/router";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const [BGtoggle, setBGtoggle] = useState(false)
  const [BGtoggle, setBGtoggle] = useBoolean(false);
  const [isButtonDisabled, setIsButtonDisabled] = useBoolean(false);
  const [isButtonActive, setIsButtonActive] = useState(false)
  const router = useRouter()
 
  const mainTag = typeof document == "object" ? document.getElementById("main") : undefined
  useEffect(() => {


    // if (BGtoggle) {

      // mainTag.style = " background-image: url(/banner8.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;";
    // } else {
      // mainTag.style.backgroundImage = "url(/banner4.jpg)";

    // }
  }, [toggleBackground, BGtoggle]);

  // function toggleBackground() {
  //   setBGtoggle(!BGtoggle);

  // }


  const handleMouseDown = () => {
    setIsButtonActive(true);
  };

  const handleMouseUp = () => {
    setIsButtonActive(false);
  };
  function toggleBackground() {
    setIsButtonDisabled.on();
    setBGtoggle.toggle();
    mainTag.click();
    setTimeout(() => {
      setIsButtonDisabled.off();

    }, 500); // Adjust the timeout value as needed
  }


  // function toggleBackground() {
  //   const mainTage = document.getElementById("main")
  //   setBGtoggle(!BGtoggle)
  //   if (BGtoggle) {
  //     mainTage.style.backgroundImage = "url(/banner5.jpg)"
  //   }
  //   else {
  //     mainTage.style.backgroundImage = "url(/banner.jpg)";
  //   }

  // }
  return (
    <Box bg="transparent" py={4} px={6} roundedBottom={"xl"} >
      <Video toggleBG={BGtoggle} />
      <Flex alignItems="center">
        <Box>
          <IconButton
            icon={<AiOutlineHome size={"2rem"} />}
            aria-label="Menu"
            variant="ghost"
            color="white"
            size="md"
            mr={2}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={() => { router.push("/") }}
          />

        </Box>
        <Box flex="1" color="white" >
          {/* <Image src="/space-ship-white.png" h={[8,8,10]} mx={"auto"}/> */}
        </Box>
        <Spacer />
        <Box>
          <IconButton
            icon={!BGtoggle ? <SunIcon /> : <MoonIcon />}
            aria-label="Toggle Dark Mode"
            variant="ghost"
            color="white"
            bg="transparent"
            onClick={toggleBackground}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            size="md"
            isDisabled={isButtonDisabled}
            isActive={isButtonActive}

          />
        </Box>
      </Flex >
    </Box >
  );
}

export default Navbar;