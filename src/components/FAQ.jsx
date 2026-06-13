import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Do you only work with Shopify?',
        answer: 'Yes, I specialize exclusively in Shopify to provide the highest quality service. This allows me to be an expert in the platform, ensuring your store is built with best practices and the latest features.'
    },
    {
        question: 'How long does it take to build a store?',
        answer: 'A standard store typically takes 1-2 weeks depending on the complexity and your responsiveness. The Starter plan can be ready in as little as 5 days.'
    },
    {
        question: 'Do you provide support after launch?',
        answer: 'Yes! I provide 1 week of post-launch support to ensure everything runs smoothly. For ongoing maintenance, updates, or bug fixes, you can opt for my "Ongoing Support" service.'
    },
    {
        question: 'Can you redesign an existing Shopify store?',
        answer: 'Absolutely. I can give your existing store a complete makeover to improve its design, user experience, and conversion rate without losing your data.'
    },
    {
        question: 'How do I get started?',
        answer: 'Simply click the "Start Your Project" button to chat with me directly on WhatsApp, and we can start discussing your project requirements right away.'
    },
    {
        question: 'What is your revision policy?',
        answer: 'I offer up to 3 rounds of revisions per milestone. My goal is that you\'re 100% happy before we move forward.'
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Yes. I work with brands globally. Communication is in English and all payments are accepted via international methods.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-muted text-lg font-inter">
                        Everything you need to know about my Shopify development services.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="divide-y divide-white/[0.08]">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className="py-6 first:pt-0 last:pb-0">
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                                >
                                    <span className="text-lg font-bold text-white group-hover:text-indigo-accent transition-colors font-sora pr-4">
                                        {faq.question}
                                    </span>
                                    
                                    {/* Plus / Minus Indicator in Indigo */}
                                    <div className="w-6 h-6 flex items-center justify-center shrink-0 relative">
                                        <div className="w-4 h-0.5 bg-indigo-accent rounded"></div>
                                        <motion.div
                                            initial={{ rotate: 90 }}
                                            animate={{ rotate: isOpen ? 0 : 90 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-0.5 h-4 bg-indigo-accent rounded absolute"
                                        ></motion.div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-4 text-text-muted leading-relaxed font-inter text-base">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
