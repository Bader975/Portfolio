import React from 'react'
import classes from './projects.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function Projects({ projects }) {
    return (
        <section aria-label="projects-section" className="w-full h-full px-5 py-10 md:py-20 mb-[100px] md:mb-[200px]">
             
            <h1 className="text-2xl md:text-3xl text-left pl-5 font-bold mt-20 text-black dark:text-white" id="my-projects"> 
                My Projects 💼: 
            </h1>
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            
            {/* ---------------------------Grid---------------*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 w-full max-w-7xl mx-auto p-5">
                {/* the List of Projects  */}
                {projects.map((project) => (
                    <div key={project.id} className="bg-white dark:bg-card rounded-2xl mt-10 p-5 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-800">
                        <Link href={`${project.href}`} target='_blank' className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                             <Image 
                                src={project.image} 
                                className={cn(classes.project_image, "w-full h-auto object-cover aspect-square")} 
                                width={300} 
                                height={300} 
                                alt={"Image of " + project.title} 
                            />
                        </Link>
                        
                        <div className="mt-3">
                            <p className="text-black dark:text-white text-center font-bold text-lg md:text-xl md:text-[22px]">
                                {project.title}
                            </p>
                            <hr className="my-2 border-gray-200 dark:border-gray-700" />
                            <p className="text-black dark:text-white/80 opacity-75 text-left md:text-center pt-2 text-lg">
                                {project.discription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
