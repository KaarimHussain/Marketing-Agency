"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "MARKETING MAGNET",
        date: "MARCH - 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "/work/marketing-magnet"
    },
    {
        id: 2,
        title: "GROWTH ENGINE",
        date: "JUNE - 2024",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        link: "/work/growth-engine"
    },
    {
        id: 3,
        title: "AI SOLUTIONS",
        date: "SEPTEMBER - 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        link: "/work/ai-solutions"
    }
];

export default function Work() {
    return (
        <section className="w-full bg-background py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Creative Header */}
                <div className="flex flex-col items-center justify-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-center"
                    >
                        OUR BEST
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center justify-center gap-2 md:gap-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                    >
                        <span>WOR</span>
                        <div className="relative h-12 w-24 md:h-20 md:w-48 lg:h-24 lg:w-60 rounded-full overflow-hidden border-2 border-primary/20">
                            {/* Decorative inline image acting as visual break */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                        </div>
                        <span>KS</span>
                    </motion.div>
                </div>

                {/* Projects List */}
                <div className="w-full flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group w-full max-w-5xl mx-auto"
                        >
                            {/* Image Container with Hover Effect */}
                            <div className="relative w-full aspect-video md:aspect-2/1 rounded-3xl overflow-hidden border border-white/5 bg-card mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Project Info Row */}
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-2">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                                        {project.date}
                                    </span>
                                </div>

                                <Link
                                    href={project.link}
                                    className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors group/link"
                                >
                                    VIEW PROJECT
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                    <Button className="max-w-2xl mx-auto">
                        View Work
                    </Button>
                </div>

            </div>
        </section>
    );
}
