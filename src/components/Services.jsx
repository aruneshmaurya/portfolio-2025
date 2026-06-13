import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Shopify Store Development",
            desc: "From zero to a fully functional, conversion-optimized Shopify store. Custom design, pixel-perfect development, and built to scale.",
            icon: (
                <svg className="w-8 h-8 text-indigo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 4.5 0 3.001 3.001 0 0 0 4.5 0 3.001 3.001 0 0 0 3.75.615m-16.5 0a2.999 2.999 0 0 1-.75-1.928c0-.987.48-1.861 1.22-2.4L8.25 3h7.5l3.28 4.021a3.002 3.002 0 0 1 1.22 2.4c0 .762-.284 1.458-.75 1.928m-15.75 0h16.5" />
                </svg>
            ),
            delay: 0.1
        },
        {
            title: "Shopify Store Redesign",
            desc: "Tired of your existing store? I rebuild it with modern design, better UX, and a layout your customers will actually convert on.",
            icon: (
                <svg className="w-8 h-8 text-indigo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            ),
            delay: 0.2
        },
        {
            title: "UX & Performance Optimization",
            desc: "Slow stores lose customers. I audit and optimize your Shopify store for Core Web Vitals, PageSpeed, and mobile UX — measurably.",
            icon: (
                <svg className="w-8 h-8 text-indigo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.3 16.204a4.17 4.17 0 0 0 1.218-.399c1.616-.763 2.502-2.607 1.942-4.577a4.34 4.34 0 0 0-3.328-3.088c-1.956-.37-3.768.423-4.604 1.936a4.171 4.171 0 0 0-.466 1.192m2.182 4.936-3.867 3.867m0 0a1.08 1.08 0 0 1-1.527 0l-3.867-3.867m3.867 3.867V3.75" />
                </svg>
            ),
            delay: 0.3
        },
        {
            title: "Ongoing Support & Maintenance",
            desc: "Launch is just the beginning. I stay by your side with monthly support, updates, and improvements so your store keeps performing.",
            icon: (
                <svg className="w-8 h-8 text-indigo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714z" />
                </svg>
            ),
            delay: 0.4
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#070B14] relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-indigo-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-4">
                        WHAT I DO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        Every service, built around one goal — your revenue.
                    </h2>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0D1526] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-indigo-accent/35 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Card Hover Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="w-14 h-14 bg-indigo-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-white font-sora tracking-tight">
                                {service.title}
                            </h3>
                            
                            <p className="text-text-muted leading-relaxed font-inter">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <div className="text-center flex flex-col items-center">
                    <p className="text-text-muted mb-4 font-inter text-base">
                        Not sure what you need? Let's figure it out together.
                    </p>
                    <a
                        href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-bold border-b border-indigo-accent/80 hover:border-indigo-accent pb-1 transition-all duration-300 hover:text-indigo-accent group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline text-indigo-accent mr-1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Book a Free Call <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
