import React from 'react'
import { Box, Heading, Image, SimpleGrid, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'
export default function ImageComp({image}) {
    return (
        <>
            <Image mx={"auto"} rounded={"xl"} w={"full"} h={"full"} maxH={"70%"} maxW={"70%"}  src={image} />

        </>
    )
}
