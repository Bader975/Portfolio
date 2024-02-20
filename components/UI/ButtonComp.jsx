import React from 'react';
import { Button as ChakraButton} from '@chakra-ui/react';
import Link from 'next/link';


export default function ButtonComp({ children, link, onClick = null, ...stylesPops }) {
    return (
        <div>
            <ChakraButton variant={"outline"} shadow={"sm"} onClick={onClick} cursor={"pointer"} {...stylesPops}>
                <Link href={link}  rel="noopener noreferrer">{children}</Link>
            </ChakraButton>
        </div>
    )
}

