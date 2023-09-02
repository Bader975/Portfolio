import React from 'react';
import { Button as ChakraButton, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';


export default function ButtonComp({ children, link, onClick, target = "_self", ...stylesPops }) {
    return (
        <div>
            <ChakraButton variant={"outline"} shadow={"sm"} onClick={onClick} {...stylesPops}>
                <Link href={link} target={target} rel="noopener noreferrer">{children}</Link>
            </ChakraButton>
        </div>
    )
}
