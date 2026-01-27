"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How do you determine custom pricing?",
        answer: "Our custom pricing is based on the specific scope of work, project duration, team size required, and specific goals. We conduct a thorough audit to provide a tailored proposal."
    },
    {
        question: "Is there a minimum contract period?",
        answer: "For most retainer services, we recommend a minimum 3-month commitment to see significant results. However, we also offer project-based contracts for specific deliverables."
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Absolutely. We understand business needs change. You can adjust your plan at the start of any new billing cycle with 30 days notice."
    },
    {
        question: "What is included in the 'Monthly Performance Report'?",
        answer: "The report includes key metrics (KPIs) relevant to your goals, such as traffic, engagement, conversion rates, and ROI analysis, along with actionable insights for the next month."
    },
    {
        question: "Do you offer refunds?",
        answer: "Due to the nature of digital services and the time invested, we typically do not offer refunds. However, we are committed to your satisfaction and will work to resolve any issues."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-zinc-950 text-white">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about working with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30"
                        >
                            <button
                                onClick={() => setOpenIndex(active => active === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground" />
                                )}
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: openIndex === i ? "auto" : 0,
                                    opacity: openIndex === i ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
