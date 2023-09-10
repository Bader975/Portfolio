import React, { useEffect, useState } from 'react'
import ImageComp from '../ui/ImageComp';
import { Box, SimpleGrid, Divider, Text } from '@chakra-ui/react'


import Link from 'next/link';
const bg = "#00000080"




export default function Skill({ projects }) {
    const [isDomLoaded, setIsDomLoaded] = useState(false)


    useEffect(() => {
        setIsDomLoaded(true)
    }, [])




    return (
        <>
       

            <Text color={"#000"} textAlign={"left"} rounded={"xl"} pt={[100,120]} ml={10}  fontWeight={"bold"} fontSize={[20, 22]} id={"my-projects"}> My Projects 💼: </Text>
            <Divider/>
            {/* ---------------------------Grid---------------*/}
            <SimpleGrid w={"100%"} h={"100%"} columns={[1, 1, 2, 2, 3]} rounded={"xl"} mx={"auto"} p={[5, 10]}  mb={[100,200]} spacingX={5} spacingY={10} >


                {projects.map((project) => (
                    <Box key={project.id} rounded={"2xl"} mt={10} p={10} pt={1} boxShadow={"2xl"} h={"100%"}>
                        <Link href={`${project.href}`} rounded={"lg"} target='_blank' >
                            <ImageComp image={project.image} />
                        </Link>
                        <Text color={"#000"} textAlign={"center"} rounded={"xl"} pt={2} fontWeight={"bold"} fontSize={[20, 22]}>{project.title}</Text>
                        <Divider />
                        <Text color={"#000"} opacity={0.75} textAlign={["left", "center"]} pt={2} fontSize={[16, 16]}>{project.discription}</Text>
                    </Box>


                ))}
            </SimpleGrid>


        </>
    )
}









