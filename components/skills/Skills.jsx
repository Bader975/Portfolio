import React from "react";
import {
  Box,
  Text,
  Divider,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaChartBar,
  FaAngular,
} from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiJquery,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import SkillCard from "./SkillCard";

export default function Skills() {
  const iconSize = useBreakpointValue({ base: 30, md: 50 });
  const boxSize = useBreakpointValue({ base: 4, md: 5 });


  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3 color="#2965F1" />, label: "CSS" },
    { icon: <SiTailwindcss color="#38bdf9" />, label: "Tailwind CSS" },
    { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiChakraui color="#319795" />, label: "Chakra UI" },
    { icon: <FaAngular />, label: "Angular Material" },
    { icon: <FaChartBar color="#FF6384" />, label: "Chart.js" },
    { icon: <SiJquery color="#0868AC" />, label: "jQuery" },
    { icon: <FaReact color="#61DAFB" />, label: "React.js" },
    { icon: <FaAngular color="#c42d52" />, label: "Angular" },
    { icon: <SiNextdotjs color="#000000" />, label: "Next.js" },
    { icon: <SiJavascript color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, label: "TypeScript" },
    { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
    { icon: <SiExpress color="#000000" />, label: "Express.js" },
    { icon: <FaDatabase color="#4479A1" />, label: "MySQL" },
    { icon: <SiPrisma color="#1B222D" />, label: "Prisma" },
    { icon: <FaGit color="#F05032" />, label: "Git" },
  ];

  return (
    <Box
      as="section"
      aria-label="skills-section"
      p={5}
      pt={[70, 100]}
      pb={0}
      id="skills"
    >
      <Text as="h1" fontWeight={"bold"} fontSize={[24, 30]} mb={4}>
        Skills
      </Text>
      <Divider />
      <Text fontSize={[18, 20]} mt={1}>
        Here are some of the key technologies and tools I work with:
      </Text>
      <SimpleGrid
        w={"full"}
        h={"full"}
        textAlign={"center"}
        fontSize={24}
        columns={[2, 2, 3, 4, 5]}
        mt={10}
        spacing={10}
        px={[5, 50, 100]}
      >
        {skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            icon={skill.icon}
            label={skill.label}
            size={iconSize}
            boxSize={boxSize}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
