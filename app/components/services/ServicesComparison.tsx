"use client";

import { Check, X } from "lucide-react";

export default function ServicesComparison() {
    return (
        <section className="bg-black py-32 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
             {/* Background Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                 <div className="text-center mb-24 space-y-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">Compare The System</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                        Why One-Team <br /> System Works Better
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full relative z-10">
                    
                    {/* The Old Way */}
                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 space-y-12 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="space-y-2">
                             <div className="h-10 w-10 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
                                <X className="w-5 h-5 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-sans">Fragmented Agencies</h3>
                        </div>
                        
                        <ul className="space-y-6">
                            {[
                                "Inconsistent brand voice and design",
                                "Siloed data that doesn't talk to each other",
                                "Conflicting strategies and timelines",
                                "Finger-pointing when things go wrong",
                                "Extremely high overhead costs"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-muted-foreground">
                                    <div className="mt-1 h-5 w-5 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                        <X className="w-3 h-3 text-red-500" />
                                    </div>
                                    <span className="text-sm font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Integrated Way */}
                    <div className="bg-primary/10 border border-primary/20 rounded-[3rem] p-10 md:p-16 space-y-12 ring-2 ring-primary/40 relative group overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-linear-to-r from-transparent via-white/5 to-transparent rotate-45 transform -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none" />

                        <div className="space-y-2">
                             <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/20 animate-pulse">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-sans">The Integrated System</h3>
                        </div>
                        
                        <ul className="space-y-6">
                            {[
                                "Pixel-perfect brand consistency",
                                "Omnichannel data synchronization",
                                "Zero friction, one-team communication",
                                "Accountability across the entire ecosystem",
                                "Maximized ROI with shared efficiencies"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-white font-medium">
                                    <div className="mt-1 h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center border border-primary/20">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
