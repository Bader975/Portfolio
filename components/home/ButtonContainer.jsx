import React from 'react'
import ButtonComp from '../../components/UI/ButtonComp'
import { SimpleGrid } from '@chakra-ui/react'
export default function ButtonContainer() {
    return (
        <>
            <SimpleGrid w={"auto"} columns={[1, 2, 2]} spacing={10} mx={"auto"} minChildWidth='200px' display={"flex"} justifyContent={"center"} alignContent={"center"}  >
                <ButtonComp _hover={{ bg: "gray.500", color: "#fff" }} rounded={"xl"} color={"#153243"} link={"/test"} w={"100%"}>My Skills</ButtonComp>
                <ButtonComp _hover={{ bg: "gray.500", color: "3fff" }} rounded={"xl"} color={"#fff"} bg={"#153243"} w={"100%"} link={"/"}>Contact Me</ButtonComp>
            </SimpleGrid>

        </>
    )
}
