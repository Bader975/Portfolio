import { Box, Flex, Spacer, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { toggleBG } from "../../redux/toggle";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import dynamic from 'next/dynamic'
const VideoNoSSR = dynamic(
  () => import("../animation/Video"),
  { ssr: false }
)
function Navbar() {
  const router = useRouter()
  const dispatch = useDispatch()
  // -------Redux------
  const backgroundMode = useSelector((state) => state.background.backgroundMode)


  return (
    <>

      <VideoNoSSR />

      <Box as={"nav"} bg="transparent" py={4} px={6} pb={5} pos={"sticky"} top={0} zIndex={2} >
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
            <Text color="white" display={"inline"} bg={"#00000080"} rounded={"xl"} p={5}> Toggle Mode To {backgroundMode ? <u>Night</u> : <u>Day</u>}</Text>
            <IconButton
              icon={backgroundMode ? <MoonIcon boxSize={"1.5rem"} /> : <SunIcon boxSize={"1.5rem"} />}
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