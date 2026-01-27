"use client";

import { motion } from "framer-motion";

export default function TestimonialsHero() {
    return (
        <section className="relative w-full h-[50vh] flex flex-col justify-center items-center bg-black overflow-hidden pt-20">
            {/* Background Glows (Consistent) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
                >
                    Client Success
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Stories of <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-primary">
                        Impact.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl text-lg md:text-xl text-muted-foreground"
                >
                    Don't just take our word for it. Hear from the visionary leaders we've partnered with.
                </motion.p>
            </div>
        </section>
    );
}
