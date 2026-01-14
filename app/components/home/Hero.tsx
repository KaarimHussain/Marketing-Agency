"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { memo } from "react";
import Image from "next/image";
import Globe from "@/assets/images/Globe.png";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden pt-32 pb-10 px-4 md:px-8">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-7xl mx-auto z-10 flex flex-col items-center gap-12"
            >
                {/* Header Content */}
                <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-primary/10 border border-white/5 text-xs font-medium text-muted-foreground">
                            <span className="bg-primary text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full">
                                New
                            </span>
                            No Hidden Pricing
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Fueling The Next <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-primary">
                            Generation Of Brands
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-muted/80 max-w-2xl"
                    >
                        Powering Bold Ideas With Strategy, Creativity And Growth. We help you
                        build a brand that stands out.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4 sm:w-auto w-full"
                    >
                        <Button
                            className="h-12 px-8 rounded-full text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all sm:w-auto w-full"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
                <BendoCardGrid />
            </motion.div>
        </section>
    );
}

const BendoCardGrid = memo(() => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    return (
        <>
            {/* Bento Grid layout - 5 Columns on Desktop */}
            <motion.div
                variants={itemVariants}
                className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-rows-3 gap-4 mt-8"
            >
                {/* Card 1: Visual Image (People) */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 h-64 md:h-auto relative group overflow-hidden rounded-3xl bg-card row-span-3">
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                </div>

                {/* Card 2: 100+ Clients */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-white text-black flex flex-col justify-center items-center group hover:-translate-y-1 transition-transform duration-300 row-span-2 ">
                    <h3 className="text-4xl font-bold tracking-tighter mb-2">100+</h3>
                    <p className="font-medium text-gray-600 leading-tight text-center">Our Esteemed <br /> Clients and Partners</p>
                </div>

                {/* Card 3: Trusted Growth */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-primary overflow-hidden group hover:border-primary/20 transition-colors row-span-1 flex flex-col justify-center">
                    <div className="relative z-10">
                        <h4 className="text-xl font-bold text-white mb-2 leading-tight">Trusted & <br />Transparent Growth</h4>
                    </div>
                    <ShieldCheck className="absolute bottom-[-20px] right-[-20px] w-32 h-32 text-white/5 group-hover:text-primary/10 transition-colors duration-300" />
                </div>

                {/* Card 4: 98.5% Chart */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-secondary-foreground overflow-hidden flex flex-col justify-between group row-span-2">
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-1">98.5%</h3>
                        <p className="text-xs text-muted/80">Client Satisfaction Rate</p>
                    </div>
                    <div className="flex items-end gap-2 h-16 mt-4">
                        {[40, 60, 45, 65, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`flex-1 rounded-t-sm ${i === 4 ? 'bg-primary' : 'bg-white/10'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Card 5: Global Enterprise */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-card group overflow-hidden flex flex-col justify-start min-h-[200px] group row-span-3">
                    <h2 className="text-6xl font-black z-2">
                        20+
                    </h2>
                    <p className="text-black/50 z-2">Global Enterprise drives innovation</p>
                    <div className="flex items-center gap-1 mt-4 text-sm z-2">
                        <span className="bg-black border border-primary/50 rounded-full px-3 py-1 text-secondary">Mexico</span>
                        <span className="bg-black border border-primary/50 rounded-full px-3 py-1 text-secondary">Australia</span>
                    </div>
                    <Image src={Globe} alt="Globe" className="sm:block hidden max-w-[350px] group-hover:-bottom-[30%] aspect-square object-cover object-center absolute -bottom-[50%] left-1/2 -translate-x-1/2 transition-all duration-500 grayscale group-hover:grayscale-0 z-0" />
                </div>
            </motion.div>
        </>
    )
})