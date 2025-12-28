
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Assuming framer-motion is still installed
import { useInView } from "react-intersection-observer"; // Assuming installed
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactMe() {
  const [showDiv, setShowDiv] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        setShowDiv(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [inView]);

  return (
    <section
      aria-label="contactMe-section"
      className="w-full h-full mx-auto mt-10 p-10 flex flex-col items-center justify-center"
    >
      <div ref={ref} className="w-full md:w-[80%] lg:w-[30%] h-auto">
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          animate={{
            translateX: inView ? "0%" : "-100%",
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-black dark:text-white mx-auto text-center font-extrabold text-xl md:text-2xl mb-4">
            Get to know me better through my Social Media platforms ⬇️
          </h1>
          <Image
            src="/mobile-marketing.svg"
            alt="Animated SVG"
            width={400} // Approximate size
            height={400}
            loading="lazy"
            className="w-full h-full rounded-xl"
          />
        </motion.div>
      </div>

      {/* -------------Social Buttons------------------- */}
      <footer className="mt-8">
        <div className="flex gap-4 flex-wrap justify-center">
          {/* -------------Linkedin------------------ */}
          <Link href={"https://www.linkedin.com/in/bader-mohammad-al/"} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-[#2368A9] hover:bg-[#2368A9]/80 text-white gap-2"
            >
              <FaLinkedin />
              Linkedin
            </Button>
          </Link>

          {/* -------------Github----------------- */}
          <Link href={"https://github.com/Bader975"} target="_blank" rel="noopener noreferrer">
             <Button
              className="bg-gray-900 hover:bg-gray-700 text-white gap-2"
            >
              <FaGithub />
              Github
            </Button>
          </Link>

          {/* ------------Email-------------- */}
          <Link href={"mailto:bader97alyami@hotmail.com"} target="_blank" rel="noopener noreferrer">
             <Button
              className="bg-[#0666E5] hover:bg-blue-500 text-white gap-2"
            >
              <AiOutlineMail />
              Email Me
            </Button>
          </Link>
        </div>
      </footer>
    </section>
  );
}
