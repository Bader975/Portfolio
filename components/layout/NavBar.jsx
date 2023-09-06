import { Box, Flex, Spacer, IconButton, Image,Avatar } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from "next/router";



function Navbar() {
  const router = useRouter()
 

  return (
    <>

      <Box as={"nav"} py={4} px={[0,5]}  pb={5} bg={"#fff"} color={"#0000"} pos={"sticky"} 
      boxShadow={"lg"} top={0} zIndex={5} overflowY={"hidden"}>
        <Flex ml={-20} >
          <Box mx={5} >
            <IconButton
              aria-label="Menu"
              variant="balck"
              color="black"
              size="lg"
              rounded={"2xl"}
              onClick={() => { router.pathname !== "/" && router.push("/") }}
            >
              <Image src={"/nav-logo.png"}  objectFit={"contain"}  w={200} h={120} pb={2} />
            </IconButton>
          </Box>
          {/* <Box flex="1" color="balck" >

          </Box> */}
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