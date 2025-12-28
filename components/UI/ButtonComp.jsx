import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function ButtonComp({ children, link, onClick, className, leftIcon, ...props }) {
    return (
        <Button 
            variant="outline" 
            className={cn("shadow-sm cursor-pointer", className)} 
            onClick={onClick} 
            asChild
            {...props}
        >
             <Link href={link || "#"} className="flex items-center gap-2">
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
            </Link>
        </Button>
    )
}
