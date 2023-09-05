import React from 'react';
import { Image } from '@chakra-ui/react';

export default function ImageComp({ image }) {
    return (
        <>
            <Image mx={"auto"} opacity={[1, 1, 0.75]} loading={"lazy"} _hover={{ opacity: 1, transform: "scale(1.02)", transition: "transform 0.5s" }}
                rounded={"xl"} w={"100%"}
                h={"90%"} maxW={["80%", "90%"]}
                src={image}
                maxH={["50%", "50%", "50%", "60%"]}
                objectFit="contain"
                transition="transform 0.8s"
                alt={"Image of One my skills "}
            />
        </>
    )
}
