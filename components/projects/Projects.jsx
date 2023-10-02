import React from 'react'
// import ImageComp from '../ui/ImageComp';
import classes from './projects.module.css'
import { Box, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';






export default function Skill({ projects }) {



    return (
        <>


            <Text as="h1" fontSize={[24, 30]} textAlign={"left"} pt={[100, 120]} pl={5} fontWeight={"bold"} id={"my-projects"}> My Projects 💼: </Text>
            <Divider />
            {/* ---------------------------Grid---------------*/}
            <SimpleGrid as="section" aria-label="projects-section" w={"100%"} h={"100%"} columns={[1, 1, 2, 2, 3]} rounded={"xl"} mx={"auto"} p={[5, 10]} mb={[100, 200]} spacingX={5} spacingY={10} >

                {/* the List of Projecs  */}
                {projects.map((project) => (

                    <Box key={project.id} rounded={"lg"} mt={10} p={[5, 10]} pt={1} boxShadow={"lg"} h={"full"}>
                        <Link href={`${project.href}`} rounded={"lg"} target='_blank' >
                            {/* <ImageComp image={project.image} /> */}
                            <Image src={project.image} className={classes.project_image} width={300} height={300} alt={"Image of One my Projects"} />
                        </Link>
                        <Text color={"#000"} textAlign={"center"} rounded={"xl"} pt={2} fontWeight={"bold"} fontSize={[20, 22]}>{project.title}</Text>
                        <Divider />
                        <Text color={"#000"} opacity={0.75} textAlign={["left", "center"]} pt={2} fontSize={[16, 18, 20]}>{project.discription}</Text>
                    </Box>

                ))}
                {/* the List of Projecs  */}

            </SimpleGrid>


        </>
    )
}









