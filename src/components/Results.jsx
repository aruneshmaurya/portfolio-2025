import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState('0');
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Parse value to find the number and surrounding prefix/suffix
        const numberPattern = /\d+/;
        const match = value.match(numberPattern);
        
        if (!match) {
            setCount(value);
            return;
        }

        const numericVal = parseInt(match[0], 10);
        const prefix = value.substring(0, value.indexOf(match[0]));
        const suffix = value.substring(value.indexOf(match[0]) + match[0].length);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTimestamp = null;
                    
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        
                        // Easing: ease-out cubic
                        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                        const currentVal = Math.floor(easeOutProgress * numericVal);
                        
                        setCount(`${prefix}${currentVal}${suffix}`);
                        
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(value); // Ensure final value is exact
                        }
                    };
                    
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [value, duration]);

    return <span ref={elementRef}>{count}</span>;
};

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
        <section className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Subtle glow underneath the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="eyebrow-label mb-4">
                        KEY METRICS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 font-sora mt-2">
                        Results That Speak
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto font-inter">
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
                            className="bg-bg-secondary border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group hover:border-accent/35 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Inner radial gradient glow behind value */}
                            <div className="absolute top-[30%] w-20 h-20 bg-accent/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Stat Value (Counter animation) */}
                            <span className="text-4xl md:text-5xl font-black mb-4 font-sora tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">
                                <CountUp value={stat.value} />
                            </span>

                            {/* Stat Label */}
                            <span className="text-sm md:text-base text-text-secondary font-medium font-inter">
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
