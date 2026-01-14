"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image"; // Assuming we might use Next.js Image for optimization, or basic img tags

const testimonials = [
    {
        id: 1,
        quote: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution.",
        name: "AARON FINCH",
        role: "CHIEF OPERATING OFFICER (COO)",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "Working with this team has been a transformative experience. They understood our brand voice immediately and delivered results that exceeded our expectations in every single metric.",
        name: "SARAH JENKINS",
        role: "MARKETING DIRECTOR",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "The strategic insights they provided helped us pivot our approach effectively. Their dedication to our success feels like a true partnership rather than just a vendor relationship.",
        name: "MICHAEL CHEN",
        role: "FOUNDER & CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                        Real People, Real <br /> Results Feedback
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
                        It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Normal Distribution Of Letters, As Opposed To Using 'Content Here'
                    </p>
                </div>

                {/* Deck of Cards Carousel */}
                <div className="relative w-full max-w-2xl h-[450px] md:h-[400px] flex items-center justify-center">

                    {/* Background Decorative Cards (The Stack Effect) */}
                    {/* Layer 2 (Bottom) */}
                    <div className="absolute w-[95%] h-full bg-[#1A1A1A] rounded-[2.5rem] rotate-[-6deg] translate-y-4 md:translate-x-[-20px] opacity-60 z-0"></div>
                    {/* Layer 1 (Middle) */}
                    <div className="absolute w-[98%] h-full bg-primary rounded-[2.5rem] rotate-[-3deg] translate-y-2 md:translate-x-[-10px] z-0"></div>

                    {/* Active Card Container */}
                    <div className="relative w-full h-full z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 bg-white rounded-[2.5rem] p-8 md:p-12 text-black flex flex-col justify-between shadow-2xl"
                            >
                                {/* Quote Icon */}
                                <Quote className="w-12 h-12 md:w-16 md:h-16 text-black fill-current mb-4" />

                                {/* Testimonial Text */}
                                <p className="text-lg md:text-xl font-bold leading-relaxed mb-8 line-clamp-4 md:line-clamp-none">
                                    {testimonials[current].quote}
                                </p>

                                {/* Profile Info & Controls */}
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary">
                                            <Image
                                                src={testimonials[current].image}
                                                alt={testimonials[current].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="font-black text-sm md:text-base uppercase tracking-wider">{testimonials[current].name}</h4>
                                            <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{testimonials[current].role}</span>
                                        </div>
                                    </div>

                                    {/* Manual Controls (Optional, usually good UX) */}
                                    <div className="flex gap-2">
                                        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                            <ArrowLeft className="w-5 h-5 text-black" />
                                        </button>
                                        <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                            <ArrowRight className="w-5 h-5 text-black" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
