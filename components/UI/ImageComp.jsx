import React from 'react';
import { Image } from '@chakra-ui/react';

export default function ImageComp({ image }) {
    return (
        <>
            <Image mx={"auto"} opacity={[1, 1, 0.75]} loading={"lazy"} _hover={{ opacity: 1, transform: "scale(1.02)", transition: "transform 0.3s" }}
                w={"100%"}
                h={"100%"} maxW={["100%", "90%"]}
                src={image}
                rounded={"lg"}
                maxH={"50%"}
                objectFit="contain"
                transition="transform 0.3s"
                alt={"Image of One my Projects"}
            />
        </>
    )
}
