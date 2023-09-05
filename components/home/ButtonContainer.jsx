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
            {/* display={"flex"} justifyContent={"center"} alignContent={"center"}  */}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 1]} pt={5} spacing={10} px={5}>

                {/* ------------------Hero Image-------------------------------------  */}
                {/* <Box w={"100%"} h={"full"}>
                <Image w={"100%"} h={"100%"} fetchPriority='high'  loading={'lazy'} rounded={"xl"} alt="Banner image" dropShadow={"xl"} src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            </Box> */}
                {/* ------------------Hero Image-------------------------------------  */}
                <Stack mx={"auto"} direction={['column', 'row']} spacing={5} alignSelf={"center"} >
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "#fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={"#153243"} link={"/#my-projects"} boxShadow={"md"}   w={"100%"} bg={"transparent"} leftIcon={<BiLogoReact size={25} />}> My Projects</ButtonComp>
                    <ButtonComp _hover={{
                        bg: "gray.500", color: "3fff", opacity: 1, transform: "scale(1.1)", transition:
                            "transform 0.5s"
                    }} rounded={"xl"} color={"#fff"} bg={"#153243"} boxShadow={"md"} w={"100%"} link={"/"} p={5} leftIcon={<BsFiletypePdf size={25}  />} onClick={() => router.push("/cv")}> Take a look at my CV</ButtonComp>
                    {/* link={"/cv"} target={"_blank"} */}


                </Stack>


            </SimpleGrid>



        </>
    )
}
