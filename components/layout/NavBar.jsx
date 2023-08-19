import { Box, Flex, Spacer, IconButton, useColorMode, Avatar } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState, useEffect } from 'react'
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [BGtoggle, setBGtoggle] = useState(false)


  useEffect(() => {
    const mainTag = document.getElementById("main");

    if (BGtoggle) {
      // mainTag.style.backgroundImage = "url(/banner7.jpg)";
      mainTag.style = " background-image: url(/banner8.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;";
    } else {
      mainTag.style.backgroundImage = "url(/banner.jpg)";
     
    }
  }, [BGtoggle]);

  function toggleBackground() {
    setBGtoggle(!BGtoggle);
    
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
    <Box bg="gray.800" py={4} px={6}>
      <Flex alignItems="center">
        <Box>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Menu"
            variant="ghost"
            color="white"
            size="md"
            mr={2}
          />

        </Box>
        <Box flex="1" color="white">
          <Avatar src="/space-ship.png" />
        </Box>
        <Spacer />
        <Box>
          <IconButton
            icon={!BGtoggle ? <SunIcon /> : <MoonIcon />}
            aria-label="Toggle Dark Mode"
            variant="ghost"
            color="white"
            onClick={toggleBackground}
            size="md"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;