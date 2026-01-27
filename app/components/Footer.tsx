"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white relative pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">

                    {/* Left Column: Newsletter */}
                    <div className="flex flex-col gap-6 max-w-md">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Sign up for our <br /> newsletter today.
                        </h2>
                        <div className="flex items-center gap-2 w-full max-w-sm">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="bg-zinc-900 border-white/10 text-white rounded-lg h-12 focus-visible:ring-primary"
                            />
                            <Button className="bg-primary text-black hover:bg-primary/90 h-12 px-6 rounded-lg font-bold">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            No spam, Just valued update.
                        </p>
                    </div>

                    {/* Right Column: Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
                        {/* Main Pages */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-lg mb-2">Main Pages</h4>
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Company</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Works</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Resources</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Career</Link>
                        </div>

                        {/* Inner Pages */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-lg mb-2">Inner Pages</h4>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Works Details</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Resource Details</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Details</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Service Details</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Career Details</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                        </div>

                        {/* Utility Pages */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-lg mb-2">Utility Pages</h4>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">License</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Change Log</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Style Guide</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Password</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Coming Soon</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Request a Demo</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">404</Link>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-lg mb-2">Social Media</h4>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                        </div>
                    </div>
                </div>


            </div>
            <div className="relative pt-20 mx-auto px-4 md:px-8">
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-500">
                    <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
                    <p className="text-center md:text-left">© Copyright 2025 | Design & Developed By Vesol Marketing</p>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
                {/* Giant Watermark Text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] pointer-events-none select-none w-full text-center overflow-hidden">
                    <h1 className="text-[3rem] md:text-[27rem] text-white/5 leading-none whitespace-nowrap font-bold">
                        VESOL
                    </h1>
                </div>
            </div>

        </footer>
    );
}
