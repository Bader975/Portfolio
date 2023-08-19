import React from 'react'
import ButtonComp from '../../components/UI/ButtonComp'
import { SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
export default function ButtonContainer() {
    const router = useRouter()
    function clickHandler() {
        router.push("/cv")
    }
    return (
        <>
            <SimpleGrid w={"auto"} columns={[1, 2, 2]} spacing={10} mx={"auto"} minChildWidth='200px' display={"flex"} justifyContent={"center"} alignContent={"center"}  >
                <ButtonComp _hover={{ bg: "gray.500", color: "#fff",opacity: 1, transform: "scale(1.1)", transition: "transform 0.5s" }} rounded={"xl"} color={"#153243"} link={"/#my-skills"} w={"100%"}>My Skills</ButtonComp>
                <ButtonComp _hover={{ bg: "gray.500", color: "3fff",opacity: 1, transform: "scale(1.1)", transition: "transform 0.5s" }} rounded={"xl"} color={"#fff"} bg={"#153243"} w={"100%"} link={"/"} onClick={clickHandler}>Take a look at my CV</ButtonComp>
            </SimpleGrid>

        </>
    )
}
