import React from 'react'
import { PiEngineFill } from 'react-icons/pi'
import { SiNextdotjs } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function Content() {
    return (
        <section aria-label="description-section" className="w-full h-full pt-10 mx-auto px-4">
             {/* First box */}
             <div className="mx-auto p-6 relative rounded-3xl w-[90%] lg:w-[80%] shadow-lg text-center text-lg md:text-xl lg:text-2xl text-black bg-white dark:bg-card dark:text-card-foreground border border-gray-100 dark:border-gray-800">
                 <p className="mb-4">Hi,👋</p>
                 <p className="inline">
                     I'm so happy that you visited my Portfolio 😍,
                     My name is Bader Mohammad and I'm 
                 </p>
                 <span className="font-bold"> JavaScript </span>
                 {" "} and {" "}
                 <span className="font-bold mr-1 text-[#3178C6] dark:text-gray-800">
                     TypeScript {" "}
                 </span>
                 <span className="inline">Developer</span>
             </div>

             {/* Second box */}
            <div className="mx-auto p-6 w-[90%] lg:w-[80%] rounded-3xl shadow-lg mt-10 bg-white dark:bg-card border border-gray-100 dark:border-gray-800">
                 <p className="text-black/90 dark:text-white/90 text-lg md:text-xl lg:text-2xl opacity-90 text-center flex items-center justify-center flex-wrap gap-2">
                     I used for this Project NEXT.js
                     <SiNextdotjs className="inline mr-1 text-black dark:text-white" />
                     , it's so powerful because of Server-side Rendering (SSR) and Search engine optimization (SEO)
                     <PiEngineFill className="inline mr-1 text-black dark:text-white" />
                 </p>
            </div>
        </section>
    )
}
