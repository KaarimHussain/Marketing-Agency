"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, TrendingUp } from "lucide-react";

export default function ProblemPositioning() {
    return (
        <section className="bg-white text-black py-28 px-4 md:px-8 rounded-t-[4rem] relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Visual Accent */}
                <div className="w-full lg:w-1/3 space-y-10">
                    <div className="space-y-4">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">Positioning</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-black leading-none uppercase tracking-tighter">
                            THE GAP <br /> IN GROWTH
                        </h2>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 group p-4 rounded-2xl bg-black transition-all hover:scale-105 active:scale-95 cursor-default shadow-lg">
                            <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/20">
                                <AlertCircle className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-white text-sm font-bold uppercase tracking-widest">Stagnation is Silent</span>
                        </div>
                        <div className="flex items-center gap-4 group p-4 rounded-2xl bg-zinc-100 transition-all hover:scale-105 active:scale-95 cursor-default">
                             <div className="h-10 w-10 bg-black/5 rounded-xl flex items-center justify-center border border-black/5">
                                <Target className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-black text-sm font-bold uppercase tracking-widest">Market Saturation</span>
                        </div>
                    </div>
                </div>

                {/* Narrative Content */}
                <div className="w-full lg:w-2/3 space-y-12">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-medium font-serif leading-tight text-zinc-900">
                        In A World Where Everyone Is Following The Same Playbook, <span className="text-primary/70 italic">Traditional Agencies</span> Are Just Noise. We Help You Break Through The Saturation Market With Bold, Unfiltered Strategy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-zinc-200">
                        <div className="space-y-4">
                            <h4 className="text-lg font-black uppercase tracking-widest">The Challenge</h4>
                            <p className="text-muted-foreground leading-relaxed font-sans">Most brands struggle with fragmented messaging and stagnant growth metrics, missing the opportunity to connect genuinely with their target audience in a meaningful way.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-black uppercase tracking-widest">Our Edge</h4>
                            <p className="text-muted-foreground leading-relaxed font-sans">We position your brand where it belongs: at the forefront of innovation. By blending data precision with creative daring, we turn potential into performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
