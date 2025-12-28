import React from "react";
import { cn } from "@/lib/utils";

const SkillCard = ({ icon, label, boxSize }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        "min-h-[150px] shadow-md rounded-2xl p-6",
        "transition-all duration-200 ease-in-out cursor-pointer",
        "hover:scale-105 hover:shadow-xl bg-white dark:bg-card text-black dark:text-white border border-gray-100 dark:border-gray-800"
      )}
    >
        {/* We wrap the icon to control size with Tailwind classes */}
      <span className="text-[30px] md:text-[50px]">
        {icon}
      </span>
      <hr className="w-full my-2 border-gray-200 dark:border-gray-700" />
      <span>{label}</span>
    </div>
  );
};

export default SkillCard;