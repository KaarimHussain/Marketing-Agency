"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
    return (
        <section className="py-24 w-full bg-black text-white overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] w-full rounded-3xl overflow-hidden group"
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
                    <div className="flex flex-col gap-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight"
                        >
                            Building The Future, <br />
                            <span className="text-primary">One Brand at a Time.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Founded in 2020, Arham Marketing began with a simple belief: that digital marketing shouldn't just be about noise—it should be about connection. We started as a small team of dreamers and have grown into a powerhouse of creative strategy.
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
        </section>
    );
}
