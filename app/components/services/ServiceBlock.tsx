"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceBlockProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    reversed?: boolean;
    index: number;
}

export default function ServiceBlock({ title, description, tags, image, reversed, index }: ServiceBlockProps) {
    return (
        <section className={cn(
            "w-full py-20 px-4 md:px-8 border-b border-white/5",
            reversed ? "bg-zinc-900/40" : "bg-black"
        )}>
            <div className={cn(
                "max-w-7xl mx-auto flex flex-col gap-16 md:gap-24",
                reversed ? "md:flex-row-reverse" : "md:flex-row"
            )}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-12">
                    <div className="space-y-4">
                        <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">
                            SERVICE BLOCK {index.toString().padStart(2, '0')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-none uppercase tracking-tighter">
                            {title}
                        </h2>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed font-serif">
                        {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm"
                    >
                        Learn more 
                        <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </motion.button>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-square md:aspect-4/5 rounded-[4rem] overflow-hidden border border-white/10 group">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>

            </div>
        </section>
    );
}
