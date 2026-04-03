"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
    return (
        <section className="py-32 w-full bg-black text-white overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative aspect-square md:aspect-4/5 rounded-[4rem] overflow-hidden group border border-white/10"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                            alt="Team meeting and collaboration"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 flex flex-col gap-10">
                        <div className="space-y-4">
                            <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">OUR ORIGIN</span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none"
                            >
                                Building The Future, <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-primary">One Brand at a Time.</span>
                            </motion.h2>
                        </div>

                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed"
                            >
                                Founded in 2020, Vesol Marketing began with a simple belief: that digital marketing shouldn't just be about noise—it should be about connection. We started as a small team of dreamers and have grown into a powerhouse of creative strategy.
                            </motion.p>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed"
                            >
                                We don't follow trends; we set them. By combining data-driven insights with bold artistic vision, we help companies find their unique voice in a crowded marketplace.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
