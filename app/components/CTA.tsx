"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 w-full bg-primary relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-black/10 rounded-full blur-[80px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Ready to Make an Impact?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Let's collaborate to build something that not only looks good but performs exceptionally.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-8 rounded-full text-base font-semibold group"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
