import React from 'react'
import { useRouter } from 'next/router'
import ButtonComp from '../../components/UI/ButtonComp'
import { SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function ButtonContainer() {
    const isLightMode = useSelector(state => state.background.backgroundMode)


    const router = useRouter()

    function clickHandler() {
        router.push("/cv")
    }
    return (
        <>

            <SimpleGrid w={"auto"} columns={[1, 2, 3]} spacing={10} mx={"auto"} minChildWidth='200px' display={"flex"} justifyContent={"center"} alignContent={"center"}  >
                <ButtonComp _hover={{
                    bg: "gray.500", color: "#fff", opacity: 1, transform: "scale(1.1)", transition:
                        "transform 0.5s"
                }} rounded={"xl"} color={isLightMode ? "#fff" : "#153243"} link={"/#my-skills"} w={"100%"} bg={isLightMode ? "#153243" : null} >My Skills</ButtonComp>
                <ButtonComp _hover={{
                    bg: "gray.500", color: "3fff", opacity: 1, transform: "scale(1.1)", transition:
                        "transform 0.5s"
                }} rounded={"xl"} color={isLightMode ? "#153243" : "#fff"} bg={!isLightMode ? "#153243" : null} w={"100%"} link={"/"} onClick={clickHandler}>Take a look at my CV</ButtonComp>

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
