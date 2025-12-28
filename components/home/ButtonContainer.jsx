"use client";
import React from 'react';
import ButtonComp from '../UI/ButtonComp';
import { useRouter } from 'next/navigation'; // Changed to next/navigation for App Router compatibility (if needed, though Link is better)
import { BsFiletypePdf } from 'react-icons/bs';
import { BiLogoReact } from 'react-icons/bi';

export default function ButtonContainer() {
    return (
        <div className="w-full h-full mt-8 z-20 relative px-2 grid grid-cols-1">
            <div className="mx-auto flex flex-col sm:flex-row gap-5 self-start">
                <ButtonComp 
                    link="/#my-projects" 
                    className="w-full sm:w-auto p-6 md:p-8 rounded-xl bg-transparent text-[#153243] hover:bg-gray-500 hover:text-white hover:scale-110 transition-transform duration-500 shadow-md border border-[#153243]/20"
                    leftIcon={<BiLogoReact size={25} />}
                > 
                    My Projects
                </ButtonComp>

                <ButtonComp 
                    link="/cv" 
                    className="w-full sm:w-auto p-6 md:p-8 rounded-xl bg-[#153243] text-white hover:bg-gray-500 hover:text-white hover:scale-110 transition-transform duration-500 shadow-md border-none"
                    leftIcon={<BsFiletypePdf size={25} />}
                > 
                    Take a look at my CV
                </ButtonComp>
            </div>
        </div>
    )
}
