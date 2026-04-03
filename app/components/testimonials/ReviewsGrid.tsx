"use client";

import { motion } from "framer-motion";
import { Twitter, Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        type: "review",
        name: "Alex Johnson",
        role: "Founder, Bloom & Co.",
        content: "Detailed and thoughtful execution. They didn't just market our product; they understood our ethos and communicated it perfectly.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        type: "tweet",
        name: "Elena Rodriguez",
        handle: "@elenadesign",
        content: "Just saw the new campaign from Vesol Marketing. Honestly? Blown away. The animation quality is next level. 🚀",
        date: "2h ago",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
        type: "review",
        name: "Marcus Chen",
        role: "CTO, NexusStream",
        content: "We've worked with three other agencies before. Vesol is the first one to actually deliver on their ROI promises. The data speaks for itself.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        type: "highlight",
        content: "Outstanding creativity met with rigorous strategic planning. A rare find.",
        author: "The Daily Tech",
    },
    {
        type: "review",
        name: "Sarah Miller",
        role: "VP Marketing, Solstice",
        content: "The rebranding project was a massive undertaking, but the team handled it with grace and precision. Our internal engagement has never been higher.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        rating: 5,
    },
    {
        type: "tweet",
        name: "David Kim",
        handle: "@dkim_dev",
        content: "Working with the Vesol team has been a breath of fresh air. No corporate jargon, just straight talk and great work. 💯",
        date: "5h ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        type: "review",
        name: "Priya Patel",
        role: "CEO, GreenLeaf",
        content: "They helped us navigate a PR crisis and turn it into a brand-building opportunity. Forever grateful for their swift action.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        type: "review",
        name: "Priya Patel",
        role: "CEO, GreenLeaf",
        content: "They helped us navigate a PR crisis and turn it into a brand-building opportunity. Forever grateful for their swift action.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        type: "review",
        name: "Priya Patel",
        role: "CEO, GreenLeaf",
        content: "They helped us navigate a PR crisis and turn it into a brand-building opportunity. Forever grateful for their swift action.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
];

export default function ReviewsGrid() {
    return (
        <section className="py-32 bg-black text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">TESTIMONIALS</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Wall of Love</h2>
                    <p className="text-muted-foreground text-lg md:text-xl">What people are saying across the web.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="break-inside-avoid"
                        >
                            {item.type === "review" && (
                                <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-colors">
                                    <div className="flex gap-1 text-primary mb-4">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-6 leading-relaxed">"{item.content}"</p>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={item.image!}
                                            alt={item.name!}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover w-10 h-10"
                                        />
                                        <div>
                                            <p className="font-bold text-sm">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.type === "tweet" && (
                                <div className="bg-white text-black p-6 rounded-2xl hover:bg-gray-100 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={item.image!}
                                                alt={item.name!}
                                                width={40}
                                                height={40}
                                                className="rounded-full object-cover w-10 h-10"
                                            />
                                            <div>
                                                <p className="font-bold text-sm">{item.name}</p>
                                                <p className="text-xs text-gray-500">{item.handle}</p>
                                            </div>
                                        </div>
                                        <Twitter className="w-5 h-5 text-blue-400 fill-current" />
                                    </div>
                                    <p className="text-gray-900 mb-2 leading-tight font-medium">{item.content}</p>
                                    <p className="text-xs text-gray-400">{item.date}</p>
                                </div>
                            )}

                            {item.type === "highlight" && (
                                <div className="bg-linear-to-br from-primary to-purple-600 p-8 rounded-2xl text-white flex flex-col items-center text-center justify-center min-h-[200px]">
                                    <Quote className="w-8 h-8 opacity-50 mb-4" />
                                    <p className="text-xl font-bold font-serif italic leading-tight mb-4">"{item.content}"</p>
                                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest">— {item.author}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
