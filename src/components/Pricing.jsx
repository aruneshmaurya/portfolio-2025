import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: 'Starter Store',
        price: '₹14,999',
        description: 'Best for beginners and small brands.',
        features: [
            'Shopify store setup',
            'Theme-based home page',
            'Domain connection',
            'Up to 10 products',
            'Up to 5 collections',
            'Payment gateway setup',
            'Basic shipping setup',
            'Mobile responsive design'
        ],
        notIncluded: [
            'Copywriting',
            'Blog setup',
            'Custom sections',
            'Tracking integrations',
            'SEO / ads',
            'Product photo editing'
        ]
    },
    {
        name: 'Growth Store',
        price: '₹18,999',
        popular: true,
        description: 'Best for growing D2C and product brands.',
        features: [
            'Everything in Starter',
            'Professional Shopify website',
            'Advanced homepage layout',
            'Up to 45 products',
            'Unlimited collections',
            'Brand styling (colors & fonts)',
            'Trust badges',
            'Product reviews app',
            'Payment & delivery setup',
            'WhatsApp integration',
            'Legal pages (Privacy, Refund, T&C)',
            'Fully responsive design'
        ],
        notIncluded: [
            'Blog setup',
            'Copywriting',
            'New custom sections',
            'Tracking integrations',
            'Advanced shipping rules',
            'SEO / Ads',
            'Product image editing',
            'Redesign later'
        ]
    },
    {
        name: 'Brand Store',
        price: '₹27,999',
        description: 'Best for brands looking to scale.',
        features: [
            'Everything in Growth',
            'Up to 100 products',
            '2–3 professional banners',
            '2 product copywriting',
            'Social proof / trust section',
            'Order tracking button',
            'Clickable email & phone',
            'Custom Contact Us page',
            'Custom FAQs page',
            'UX polish & layout refinement'
        ],
        notIncluded: []
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Choose the package that fits your business stage. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 border hover:bg-white/5 transition-all ${plan.popular
                                ? 'bg-white/10 border-primary shadow-[0_0_30px_rgba(109,40,217,0.3)] md:-mt-8 md:p-10'
                                : 'bg-white/5 border-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                            <div className="text-4xl font-bold mb-8">{plan.price}</div>

                            <a
                                href="#contact"
                                className={`block w-full py-3 rounded-lg font-semibold text-center mb-8 transition-all ${plan.popular
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                Choose {plan.name}
                            </a>

                            <div className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={18} className="text-green-400 shrink-0 mt-1" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}

                                {plan.notIncluded && plan.notIncluded.length > 0 && (
                                    <div className="pt-4 mt-4 border-t border-white/10 space-y-4 opacity-50">
                                        {plan.notIncluded.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <X size={18} className="text-gray-500 shrink-0 mt-1" />
                                                <span className="text-gray-400 text-sm line-through">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-gray-500 text-sm">
                    Any feature not listed above will be charged separately as an add-on.
                </div>
            </div>
        </section>
    );
};

export default Pricing;
