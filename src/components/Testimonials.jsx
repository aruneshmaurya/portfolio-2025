import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajkumar",
        role: "Founder, COPPERAA",
        niche: "Lifestyle",
        text: "Great Shopify work. Clean design and smooth delivery. The store looks premium and works perfectly across all devices.",
        initials: "RK"
    },
    {
        name: "Abhishek",
        role: "Founder, COPPRLY",
        niche: "Wellness",
        text: "Very professional Shopify setup and support. Communication was clear and the final result exceeded our expectations.",
        initials: "AB"
    },
    {
        name: "Himanshu",
        role: "Founder, DREZYY",
        niche: "Fashion & Apparel",
        text: "Our Shopify store looks modern and premium. The mobile experience is exactly what we needed for our customers.",
        initials: "HM"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-indigo-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-4">
                        CLIENT LOVE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        Don't take my word for it.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0D1526] border border-white/[0.06] rounded-2xl p-8 hover:border-indigo-accent/30 hover:shadow-[0_0_30px_rgba(91,110,245,0.08)] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-6 text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-300 text-base leading-relaxed italic mb-8 font-inter">
                                    "{item.text}"
                                </p>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.04]">
                                {/* Circle Avatar initials placeholder */}
                                <div className="w-11 h-11 rounded-full bg-indigo-accent/10 border border-indigo-accent/20 flex items-center justify-center text-indigo-accent font-bold font-sora text-sm shrink-0">
                                    {item.initials}
                                </div>
                                
                                <div>
                                    <div className="font-bold text-white text-base font-sora leading-tight">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-text-muted mt-1 font-inter">
                                        {item.role} <span className="text-indigo-accent/80 font-mono">| {item.niche}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
