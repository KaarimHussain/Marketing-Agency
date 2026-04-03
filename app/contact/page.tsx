import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-10 ">
            <ContactHero />

            <section className="py-24 relative overflow-hidden mt-20">
                {/* Background decoration */}
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none -translate-y-1/2" />

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
