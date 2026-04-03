"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Terminal, CheckCircle2 } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your brand, market, and audience to uncover core opportunities.",
        icon: Search,
    },
    {
        number: "02",
        title: "Strategy",
        description: "Executing a tailored roadmap that aligns with your specific growth objectives.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Execution",
        description: "Our team brings the strategy to life through creative and technical excellence.",
        icon: Terminal,
    },
    {
        number: "04",
        title: "Optimization",
        description: "Continuous monitoring and refinement to ensure sustained impact and scale.",
        icon: CheckCircle2,
    },
];

export default function Process() {
    return (
        <section className="bg-black py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
                        Our Proven Process
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full group">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col gap-8 p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white transition-all duration-500 group/item hover:scale-105 hover:z-20 hover:shadow-2xl"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-5xl font-bold text-primary/30 group-hover/item:text-primary transition-colors">
                                    {step.number}
                                </span>
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-black group-hover/item:border-black transition-all">
                                    <step.icon className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover/item:text-black transition-colors leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground group-hover/item:text-black/60 transition-colors leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
