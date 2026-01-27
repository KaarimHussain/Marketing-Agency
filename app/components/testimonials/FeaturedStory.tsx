"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function FeaturedStory() {
    return (
        <section className="py-24 bg-black text-white relative">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Video/Image Side */}
                        <div className="relative h-[400px] lg:h-auto min-h-[500px] group cursor-pointer">
                            <Image
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                                alt="Featured Client - CEO of TechFlow"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        TF
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">TechFlow Inc.</h3>
                                        <p className="text-sm text-muted-foreground">Series B SaaS</p>
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    "Arham Marketing didn't just run ads; they completely re-engineered our go-to-market strategy. The results were immediate and transformative."
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    Within 90 days, we saw a 200% increase in qualified leads and a 40% reduction in CAC. Their team operates as a true extension of our own.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="font-bold text-white">Sarah Williams</p>
                                    <p className="text-primary text-sm">CMO at TechFlow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
