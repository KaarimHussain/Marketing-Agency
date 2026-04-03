"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Bot, Users, Mail, Command } from "lucide-react";

const services = [
    {
        title: "Content Marketing",
        description: "Create and distribute valuable content to attract and engage",
        icon: Command, // Using Command icon as a proxy for the 'Content' symbol
    },
    {
        title: "Marketing Automation",
        description: "Streamline marketing processes and deliver experiences at scale",
        icon: Bot,
    },
    {
        title: "Influencer Marketing",
        description: "Partner with trusted voices to amplify your brand's reach",
        icon: Users,
    },
    {
        title: "Email Marketing",
        description: "Create and distribute valuable content to attract and engage",
        icon: Mail,
    },
];

export default function Solutions() {
    return (
        <section className="w-full bg-black py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight">
                        Solution Tailored <br /> For Your Growth
                    </h2>
                    <div className="flex flex-col items-start gap-6 max-w-sm">
                        <p className="text-muted-foreground text-lg">
                            We Fuel Bold Ideas Driving Them Forward With Sharp Strategy
                        </p>
                        <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-96 rounded-3xl p-8 flex flex-col justify-between border border-white/5 bg-primary/10 transition-all duration-300 hover:z-10 hover:bg-white hover:rotate-6 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                            {/* Content Container - Needs to change color on hover */}
                            <div className="relative z-10 flex flex-col justify-between h-full group-hover:text-white transition-colors duration-300">
                                {/* Top: Icon & Title */}
                                <div className="flex flex-col gap-6">
                                    <div className="h-12 w-12 rounded-xl border border-white/10 group-hover:border-black/10 flex items-center justify-center">
                                        <service.icon className="h-6 w-6 text-white group-hover:text-black/70 transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-black/80 transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Bottom: Description */}
                                <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                            <div className="absolute inset-0 rounded-3xl group-hover:-rotate-3 group-hover:scale-105 transition-transform duration-300 origin-center border border-transparent group-hover:border-white/20 pointer-events-none" />

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
