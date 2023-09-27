import React from 'react'
import ImageComp from '../ui/ImageComp';
import { Box, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Link from 'next/link';






export default function Skill({ projects }) {



    return (
        <>


            <Text color={"#000"} textAlign={"left"} rounded={"xl"} pt={[100, 120]} ml={10} fontWeight={"bold"} fontSize={[20, 22]} id={"my-projects"}> My Projects 💼: </Text>
            <Divider />
            {/* ---------------------------Grid---------------*/}
            <SimpleGrid  as="section" aria-label="projects-section" w={"100%"} h={"100%"} columns={[1, 1, 2, 2, 3]} rounded={"xl"} mx={"auto"} p={[5, 10]} mb={[100, 200]} spacingX={5} spacingY={10} >

                {/* the List of Projecs  */}
                {projects.map((project) => (

                    <Box key={project.id} rounded={"lg"} mt={10} p={10} pt={1} boxShadow={"lg"} h={"100%"}>
                        <Link href={`${project.href}`} rounded={"lg"} target='_blank' >
                            <ImageComp image={project.image} />
                        </Link>
                        <Text color={"#000"} textAlign={"center"} rounded={"xl"} pt={2} fontWeight={"bold"} fontSize={[20, 22]}>{project.title}</Text>
                        <Divider />
                        <Text color={"#000"} opacity={0.75} textAlign={["left", "center"]} pt={2} fontSize={[16, 16]}>{project.discription}</Text>
                    </Box>

                ))}
                 {/* the List of Projecs  */}
                 
            </SimpleGrid>


        </>
    )
}









