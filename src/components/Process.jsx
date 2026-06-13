import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "We jump on a free 30-min call. I understand your brand, goals, competitors, and what success looks like for you."
        },
        {
            num: "02",
            title: "Proposal",
            desc: "You receive a detailed scope document, wireframe direction, project timeline, and a fixed price. No hidden charges."
        },
        {
            num: "03",
            title: "Build & Review",
            desc: "I build the store in stages — you review progress and give feedback at every checkpoint. Full transparency, always."
        },
        {
            num: "04",
            title: "Launch & Support",
            desc: "We go live. I handle the technical domain connection, checkout setup, and stay available for 30 days post-launch support."
        }
    ];

    return (
        <section id="process" className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="eyebrow-label mb-4">
                        MY PROCESS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        From brief to launch — no guesswork, no surprises.
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Dashed Connector Line (Desktop only) */}
                    <div className="absolute top-10 left-[12%] right-[12%] h-0.5 border-t border-dashed border-indigo-accent/30 z-0 hidden lg:block"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                            >
                                {/* Circle Number Indicator */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-accent to-purple-accent flex items-center justify-center text-white text-xl font-bold font-sora shadow-lg shadow-indigo-950/50 mb-8 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                                    {step.num}
                                </div>

                                {/* Step Title */}
                                <h3 className="text-xl font-bold text-white mb-4 font-sora tracking-tight">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-text-muted leading-relaxed font-inter text-sm lg:text-base max-w-sm lg:max-w-none">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
