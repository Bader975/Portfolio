import React from 'react'
import { Image } from '@chakra-ui/react'
export default function ImageComp({ image }) {
    return (
        <>

            <Image mx={"auto"} opacity={0.75} _hover={{ opacity: 1, transform: "scale(1.02)", transition: "transform 0.5s" }}
                rounded={"xl"} w={"full"}
                h={"auto"} maxH={"70%"} maxW={"70%"}
                src={image}
                transition="transform 0.8s"
            />

        </>
    )
}
