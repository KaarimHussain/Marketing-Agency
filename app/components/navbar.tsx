"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 flex justify-center lg:pt-5 pt-2 px-2 lg:px-0 transition-all duration-300 pointer-events-none">
                <motion.div
                    initial={{ width: "90%", borderRadius: "1rem", padding: "1.25rem" }}
                    animate={{
                        width: isScrolled ? "100%" : "90%", // Mobile default to 90%, expand to 100%
                        maxWidth: isScrolled ? "100%" : "64rem", // 64rem is roughly max-w-5xl
                        borderRadius: isScrolled ? "0px" : "12px",
                        y: isScrolled ? (typeof window !== 'undefined' && window.innerWidth >= 1024 ? -20 : -8) : 0, // Remove the top margin visually by moving up
                        padding: "1rem 1.5rem", // Consistent padding
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`backdrop-blur-md border border-primary/5 shadow-lg pointer-events-auto ${isScrolled ? "border-x-0! border-t-0! bg-primary-foreground" : "bg-primary/10"
                        }`}
                >
                    {/* Inner Grid Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">
                        {/* Left: Logo */}
                        <div className="flex items-center justify-start">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="size-4 bg-primary rounded-sm group-hover:rotate-45 transition-transform duration-300" />
                                <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>
                                    Markeio
                                </span>
                            </Link>
                        </div>

                        {/* Center: Desktop Links */}
                        <div className="hidden md:flex items-center justify-center gap-8">
                            {["Company", "Work", "Pricing", "Resources"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className={`text-sm font-medium text-muted-foreground transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/70"}`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center justify-end gap-4">
                            {/* Contact Button */}
                            <Button className={`hidden md:flex ${isScrolled ? "bg-primary text-white hover:bg-primary/80" : "bg-white text-black hover:bg-gray-200 hover:text-black font-bold h-9 px-6"}`}>
                                CONTACT NOW
                            </Button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden p-2 text-white hover:bg-white/10 rounded-md"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl pt-28 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center text-center">
                            {["Company", "Work", "Pricing", "Resources"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 mt-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="text-sm font-semibold text-white">Available for Work</span>
                            </div>
                            <Button className="w-full max-w-xs bg-white text-black hover:bg-gray-200 font-bold mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                                CONTACT NOW
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}