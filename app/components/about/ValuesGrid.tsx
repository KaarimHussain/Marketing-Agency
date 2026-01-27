"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap } from "lucide-react";

const utilities = [
    {
        title: "Innovation First",
        description: "We constantly push boundaries to find new, better ways to solve problems.",
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        className: "md:col-span-2 md:row-span-1 bg-primary/10",
    },
    {
        title: "Data-Driven",
        description: "Decisions backed by analytics, never just guesses.",
        icon: <Target className="w-8 h-8 text-black" />,
        className: "md:col-span-1 md:row-span-2 bg-white text-black",
    },
    {
        title: "Client-Centric",
        description: "Your success is our obsession. We build long-term partnerships.",
        icon: <Users className="w-8 h-8 text-white" />,
        className: "md:col-span-1 md:row-span-1 bg-zinc-900",
    },
    {
        title: "Fast Execution",
        description: "Speed matters. We deliver high-quality work at the pace of business.",
        icon: <Zap className="w-8 h-8 text-white" />,
        className: "md:col-span-2 md:row-span-1 bg-zinc-800",
    },
    {
        title: "Trust & Transparency",
        description: "Open communication and honest partnerships.",
        icon: <Users className="w-8 h-8 text-white" />,
        className: "md:col-span-1 md:row-span-2 bg-zinc-900",
    },
];

export default function ValuesGrid() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">The principles that guide every strategy, design, and line of code we write.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-5xl mx-auto h-auto md:h-[500px]">
                    {utilities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative p-8 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border border-white/5 ${item.className}`}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full gap-4">
                                <div className="p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-md border border-white/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className={`text-sm ${item.className.includes("text-black") ? "text-black/70" : "text-white/60"}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
