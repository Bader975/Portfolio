import React from 'react';
import ButtonComp from '../ui/ButtonComp';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsFiletypePdf } from 'react-icons/bs';
import { BiLogoReact } from 'react-icons/bi';

export default function ButtonContainer() {


    const router = useRouter();

    return (
        <>

            <SimpleGrid w={"full"} h={"full"} columns={1} mt={8} zIndex={2} pos={"relative"} spacing={10} px={5}>

                <Stack mx={"auto"} direction={['column', 'row']} spacing={5} alignSelf={"center"} >
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "#fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={"#153243"} link={"/#my-projects"} boxShadow={"md"} w={"100%"} bg={"transparent"} leftIcon={<BiLogoReact size={25} />}> My Projects</ButtonComp>
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "3fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={"#fff"} bg={"#153243"} boxShadow={"md"} w={"100%"} link={"/cv"} p={5} leftIcon={<BsFiletypePdf size={25} />}> Take a look at my CV</ButtonComp>


                </Stack>

            </SimpleGrid>



        </>
    )
}
