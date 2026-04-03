"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";

const team = [
    {
        name: "Arham Hussain",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        bio: "Visionary leader with a passion for digital transformation.",
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        bio: "Crafting narratives that resonate and convert.",
    },
    {
        name: "David Chen",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        bio: "Building the digital infrastructure of tomorrow.",
    },
    {
        name: "Emily Rodriguez",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        bio: "Turning abstract concepts into stunning visual realities.",
    }
];

export default function Team() {
    return (
        <section className="py-32 bg-zinc-950 text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">OUR TEAM</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Meet The Minds</h2>
                    <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
                        The talented individuals driving innovation and success for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-zinc-900 mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex gap-4 mb-2">
                                        <Linkedin className="w-5 h-5 text-white hover:text-primary cursor-pointer transition-colors" />
                                        <Twitter className="w-5 h-5 text-white hover:text-primary cursor-pointer transition-colors" />
                                        <Globe className="w-5 h-5 text-white hover:text-primary cursor-pointer transition-colors" />
                                    </div>
                                    <p className="text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
