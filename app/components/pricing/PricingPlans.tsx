"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Starter",
        price: "2,500",
        description: "Perfect for small businesses looking to establish a digital presence.",
        features: [
            "Social Media Management (2 Platforms)",
            "Basic SEO Optimization",
            "Monthly Performance Report",
            "Content Creation (5 Posts/mo)",
            "Email Support",
        ],
        highlight: false,
    },
    {
        name: "Growth",
        price: "5,000",
        description: "Ideal for growing brands that need consistent engagement and leads.",
        features: [
            "Social Media Management (4 Platforms)",
            "Advanced SEO & Keyword Strategy",
            "Bi-Weekly Performance Reports",
            "Content Creation (12 Posts/mo)",
            "Paid Ad Management (Up to $1k spend)",
            "Priority Email & Chat Support",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale marketing solutions for established organizations.",
        features: [
            "Omni-channel Strategy",
            "Dedicated Account Manager",
            "Weekly Performance Meetings",
            "Unlimited Content Creation",
            "Full-Service Ad Management",
            "24/7 Priority Support",
            "Custom Development Hours",
        ],
        highlight: false,
    },
];

export default function PricingPlans() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24 bg-black text-white relative">
            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto">
                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-zinc-900 p-1 rounded-full flex items-center relative">
                        <motion.div
                            className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full z-0"
                            animate={{ x: isYearly ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <div className="absolute left-[calc(50%+4px)] top-1 bottom-1 w-[calc(50%-8px)] pointer-events-none opacity-0" /> {/* Spacer */}

                        <button
                            onClick={() => setIsYearly(false)}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${!isYearly ? "text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isYearly ? "text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                            Yearly <span className="text-[10px] ml-1 text-green-400 font-bold">-20%</span>
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative p-8 rounded-3xl border flex flex-col ${plan.highlight
                                    ? "bg-zinc-900/50 border-primary/50 shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]"
                                    : "bg-black border-white/10"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price === "Custom" ? "Custom" : `$${isYearly ? (parseInt(plan.price.replace(',', '')) * 0.8).toLocaleString() : plan.price}`}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-muted-foreground mb-1">/mo</span>
                                    )}
                                </div>
                                {isYearly && plan.price !== "Custom" && (
                                    <p className="text-xs text-green-400 mt-1">Billed yearly, save 20%</p>
                                )}
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "default" : "outline"}
                                className={`w-full rounded-full font-semibold ${!plan.highlight && "border-white/20 hover:bg-white/10 text-white hover:text-white"}`}
                            >
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
