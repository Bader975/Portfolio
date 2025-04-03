import React from "react";
import {
  Box,
  Text,
  Image as Imagechakra,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box
        as="section"
        p={2}
        aria-label="about-section"
        id="about"
        pt={[70, 100]}
        fontSize={[18, 20]}
      >
        <Text as="h1" pl={3} fontWeight={"bold"} fontSize={[24, 30]} mb={3}>
          About Me
        </Text>
        <Divider />
        <SimpleGrid w={"full"} h={"full"} columns={[1, 1, 2]} mt={5}>
          <Box marginInline={8}>
            <Imagechakra
              src="/bader-img.png"
              alt="Bader Mohammad"
              mb={4}
              w={"50%"}
              h={"full"}
              bg={"transparent"}
              // bg={"#fff"}
              clipPath={"circle(60%)"}
              // borderRadius={"5px}
              boxSize={["280px", "350px"]}
              objectFit="cover"
            />
          </Box>
          <Box
            textAlign={["left", "justify"]}
            w={["90dvw", "90%"]}
            lineHeight={"1.9"}
            paddingInline={5}
          >
            <Text fontSize="xl" fontWeight="bold" mb={1}>
              Hi, I'm Bader Mohammad!
            </Text>
            <Text as={"article"}>
              I'm full-stack web developer specializing in{" "}
              <Text as="span" fontWeight="bold">
                JavaScript
              </Text>{" "}
              ,{" "}
              <Text as="span" fontWeight="bold">
                TypeScript
              </Text>{" "}
              , I strive to create innovative and high-quality web applications.
              My focus is on delivering exceptional user experiences through
              clean code and efficient solutions 💡.
            </Text>
            <Text mt={4} as={"article"}>
              With expertise in front-end development using modern frameworks
              like{" "}
              <Text as="span" fontWeight="bold" m>
                React
              </Text>{" "}
              and{" "}
              <Text as="span" fontWeight="bold">
               Angular
              </Text>{" "}
              and{" "}
              <Text as="span" fontWeight="bold">
                Next.js
              </Text>
              , I excel at crafting intuitive and responsive user interfaces. On
              the back-end, I specialize in building robust APIs and server-side
              applications using{" "}
              <Text as="span" fontWeight="bold">
                Node.js
              </Text>{" "}
              and{" "}
              <Text as="span" fontWeight="bold">
                Express.js
              </Text>
              .
            </Text>
            <Text mt={4} as={"article"}>
              If you have a project that you'd like to discuss or if you are 
              interested in collaborating, feel free to reach out to me. Let's
              work together to 🚀 bring your ideas to life! .
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
