"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Message sent! (Simulation)");
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-zinc-900/50 p-8 rounded-3xl border border-white/10"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-gray-600 h-12" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-gray-600 h-12" required />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Interest</label>
                        <Select>
                            <SelectTrigger className="bg-black/50 border-white/10 text-gray-300 h-12 hover:bg-black/70 hover:text-white transition-colors">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-white/10 text-white">
                                <SelectItem value="branding">Branding</SelectItem>
                                <SelectItem value="web-design">Web Design</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-gray-300">Budget Range</label>
                        <Select>
                            <SelectTrigger className="bg-black/50 border-white/10 text-gray-300 h-12 hover:bg-black/70 hover:text-white transition-colors">
                                <SelectValue placeholder="Select a budget" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-white/10 text-white">
                                <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                                <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                                <SelectItem value="50k+">$50k+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-gray-600 min-h-[150px]" required />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-semibold bg-white text-black hover:bg-gray-200" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>
            </form>
        </motion.div>
    );
}
