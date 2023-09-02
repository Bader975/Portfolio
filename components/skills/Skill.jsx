import React, { useEffect, useState } from 'react'
import ImageComp from '../ui/ImageComp';
import { Box, Heading, Image, SimpleGrid, Divider, Text } from '@chakra-ui/react'


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
            <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2, 3]} rounded={"xl"} mx={"auto"} p={[5, 10]} mt={5} spacingX={5} spacingY={10} id={"my-projects"}>


                {/* {console.log(project.id)} */}
                {projects.map((project) => (
                    
                    <Box key={project.id} rounded={"2xl"} overflow={"hidden"} mt={10} p={5} boxShadow={"2xl"} h={"100%"}>
                        <Text color={"#000"} textAlign={"center"} rounded={"xl"} fontWeight={"500"} fontSize={[20, 25]}>{project.title}</Text>
                        <Divider />
                        <Link href={`${project.href}`} >
                            <ImageComp image={project.image} />
                        </Link>
                    </Box>
                    

                ))};
            </SimpleGrid>


        </>
    )
}









