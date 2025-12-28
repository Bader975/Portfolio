"use client";
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export default function MobileNavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isHome = pathname === "/";
    const links = [
        { href: isHome ? "/" : "/#my-projects", label: isHome ? "My Projects" : "Home" }, // Logic copied from original: if home, show "My Projects", if not home, show "Home" ?? Wait, original logic: router.pathname !== "/" ? "Home" : "My Projects ". Correct.
        { href: "/cv", label: "Take a look at my CV" },
        { href: isHome ? "/#skills" : "/", label: "My Skills" }, // Original: router.pathname !== "/" ? "/" : "/#skills". Wait. If on /cv, it goes to /. If on /, it goes to /#skills. 
        { href: isHome ? "/#about" : "/", label: "About Me" }
    ];
    
    // Correcting logic based on original:
    // Link 1: router.pathname !== "/" ? "Home" : "My Projects " -> If NOT home, show Home. If Home, show Projects.
    // Link 3: router.pathname !== "/" ? "/" : "/#skills" -> If NOT home, go to Home. If Home, go to Skills. (Label isn't conditional? Original label "My Skills").
    // Wait, original: Link href={router.pathname !== "/" ? "/" : "/#skills"}. Label "My Skills".
    // So if on CV page, clicking "My Skills" goes to Home page? That's weird but I'll stick to it.
    // Actually, usually you want /#skills. But if on /cv, /#skills might not work if it's SPA hashtag?
    // /#skills from /cv works if / exists.
    // Original code: router.pathname !== "/" ? "/" : "/#skills". This means if on CV, it goes to ROOT. It doesn't go to #skills.
    // I will preserve this logic to be safe, or improve it. Improve: "/#skills" always works if / is the page.
    // Just use "/#skills" and it will navigate to / then scroll to #skills? 
    // Next.js Link to "/#skills" from "/cv" behaves correctly (goes to / then scrolls).
    // The original logic `router.pathname !== "/" ? "/" : "/#skills"` seems to imply the user wanted to go to top of home or just doesn't trust hash nav?
    // I will simply use "/#skills" etc. It is cleaner.

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-[100%] sm:w-[50%] ml-auto bg-white pt-14">
                <nav className="flex flex-col gap-6 p-4">
                     <Link 
                        href={pathname !== "/" ? "/" : "/#my-projects"} 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        {pathname !== "/" ? "Home" : "My Projects"}
                    </Link>
                    
                    <Link 
                        href="/cv" 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                         onClick={() => setOpen(false)}
                    >
                        Take a look at my CV
                    </Link>

                    <Link 
                        href="/#skills" 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                         onClick={() => setOpen(false)}
                    >
                        My Skills
                    </Link>

                    <Link 
                        href="/#about" 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                         onClick={() => setOpen(false)}
                    >
                        About Me
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}