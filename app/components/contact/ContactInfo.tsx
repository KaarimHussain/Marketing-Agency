"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const contactDetails = [
    {
        icon: <Mail className="w-6 h-6 text-primary" />,
        title: "Email",
        value: "hello@arhammarketing.com",
        link: "mailto:hello@arhammarketing.com"
    },
    {
        icon: <Phone className="w-6 h-6 text-primary" />,
        title: "Phone",
        value: "+1 (555) 123-4567",
        link: "tel:+15551234567"
    },
    {
        icon: <MapPin className="w-6 h-6 text-primary" />,
        title: "Office",
        value: "123 Creative Blvd, Design District, NY 10012",
        link: "#"
    }
];

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full"
        >
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
                <p className="text-muted-foreground text-lg">
                    Whether you have a specific project in mind or just want to explore what's possible, we're here to help.
                </p>
            </div>

            <div className="space-y-8 mb-12">
                {contactDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-zinc-900 border border-white/10">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">{item.title}</h3>
                            <a href={item.link} className="text-gray-400 hover:text-white transition-colors">
                                {item.value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-4">
                {[
                    { icon: <Instagram className="w-5 h-5" />, href: "#" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                    { icon: <Twitter className="w-5 h-5" />, href: "#" },
                    { icon: <Facebook className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
