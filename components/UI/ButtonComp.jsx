import React from 'react'
import { Button } from '@chakra-ui/react'
import { Button as ChakraButton } from '@chakra-ui/react'
import Link from 'next/link'
import { Router, useRouter } from "next/router";

export default function ButtonComp({ children, link, onClick, ...stylesPops }) {
    // useRouter
    const router = useRouter();
    return (
        <div>
            <ChakraButton  onClick={onClick} {...stylesPops}><Link href={link}>{children}</Link></ChakraButton>
        </div>
    )
}
