import { motion } from 'framer-motion';
import { ShoppingBag, RefreshCw, Smartphone, LifeBuoy } from 'lucide-react';

const services = [
    {
        icon: ShoppingBag,
        title: 'Shopify Store Development',
        description: 'Complete Shopify store setup including homepage design, collections, products, payment setup, shipping setup, and mobile optimization.'
    },
    {
        icon: RefreshCw,
        title: 'Shopify Store Redesign',
        description: 'Modern redesign for existing Shopify stores to improve layout, trust, and overall user experience.'
    },
    {
        icon: Smartphone,
        title: 'UX & Performance Optimization',
        description: 'Mobile UX improvements, layout fixes, speed optimization, and conversion-focused enhancements.'
    },
    {
        icon: LifeBuoy,
        title: 'Ongoing Support & Maintenance',
        description: 'Reliable support for bug fixes, small updates, and store improvements after launch.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Specialized Shopify solutions to help your business grow and succeed online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
