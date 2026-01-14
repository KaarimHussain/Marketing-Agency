"use client";

import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Beginners",
        price: "$799",
        description: "Start your journey with essential tools and expert guidance",
        features: [
            "Foundational strategy and setup",
            "Simple monthly report Brands Trusted",
            "Trusted by Leading Brands Trusted",
            "Monthly check-in call",
            "Basic content creation plan"
        ],
        highlight: false,
    },
    {
        name: "Professional",
        price: "$999",
        description: "Scale your marketing with advanced features and dedicated support",
        features: [
            "Comprehensive multi-channel strategy",
            "Advanced content calendar design",
            "Priority for email and phone support 24/7",
            "Detailed and weekly/monthly analytic report",
            "Custom 5 landing page creation"
        ],
        highlight: true, // This is the Middle Card
    },
    {
        name: "Enterprise",
        price: "$1035",
        description: "Unlock maximum potential with custom strategy and unlimited capacity",
        features: [
            "Real-time dashboards and reporting",
            "24/7 designated account manager support",
            "Quarterly business strategy meeting weekly",
            "High-volume custom campaigns",
            "Full marketing automation setup"
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8" id="pricing">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-medium bg-primary/5">
                        Our Plans
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Pricing and Plans <br /> Tailored to any Team
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        We offer flexible, custom-fit plans designed to meet the unique needs and budget of your team
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col relative p-8 rounded-3xl border transition-all duration-300",
                                plan.highlight
                                    ? "bg-linear-to-t from-primary/20 to-transparent border-white/10 ring-1 ring-white/10" // Highlight card style
                                    : "bg-zinc-900 border-white/5" // Standard card style
                            )}
                        >
                            {/* Icon Placeholder (as seen in image) */}
                            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-6">
                                {plan.highlight ? (
                                    <div className="w-4 h-4 rounded-sm border md:border-2 border-dashed border-primary" />
                                ) : (
                                    <div className="w-4 h-4 rounded-full border md:border-2 border-white/30" />
                                )}
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-muted-foreground text-sm">/per month</span>
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                            <p className="text-sm text-gray-400 mb-8 min-h-[40px]">
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <Button
                                className={cn(
                                    "w-full h-12 rounded-lg font-semibold mb-10 transition-transform active:scale-95",
                                    plan.highlight
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(143,51,230,0.5)]"
                                        : "bg-white text-black hover:bg-gray-200"
                                )}
                            >
                                Get Started <span className="ml-1">→</span>
                            </Button>

                            {/* Features List */}
                            <div className="flex flex-col gap-4 mt-auto">
                                <span className="text-sm font-semibold text-white">Features</span>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                            <div className="mt-0.5 min-w-4 min-h-4 rounded-full border border-white/20 flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-white" />
                                            </div>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
