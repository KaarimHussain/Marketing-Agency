"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export default function ServicesIntro() {
    return (
        <section className="bg-black py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                        Why You Need An <br />
                        <span className="text-primary italic font-serif">Integrated</span> System
                    </h2>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        In today's fragmented digital landscape, isolated marketing tactics are no longer enough. Your brand needs a cohesive, interconnected ecosystem where every touchpoint reinforces the next.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Zero Friction", desc: "Seamless transitions between channels." },
                            { title: "Unified Voice", desc: "One brand, one message, everywhere." },
                            { title: "Data Loop", desc: "Sharing insights across departments." },
                            { title: "Compound ROI", desc: "Every service multiplies the other." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="flex items-center gap-2">
                                    <Link2 className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform" />
                                    <h4 className="font-bold text-white uppercase tracking-wider">{item.title}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
