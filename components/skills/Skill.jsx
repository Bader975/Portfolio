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
            {/* bg={"#00000080"} */}

            {/* ---------------------------Grid---------------*/}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2, 2, 3]} rounded={"xl"} mx={"auto"} p={[5, 10]} mt={5} spacingX={5} spacingY={10} id={"my-projects"}>


                {/* {console.log(project.id)} */}
                {projects.map((project) => (
                    <Box key={project.id} rounded={"2xl"} mt={10} p={10} boxShadow={"2xl"} h={"100%"}>
                        <Link href={`${project.href}`} >
                            <ImageComp image={project.image} />

                        </Link>
                        <Text color={"#000"} textAlign={"center"} rounded={"xl"} pt={1} fontWeight={"bold"} fontSize={[20, 22]}>{project.title}</Text>
                        <Divider  />
                        <Text color={"#000"}  opacity={0.75} textAlign={["left","center"]} rounded={"xl"} pt={2} fontSize={[16, 16]}>{project.discription}</Text>
                    </Box>


                ))};
            </SimpleGrid>


        </>
    )
}









