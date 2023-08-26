import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function ButtonComp({ children, link, onClick, ...stylesPops }) {


    return (
        <div>
            <ChakraButton  onClick={onClick} {...stylesPops}>
                <Link href={link}>{children}</Link>
            </ChakraButton>
        </div>
    )
}
