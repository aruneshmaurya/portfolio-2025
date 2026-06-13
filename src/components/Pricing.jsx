import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter Store',
        price: '₹14,999',
        description: 'For new brands launching their first Shopify store.',
        features: [
            '10 Product listings included',
            'Premium conversion theme setup',
            'High-converting Homepage layout',
            'Essential Shopify checkout configuration',
            'Payment gateway integration',
            'Domain connection & launch setup',
            'Mobile responsive layout',
            '7 Days post-launch support'
        ]
    },
    {
        name: 'Growth Store',
        price: '₹18,999',
        popular: true,
        description: 'For D2C brands that need design, speed, and conversions.',
        features: [
            'Everything in Starter',
            'Custom typography & brand styling',
            'Advanced custom Homepage sections',
            'Up to 45 products setup',
            'Trust badges & reviews app setup',
            'WhatsApp messaging integration',
            'Pages setup (About, Contact, T&C, Refund)',
            'Dynamic filtering & search',
            'Speed & Core Web Vitals tuning',
            '15 Days post-launch support'
        ]
    },
    {
        name: 'Brand Store',
        price: '₹27,999',
        description: 'For established brands needing a fully custom flagship store.',
        features: [
            'Everything in Growth',
            'Up to 100 products configured',
            'Custom banner graphics (2-3 designs)',
            'High-converting copywriting for 2 products',
            'Advanced checkout styling',
            'Order tracking page configuration',
            'Custom FAQ accordion page setup',
            'Post-purchase recommendation apps',
            'Advanced custom landing pages',
            '30 Days post-launch support'
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="eyebrow-label mb-4">
                        TRANSPARENT PRICING
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        Simple, honest pricing for serious brands.
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto font-inter">
                        No hidden charges. No scope creep surprises. What you see is what you pay.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                                plan.popular
                                    ? 'popular-pricing-card shadow-[0_0_45px_rgba(91,110,245,0.15)] lg:scale-[1.03] z-10'
                                    : 'bg-[#0D1526]/50 border-white/[0.06] hover:bg-[#0D1526] hover:border-white/[0.12]'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-accent to-purple-accent text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-sora">{plan.name}</h3>
                                <p className="text-text-muted text-sm mb-6 font-inter min-h-[40px]">{plan.description}</p>
                                <div className="text-4xl font-extrabold text-white mb-8 font-sora tracking-tight">
                                    {plan.price}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-text-muted font-inter text-sm">
                                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-accent/15 text-indigo-accent shrink-0 mt-0.5">
                                                <Check size={12} strokeWidth={3} />
                                            </span>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-center transition-all ${
                                    plan.popular
                                        ? 'bg-gradient-to-r from-indigo-accent to-purple-accent text-white shadow-lg hover:shadow-[0_0_20px_rgba(91,110,245,0.3)] hover:scale-[1.02]'
                                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                                }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                Choose {plan.name.split(' ')[0]} →
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Copy */}
                <div className="text-center mt-16 pt-8 border-t border-white/[0.04]">
                    <p className="text-text-muted text-sm md:text-base font-inter">
                        Also available: <span className="text-white font-semibold">Monthly Maintenance from ₹3,999/month</span> | Custom enterprise quotes available
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
