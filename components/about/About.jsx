import { Box, Heading, Text, Image, Divider} from "@chakra-ui/react";
import React from 'react';


export default function About() {
    return (
        <>

            <Box p={8} id="about" pt={[100, 120]} fontSize="lg"  >
                <Heading as="h1" fontSize="2xl" mb={4} >
                    About Me
                </Heading>
                <Divider/>
                <Image src="/me-no-bg.webp" alt="Bader Mohammad" mb={4} shadow={"lg"} h={"100%"} mixBlendMode={"darken"} borderRadius="lg" boxSize={"300px"} />
                <Box textAlign={"left"} w={["100%", "65%"]}>

                    <Text fontSize="xl" fontWeight="bold" mb={1} >
                        Hi, I'm Bader Mohammad!
                    </Text>
                 
                    <Text textIndent={16}>
                        I'm full-stack web developer specializing in  <Text as="span" fontWeight="bold">JavaScript</Text> , <Text as="span" fontWeight="bold">TypeScript</Text>  , I strive to create innovative and high-quality web applications. My focus is on delivering exceptional user experiences through clean code and efficient solutions 💡.
                    </Text>
                    <Text mt={4} >
                        With expertise in front-end development using modern frameworks like <Text as="span" fontWeight="bold">React</Text>  and  <Text as="span" fontWeight="bold">Next.js</Text>, I excel at crafting intuitive and responsive user interfaces. On the back-end, I specialize in building robust APIs and server-side applications using <Text as="span" fontWeight="bold">Node.js</Text>  and <Text as="span" fontWeight="bold">Express.js</Text>.
                    </Text>
                    <Text mt={4} >
                        If you have a project that you'd like to discuss or if you're interested in collaborating, feel free to reach out to me. Let's work together to 🚀 bring your ideas to life!
                    </Text>
                </Box>
               
            </Box>




        </>
    )
}


   {/* <Text>
                    I'm a  <FaCode style={{display:"inline"}}/> full-stack web developer with expertise in <FaLaptopCode  style={{display:"inline"}}/> JavaScript, TypeScript, and Node.js. Passionate about creating innovative and high-quality web applications, I strive to deliver exceptional user experiences through clean code and efficient solutions.
                    </Text>
                    <Text mt={4}>
                    With a strong foundation in front-end development using modern frameworks like React and Next.js, I excel in crafting intuitive and responsive user interfaces. On the back-end, I specialize in building robust APIs and server-side applications using Node.js and Express.js.
                    </Text>
                    <Text mt={4}>
                    My focus is not only on writing code but also on <FaLightbulb style={{display:"inline",color:"#ffff8f",fontSize:"24px"}} /> problem-solving, collaboration, and continuous learning. I enjoy taking on challenging projects that push me to expand my knowledge and skills. I am always eager to explore new technologies and stay up-to-date with the latest industry trends.
                    </Text>
                    <Text mt={4}>
                    If you have a project that you'd like to discuss or if you're interested in collaborating, feel free to reach out to me. Let's work together to <FaRocket style={{display:"inline"}} /> bring your ideas to life!
                </Text> */}
                    {/* <SiJavascript style={{display:"inline",color:"#F0E68C",fontSize:"28px"}} /> */}
                    {/* <SiTypescript style={{display:"inline",color:"#4682B4",fontSize:"28px"}} />
<FaReact style={{display:"inline",color:"#4682B4",fontSize:"28px"}} /> */}
                    {/* <FaNodeJs style={{display:"inline",color:"#ADFF2F",fontSize:"28px"}} /> */}