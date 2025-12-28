"use client";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import MobileNavBar from "./MobileNavBar";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
       if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active state logic (Simple ScrollSpy)
      const sections = ["my-projects", "skills", "about"];
      let current = "";
      
      // Check if we are at top
      if (window.scrollY < 100) {
          current = ""; // Home
      } else {
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If top of section is within viewport (with some offset)
                if (rect.top <= 150 && rect.bottom >= 150) {
                    current = section;
                }
            }
          }
      }
      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use pathname to set initial active hash if hard navigated (e.g. /#skills)
  useEffect(() => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveHash(hash);
  }, [pathname]);


  // Logic: 
  // Home Page: Transparent at top (white text), Glass/White on scroll (black text).
  // Other Pages (CV): Always Glass/White (black text) because there is no dark hero.
  const isHome = pathname === "/";
  const shouldShowGlass = isScrolled || !isHome;

  const navBgClass = shouldShowGlass 
      ? "bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-100 dark:bg-black/80 dark:border-gray-800" 
      : "bg-transparent";

  // Text color: 
  const textColorClass = shouldShowGlass ? "text-foreground" : "text-white";

  const navLinks = [
      { href: pathname !== "/" ? "/" : "/#my-projects", label: pathname !== "/" ? "Home" : "My Projects", id: "my-projects", isHomeLink: true },
      { href: "/cv", label: "Take a look at my CV", id: "cv" },
      { href: "/#skills", label: "My Skills", id: "skills" },
      { href: "/#about", label: "About Me", id: "about" }
  ];

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", navBgClass, textColorClass)}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative w-28 h-20 block transition-transform hover:scale-105">
                 <img 
                    src="/bm-logo-remove-bg.webp" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                />
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileNavBar />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row gap-6 items-center">
                {navLinks.map((link, idx) => {
                    // Active check
                    let isActive = false;
                    if (link.id === "cv") {
                        isActive = pathname === "/cv";
                    } else if (link.isHomeLink && pathname === "/" && activeHash === "") {
                        // Home link active when at top of home
                         // Actually "Home" label (My Projects) logic is complex. 
                         // Original: "My Projects" linked to #my-projects. 
                         // "Home" linked to /.
                         // If we assume "My Projects" is just a section, it should light up when on that section.
                         // But the label changes active state?
                         // Let's stick to: if hash matches, its active.
                         if (link.label === "Home") isActive = false; // "Home" maps to / only.
                         else isActive = activeHash === "my-projects"; // "My Projects" maps to #my-projects
                    } else if (pathname === "/") {
                        isActive = activeHash === link.id;
                    }
                    
                    // Special case: "Home" link when label is "Home" (not on home page)
                    if (link.label === "Home" && pathname !== "/") {
                         // Being on unrelated page doesn't make Home active usually, unless explicitly desired.
                         isActive = false;
                    }
                    
                    // Specific fix: "My Projects" is the first link on Home. 
                    if (link.label === "My Projects" && activeHash === "my-projects") isActive = true;


                    return (
                        <Link 
                            key={idx}
                            href={link.href}
                            className={cn(
                                "px-5 py-2.5 rounded-2xl text-lg font-medium transition-all duration-300",
                                isActive 
                                    ? "bg-[#153243] text-white shadow-lg scale-105" 
                                    : "hover:bg-[#153243] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
      </nav>
    </header>
  );
}
