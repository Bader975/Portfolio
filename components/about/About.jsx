import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section aria-label="about-section" id="about" className="pt-[70px] bg-white/50 md:pt-[100px] text-lg md:text-xl p-5 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold pl-3 mb-3 text-black dark:text-white">
        About Me
      </h1>
      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 w-full h-full">
        <div className="mx-8 flex justify-center md:justify-start">
             {/* Using next/image for optimization */}
             <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative overflow-hidden rounded-full border-4 border-transparent">
                <Image
                    src="/bader-img.png"
                    alt="Bader Mohammad"
                    fill
                    className="object-cover"
                />
             </div>
        </div>
        
        <div className="text-left w-[90vw] md:w-[90%] md:text-justify leading-loose px-5 text-black dark:text-white">
          <p className="text-xl font-bold mb-1">
            Hi, I'm Bader Mohammad!
          </p>
          <article>
            I'm full-stack web developer specializing in{" "}
            <span className="font-bold">
              JavaScript
            </span>{" "}
            ,{" "}
            <span className="font-bold">
              TypeScript
            </span>{" "}
            , I strive to create innovative and high-quality web applications.
            My focus is on delivering exceptional user experiences through
            clean code and efficient solutions 💡.
          </article>
          <article className="mt-4">
            With expertise in front-end development using modern frameworks
            like{" "}
            <span className="font-bold">
              React
            </span>{" "}
            and{" "}
            <span className="font-bold">
             Angular
            </span>{" "}
            and{" "}
            <span className="font-bold">
              Next.js
            </span>
            , I excel at crafting intuitive and responsive user interfaces. On
            the back-end, I specialize in building robust APIs and server-side
            applications using{" "}
            <span className="font-bold">
              Node.js
            </span>{" "}
            and{" "}
            <span className="font-bold">
              Express.js
            </span>
            .
          </article>
          <article className="mt-4">
            If you have a project that you'd like to discuss or if you are 
            interested in collaborating, feel free to reach out to me. Let's
            work together to 🚀 bring your ideas to life! .
          </article>
        </div>
      </div>
    </section>
  );
}
