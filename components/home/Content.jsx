import { Box, Heading, Image, SimpleGrid, useColorMode, Button, useColorModeValue, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Content() {
    // const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#EEF0EB", 'grey.200')
    const color = useColorModeValue("#153243", 'white')

    function DarkMode() {
        const { colorMode, toggleColorMode } = useColorMode()
        return (
            <header>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </header>
        )
    }
    return (
        <>
            {/* <DarkMode /> */}
            {/* display={"flex"} justifyContent={"center"} alignContent={"center"} */}
            <SimpleGrid w={"auto"} h={"auto"} columns={[1, 1, 1]} mx={"auto"} spacingY={5} >
                {/* Fist Card *1 */}
                {/* bg={bg}  */}
                <Box mx={"auto"} p={6} pos={"static"} rounded={"3xl"} w={"auto"}  shadow={"2xl"} maxH={"80%"}>
                    <Heading color={"#fff"} p={5} fontSize={[18, 20, 25]}  opacity={"0.90"}  textAlign={"center"}>
                        Hello,
                        <Spacer/> I'm so happy that you vised my Porfolio
                        My name is Bader Mohammad <Text display={"inline"}  fontStyle={"italic"} color={"yellow.200"}>JavaScript</Text> and <Text display={"inline"} fontStyle={"italic"} color={"blue.200"} fontWeight={"bold"} mr={1}>TypeScript</Text> 
                        Developer
                    </Heading>
                </Box>

                <Image rounded={"xl"} mixBlendMode={"color-burn"} mt={1} w={["80%", "80%", "70%"]} h={"auto"} maxH={"70%"} src='https://img.freepik.com/free-vector/astronaut-suit-illustration_114360-8538.jpg?w=826&t=st=1692213174~exp=1692213774~hmac=f25a5f88796116df4ec7b630b643bdd45a39de1ced64f560fc11395cdecf30d7' />
                {/* Fist Card *2 */}
                {/* bg={bg} */}


                {/* <Box mx={"auto"} p={6} pos={"static"} rounded={"xl"} w={"auto"} maxH={"80%"}>
                    <Heading color={"#fff"} p={2} fontSize={[16, 20, 25]} rounded={"xl"} opacity={"0.90"} bg={"#00000080"} textAlign={"left"}>
                        I vanquish the complexities of React and Next.js, turning chaos into an enchanting, high-performance kingdom. Your websites will hold the secrets to enthralling user experiences.
                    </Heading>
                    <Image rounded={"xl"} mixBlendMode={"color-burn"} boxShadow={"xl"} mt={5} w={"full"} h={"full"} maxH={"70%"} src='https://img.freepik.com/free-vector/isometric-mars-illustration-with-rocket-mars-two-astronaut-set-flag-illustration_1284-60256.jpg?w=996&t=st=1692214117~exp=1692214717~hmac=74b7c78f4365604712c20805cff7b8e0e8335cf2a084f04f44d49ca5e6ca9678' />
                </Box> */}

            </SimpleGrid>
        </>
    )
}
