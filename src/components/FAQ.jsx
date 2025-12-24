import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
        answer: 'Simply click the "Start Your Project" button, fill out the form, and I will get back to you within 24 hours to discuss your project requirements.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-[#030014]">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about the process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {activeIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
