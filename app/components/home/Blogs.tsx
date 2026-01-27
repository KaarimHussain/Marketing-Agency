"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        category: "Marketing",
        title: "Why Focusing on Vanity Metrics is the Hidden Cost",
        description: "Stop Mistaking Engagement for Revenue. We detail how to Audit Your Data and Pivot from Likes to tangible growth.",
        author: "Alistair Finch",
        date: "January 12, 2025",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "Clarity",
        title: "Build Hyper-Accurate Lookalike Audiences that Convert",
        description: "Stop wasting ad budget on generic targeting. We reveal the counter-intuitive data points that actually predict high-value customers.",
        author: "Liam Walker",
        date: "August 16, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "Revenue",
        title: "Fatal Flaw in Growth Strategy Why Focusing on First-Sale",
        description: "This article exposes the critical error that starves long-term profitability while optimizing solely for initial acquisition costs.",
        author: "Julian Reed",
        date: "June 24, 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    }
];

import Marquee from "react-fast-marquee";

export default function Blogs() {
    return (
        <section className="bg-white text-black pt-24 pb-0 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4 md:px-8 mb-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl leading-tight">
                        Market Insights <br /> and our Strategy
                    </h2>
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <p className="text-muted-foreground text-lg max-w-sm md:text-right">
                            We fuel bold ideas, driving them forward with sharp strategy
                        </p>
                        <Button className="rounded-full px-6 py-2 font-semibold transition-colors">
                            View Blogs <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link href={`/blog/${blog.id}`} key={blog.id} className="group flex flex-col gap-6 cursor-pointer">

                            {/* Image Container */}
                            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-white/5 bg-zinc-900">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4">
                                {/* Badge */}
                                <span className="w-fit px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-600 border border-zinc-200">
                                    {blog.category}
                                </span>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {blog.description}
                                    </p>
                                </div>

                                {/* Author/Meta */}
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200">
                                        <Image
                                            src={blog.authorImage}
                                            alt={blog.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-black">{blog.author}</span>
                                        <span className="text-xs text-muted-foreground">{blog.date}</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            {/* Marquee Section */}
            <div className="relative w-full py-20 bg-white">
                {/* Strip 1: Black */}
                <div className="absolute inset-0 flex items-center justify-center -rotate-2 z-10 scale-105">
                    <Marquee gradient={false} speed={50} className="bg-black text-white py-4 md:py-6 overflow-hidden">
                        {Array(10).fill("Let's Get Started").map((text, i) => (
                            <div key={i} className="flex items-center gap-8 mx-8">
                                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{text}</span>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Sparkle className="text-primary w-8 h-8" fill="currentColor" />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Strip 2: Lime/Green */}
                <div className="absolute inset-0 flex items-center justify-center rotate-2 z-0 scale-105">
                    <Marquee gradient={false} speed={50} direction="right" className="bg-primary text-black py-4 md:py-6 overflow-hidden">
                        {Array(10).fill("Let's Get Started").map((text, i) => (
                            <div key={i} className="flex items-center gap-8 mx-8">
                                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{text}</span>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Sparkle className="text-black w-8 h-8" fill="currentColor" />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
                {/* Spacer for height */}
                <div className="h-32 md:h-48 w-full" />
            </div>

        </section>
    );
}
