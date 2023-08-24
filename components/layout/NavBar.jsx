import { Box, Flex, Spacer, IconButton, useColorMode, useBoolean } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Video from "../animation/Video";
import { toggleBG } from "../../redux/toggle";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'


function Navbar() {
  const router = useRouter()
  const dispatch = useDispatch()
  const backgroundMode = useSelector((state) => state.background.backgroundMode)

  return (
    <>

      <Video />
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
              icon={backgroundMode ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle Dark Mode"
              variant="white"
              color="white"
              bg="transparent"
              // onClick={ toggleBackground}
              onClick={() => dispatch(toggleBG())}
              size="md"

            />
          </Box>
        </Flex >
      </Box >
    </>
  );
}

export default Navbar;