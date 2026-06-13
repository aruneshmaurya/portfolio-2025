import { motion } from 'framer-motion';

const Results = () => {
    const stats = [
        {
            value: "50+",
            label: "Shopify Stores Delivered",
            delay: 0.1
        },
        {
            value: "3x",
            label: "Average Conversion Lift",
            delay: 0.2
        },
        {
            value: "91+",
            label: "Average PageSpeed Score",
            delay: 0.3
        },
        {
            value: "100%",
            label: "Client Retention Rate",
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Subtle glow underneath the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        Results That Speak
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto font-inter">
                        Not just beautiful stores — stores built to perform and generate revenue.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0D1526] border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group hover:border-indigo-accent/35 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Inner radial gradient glow behind value */}
                            <div className="absolute top-[30%] w-20 h-20 bg-indigo-accent/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Stat Value */}
                            <span className="text-4xl md:text-5xl font-black mb-4 font-sora tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-accent to-purple-accent">
                                {stat.value}
                            </span>

                            {/* Stat Label */}
                            <span className="text-sm md:text-base text-text-muted font-medium font-inter">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
