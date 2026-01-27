"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Revenue Generated", value: "$50M+" },
    { label: "Average ROI", value: "300%" },
    { label: "Client Retention", value: "96%" },
    { label: "Campaigns Launched", value: "500+" },
];

export default function ImpactStats() {
    return (
        <section className="py-24 bg-zinc-950 border-y border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tighter">
                                {stat.value}
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base uppercase tracking-widest font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
