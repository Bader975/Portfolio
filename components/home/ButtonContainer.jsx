import React from 'react'
import ButtonComp from '@/ui/ButtonComp'
import { SimpleGrid, Image, Box,Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function ButtonContainer() {
    const isLightMode = useSelector(state => state.background.backgroundMode)




    return (
        <>
 {/* display={"flex"} justifyContent={"center"} alignContent={"center"}  */}
            <SimpleGrid w={"full"} columns={[1, 1, 2]} spacing={10} px={5} >
      
                <Box w={"100%"}>
                    <Image  w={"100%"} h={"auto"} rounded={"xl"} alt="Banner image" dropShadow={"xl"}src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Box>
                <Stack mx={"auto"} direction={['column', 'row']} spacing={5}  alignSelf={"center"} >
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "#fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={isLightMode ? "#fff" : "#153243"} link={"/#my-skills"} w={"100%"} bg={"transparent"}  >My Skills</ButtonComp>
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "3fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={"#fff"} bg={"#153243"} w={"100%"} link={"/cv"} target={"_blank"} >Take a look at my CV</ButtonComp>
                </Stack>


            </SimpleGrid>


            {/* -------------Social Buttons------------------- */}
            {/* <SimpleGrid w={"auto"} columns={[1, 2, 3]} mt={5} spacing={10} mx={"auto"} minChildWidth='200px' display={"flex"} justifyContent={"center"} alignContent={"center"}  >
                <HStack>
                    <Link href={"https://www.linkedin.com/in/bader-mohammad-al/"} target='_blank' >
                        <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
                            Linkedin
                        </Button>
                    </Link>

                    <Link href={"https://github.com/Bader975"} target='_blank' >
                        <Button colorScheme="gray"
                            color="white"
                            bg="gray.900"
                            _hover={{ bg: "gray.700" }}
                            _active={{ bg: "gray.800" }}
                            _focus={{ boxShadow: "outline" }} leftIcon={<FaGithub />}>
                            Github
                        </Button>
                    </Link>

                </HStack>
            </SimpleGrid> */}

        </>
    )
}
