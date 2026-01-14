"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pills = [
    { text: "STRATEGIC AGENCY", color: "bg-white text-black", rotate: "rotate-[-4deg]" },
    { text: "RESULTS-DRIVEN", color: "bg-[oklch(0.85_0.15_100)] text-black", rotate: "rotate-[-8deg]" }, // Lime-ish
    { text: "INNOVATION DRIVEN", color: "bg-white text-black", rotate: "rotate-[2deg]" },
    { text: "INFLUENTIAL", color: "bg-[oklch(0.6_0.15_30)] text-white", rotate: "rotate-[4deg]" }, // Orange-ish
    { text: "MULTIDIMENSIONAL", color: "bg-zinc-800 text-white", rotate: "rotate-[-6deg]" },
    { text: "STRATEGIC-MINDED", color: "bg-[oklch(0.85_0.15_100)] text-black", rotate: "rotate-[3deg]" },
    { text: "RESULT ORIENTED", color: "bg-primary text-white", rotate: "rotate-[-2deg]" },
];

export default function Stats() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight max-w-2xl">
                        The Numbers <br /> Behind Success
                    </h2>
                    <div className="flex flex-col gap-6 max-w-sm">
                        <p className="text-muted-foreground text-lg">
                            We Fuel Bold Ideas Driving Them Forward With Sharp Strategy
                        </p>
                        <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 w-fit text-base font-semibold">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Highlighted (Purple) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-primary text-white p-10 rounded-3xl h-[400px] flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl md:text-7xl font-black tracking-tighter">500K</span>
                                <span className="text-xl font-bold uppercase tracking-wider">Users</span>
                            </div>
                        </div>
                        <p className="text-white/80 font-medium text-lg leading-snug max-w-xs">
                            There Are Many Variations Of Passages Of Lorem Ipsum Available But The Majority Have Suffered Alteration
                        </p>
                    </motion.div>

                    {/* Card 2: White Contrast */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white text-black p-10 rounded-3xl h-[400px] flex flex-col justify-between"
                    >
                        <span className="text-6xl md:text-7xl font-black tracking-tighter">98 <span className="text-4xl">%</span></span>
                        <p className="text-black/70 font-medium text-base leading-snug">
                            There Are Many Variations Of Passages Of Lorem Ipsum Available But The Majority
                        </p>
                    </motion.div>

                    {/* Card 3: Dark */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card border border-white/5 text-black p-10 rounded-3xl h-[400px] flex flex-col justify-between"
                    >
                        <span className="text-6xl md:text-7xl font-black tracking-tighter">23 <span className="text-4xl">K</span></span>
                        <p className="text-black/70 font-medium text-base leading-snug">
                            There Are Many Variations Of Passages Of Lorem Ipsum Available But The Majority
                        </p>
                    </motion.div>

                </div>

                {/* Floating Pills - Decorative Bottom Area */}
                <div className="relative h-40 w-full mt-10 hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-x-12 px-4">
                    {pills.map((pill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "px-6 py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wider shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-default",
                                pill.color,
                                pill.rotate
                            )}
                        >
                            {pill.text}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
