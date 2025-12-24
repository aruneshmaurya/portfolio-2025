import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const Maintenance = () => {
    const includedFeatures = [
        'Bug fixes (theme & layout related)',
        'Small text/content changes (up to 5 per month)',
        'Offer & banner updates (existing sections only)',
        'App issue troubleshooting',
        'Payment & shipping issue support',
        'Order & checkout related fixes',
        'WhatsApp & email notification fixes',
        'Theme & app updates',
        'Basic monthly store health check'
    ];

    const notIncludedFeatures = [
        'New product uploads',
        'Product copywriting',
        'Blog creation',
        'New custom sections',
        'Website redesign',
        'SEO or Ads',
        'Major speed optimization',
        'New app purchase or setup',
        'Advanced integrations (Ship Global, 17Track, etc.)',
        'Product image editing'
    ];

    return (
        <section id="maintenance" className="py-24 relative overflow-hidden bg-[#030014]">
            {/* Background Effects similar to Pricing section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ongoing Shopify Support & Maintenance</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Optional monthly support to keep your Shopify store running smoothly after launch.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(8,145,178,0.1)] hover:shadow-[0_0_60px_rgba(8,145,178,0.2)] transition-all"
                >
                    {/* Badge */}
                    <div className="absolute top-0 right-0 md:right-12 -translate-y-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg flex items-center gap-2">
                        <ShieldCheck size={16} /> Recommended After Launch
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-4">
                        {/* Header & Price */}
                        <div className="w-full md:w-1/3 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-4">Shopify Monthly Maintenance</h3>
                            <div className="text-4xl font-bold mb-6 text-cyan-400">₹3,999 <span className="text-lg text-gray-500 font-normal">/ month</span></div>

                            <a
                                href="#contact"
                                className="block w-full py-4 rounded-xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white shadow-lg shadow-cyan-900/40 transition-all transform hover:-translate-y-1"
                            >
                                Start Monthly Support
                            </a>

                            <p className="text-xs text-gray-500 leading-relaxed mb-6 md:mb-0">
                                Support is provided during business hours (Monday to Friday).
                                Any work outside the listed scope will be charged separately as an add-on.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="w-full md:w-2/3">
                            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6 border-b border-white/10 pb-2">What's Included</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                                {includedFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Not Included (Charged Separately)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                    {notIncludedFeatures.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 opacity-60">
                                            <X size={16} className="text-red-400 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center mt-12 text-gray-500 text-sm italic">
                    Maintenance is optional and starts after store launch.
                </div>
            </div>
        </section>
    );
};

export default Maintenance;
