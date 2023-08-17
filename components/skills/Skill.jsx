import React from 'react'
import ImageComp from '../UI/ImageComp'
import { Box, Heading, Image, SimpleGrid, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'

const bg = "#00000080"
export default function Skill() {
    return (
        <>
            {/* Grid number 1 */}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 2, 2]} rounded={"xl"} mx={"auto"} p={10} spacingX={10} spacingY={10}>

                <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"}>
                    I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                </Heading>
                {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://img-c.udemycdn.com/course/750x422/3873464_403c.jpg"} /> */}
                <Box bg={bg} rounded={"xl"} my={"auto"}>

                    <ImageComp image={"https://img-c.udemycdn.com/course/750x422/3873464_403c.jpg"} />
                </Box>
                <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"}>
                    I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                </Heading>
                {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"} /> */}
                <Box bg={bg} rounded={"xl"} my={"auto"}>
                    <ImageComp image={"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"} />
                </Box>


            </SimpleGrid>


            {/* Grid number 2 */}
            <SimpleGrid w={"full"} h={"auto"} columns={[1, 2, 2]} rounded={"xl"} mx={"auto"} p={10} spacingX={10} spacingY={10} >

                <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"}>
                    I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                </Heading>
                <Box bg={bg} rounded={"xl"} my={"auto"}>

                    {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"} /> */}
                    <ImageComp image={"https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"} />
                </Box>
                <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} h={"90%"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"} >
                    I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                </Heading>
                <Box bg={bg} rounded={"xl"} my={"auto"} h={"90%"}>
                    {/* <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} /> */}
                    <ImageComp image={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} />
                </Box>



            </SimpleGrid>
            {/* Grid number 2 */}
            <SimpleGrid w={"full"} h={"full"} columns={[1, 2, 2]} rounded={"xl"} mx={"auto"} p={10} spacingY={10} >




            </SimpleGrid>



        </>
    )
}
