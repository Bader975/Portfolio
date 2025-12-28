import React from "react";
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
  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3 color="#2965F1" />, label: "CSS" },
    { icon: <SiTailwindcss color="#38bdf9" />, label: "Tailwind CSS" },
    { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiChakraui color="#319795" />, label: "Chakra UI" }, // Keeping the icon even if we removed the library usage :D
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
    <section
      aria-label="skills-section"
      id="skills"
      className="p-5 pt-[70px] md:pt-[100px] pb-0 bg-white dark:bg-card"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
        Skills
      </h1>
      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      <p className="text-lg md:text-xl mt-1 text-black dark:text-white">
        Here are some of the key technologies and tools I work with:
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10 px-5 md:px-[50px] lg:px-[100px] w-full text-center text-2xl">
        {skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            icon={skill.icon}
            label={skill.label}
            // size removed, handled in CSS
          />
        ))}
      </div>
    </section>
  );
}
