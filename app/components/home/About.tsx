"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const text = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a";
    const words = text.split(" ");

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeWordIndex, setActiveWordIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate start and end points for the animation
            // Start animation when the top of the element enters the bottom 25% of the viewport (starts earlier)
            const startPoint = windowHeight * 0.85;
            // End animation when the element is towards the top 25% of the viewport
            const endPoint = windowHeight * 0.25;

            // Calculate progress 0 to 1 based on vertical scroll position relative to viewport
            const scrollProgress = (startPoint - top) / (startPoint - endPoint);
            const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

            // Calculate which word should be active
            // We add a small buffer so the first word isn't immediately active if it's barely on screen
            const index = Math.floor(clampedProgress * words.length);
            setActiveWordIndex(index);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calc

        return () => window.removeEventListener('scroll', handleScroll);
    }, [words.length]);
    return (
        <>
            <section className="bg-white text-black py-24 px-4 md:px-8 rounded-t-[3rem] relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Text Content - Scroll Reveal Animation */}
                    <div className="mb-20 min-h-[200px]" ref={containerRef}>
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl flex flex-wrap gap-x-3 gap-y-1">
                            {words.map((word, i) => (
                                <span
                                    key={i}
                                    className={`transition-all duration-300 ${i <= activeWordIndex
                                        ? 'text-black opacity-100 blur-0'
                                        : 'text-gray-300 opacity-40 blur-[2px]'
                                        }`}
                                >
                                    {word}
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

                        {/* Left Image */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img
                                src="https://picsum.photos/id/3/800/600"
                                alt="Strategy Meeting"
                                className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                        </div>

                        {/* Right Image + CTA */}
                        <div className="flex flex-col gap-6">
                            <div className="relative group overflow-hidden rounded-2xl">
                                <img
                                    src="https://picsum.photos/id/101/800/600"
                                    alt="Working Team"
                                    className="w-full h-[300px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />
                            </div>

                            <div className="flex justify-between items-end border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-bold w-1/2 leading-tight">Our Bold And <br />Brilliant Thinkers</h3>
                                <Button className="flex items-center gap-2 transition-colors px-5 py-2 rounded-md font-semibold text-sm">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}