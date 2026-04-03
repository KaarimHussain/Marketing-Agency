"use client";

import { motion } from "framer-motion";

export default function WorkHero() {
    return (
        <section className="relative w-full h-[80vh] flex flex-col justify-center items-center bg-black overflow-hidden pt-35">

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
                >
                    Our Portfolio
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Selected <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-primary">
                        Work.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl text-lg md:text-xl text-muted-foreground"
                >
                    A collection of brands we've helped standout, scale, and succeed.
                </motion.p>
            </div>
        </section>
    );
}
