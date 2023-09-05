import { Box, Flex, Spacer, IconButton, Image,Avatar } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from "next/router";



function Navbar() {
  const router = useRouter()
  let backgroundMode=true;

  return (
    <>

      <Box as={"nav"} py={4} px={[0,5]} pb={5} bg={"#fff"} color={"#0000"} pos={"sticky"} 
      boxShadow={"lg"} top={0} zIndex={5} overflowY={"hidden"}>
        <Flex alignItems="flex-start">
          <Box>
            <IconButton
              aria-label="Menu"
              variant="balck"
              color="balck"
              size="lg"
              rounded={"2xl"}
              mr={[0,2]}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            >
              <Image src={"https://github-production-user-asset-6210df.s3.amazonaws.com/80196102/265249572-047258c4-09b1-486f-a582-348d22b7cdab.png"}  objectFit={"contain"} w={200} h={"100vh"}/>
            </IconButton>
          </Box>
          <Box flex="1" color="balck" >

          </Box>
          <Spacer />
          <Box>
            {/* <Text color="white" display={"inline"} bg={"#00000080"} rounded={"xl"} p={5}> Toggle Mode To {backgroundMode ? <u>Night</u> : <u>Day</u>}</Text> */}
            <IconButton
              // icon={ <AiOutlineHome size={"2.5rem"} color={"#000"} />}
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