"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock Data
const projects = [
    {
        id: 1,
        title: "Lumina Tech",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        description: "Rebranding a global SaaS platform for the modern era.",
    },
    {
        id: 2,
        title: "Apex Fitness",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        description: "A high-conversion e-commerce experience for athletic wear.",
    },
    {
        id: 3,
        title: "Urban Oasis",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1545156526-905436ca6524?q=80&w=2000&auto=format&fit=crop",
        description: "Social media campaign that drove 300% ROI.",
    },
    {
        id: 4,
        title: "Velvet Interiors",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop",
        description: "Luxury identity design for a boutique interior firm.",
    },
    {
        id: 5,
        title: "Nexus Finance",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Simplifying complex financial data through UI/UX.",
    },
    {
        id: 6,
        title: "EcoServe",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        description: "Sustainable messaging strategy for an eco-startup.",
    },
];

const filters = ["All", "Branding", "Web Design", "Marketing"];

export default function ProjectGallery() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-24 bg-black min-h-screen">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className="group relative rounded-3xl overflow-hidden bg-zinc-900 cursor-pointer"
                            >
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="flex justify-center mt-16">
                    <Button variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5 text-white hover:text-white">
                        Load More Work
                    </Button>
                </div>
            </div>
        </section>
    );
}
