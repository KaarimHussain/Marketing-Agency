"use client";

import Marquee from "react-fast-marquee";

const brandLogos = [
    { name: "Global" },
    { name: "Enterprise" },
    { name: "Solutions" },
    { name: "Creative" },
    { name: "Innovation" },
    { name: "Dynamic" },
];

export default function TrustLogos() {
    return (
        <section className="w-full bg-black py-12 border-y border-white/5 overflow-hidden">
            <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="text-muted-foreground/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                        Trusted by industry leaders
                    </span>
                    <div className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
                </div>
                
                <Marquee gradient={true} gradientColor="black" speed={40} className="opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {brandLogos.map((logo, i) => (
                        <div key={i} className="mx-12 text-2xl md:text-3xl font-black text-white flex items-center gap-3 select-none">
                            <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                                <div className="h-3 w-3 bg-primary rounded-sm rotate-45" />
                            </div>
                            <span className="tracking-tighter uppercase">{logo.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless effect */}
                    {brandLogos.map((logo, i) => (
                        <div key={`dup-${i}`} className="mx-12 text-2xl md:text-3xl font-black text-white flex items-center gap-3 select-none">
                            <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                                <div className="h-3 w-3 bg-primary rounded-sm rotate-45" />
                            </div>
                            <span className="tracking-tighter uppercase">{logo.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
