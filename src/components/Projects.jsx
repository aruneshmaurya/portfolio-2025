import { motion } from 'framer-motion';
import { ExternalLink, Check, Lock } from 'lucide-react';

const projects = [
    {
        title: 'COPPERAA',
        url: 'https://copperaa.com',
        industry: 'LIFESTYLE',
        description: 'COPPERAA is a premium copper drinkware brand. I built a complete Shopify store focused on luxury presentation, trust elements, and a smooth shopping experience.',
        features: [
            'Custom homepage layout focused on luxury aesthetics',
            'Advanced collection-based user navigation & search',
            'Product pages with conversion-boosting trust badges',
            'Highly optimized, mobile-first responsive checkout setup'
        ],
        metrics: [
            { label: 'PageSpeed', value: '91' },
            { label: 'Conversions', value: '+2.8x' },
            { label: 'Mobile UX', value: '5★' }
        ],
        image: '/images/copperaa-full.png'
    },
    {
        title: 'COPPRLY',
        url: 'https://copprly.com',
        industry: 'WELLNESS',
        description: 'COPPRLY is a wellness-focused copper products brand. The goal was to create a clean and modern Shopify store that reflects tradition, health, and premium craftsmanship.',
        features: [
            'Shopify theme custom layout modifications',
            'Product pages optimized for craft storytelling',
            'Custom shipping options and localized checkouts',
            'Trust elements, reviews app, and social proof integration'
        ],
        metrics: [
            { label: 'PageSpeed', value: '93' },
            { label: 'Mobile Bounce', value: '-25%' },
            { label: 'Mobile Sales', value: '+40%' }
        ],
        image: '/images/copprly-full.png'
    },
    {
        title: 'DREZYY',
        url: 'https://www.drezyy.com',
        industry: 'FASHION & APPAREL',
        description: 'DREZYY is a fashion and streetwear brand. The store was designed with a bold, modern layout focused on visuals, collections, and easy navigation.',
        features: [
            'Bold fashion-focused homepage and clean typography',
            'Custom sizing charts and dynamic visual filters',
            'Product grid optimization & instant add-to-cart buttons',
            'Performance tuning for rapid asset loading & checkout speed'
        ],
        metrics: [
            { label: 'PageSpeed', value: '94' },
            { label: 'Conversions', value: '+3.2x' },
            { label: 'Add-To-Cart', value: '+15%' }
        ],
        image: '/images/drezyy-full.png'
    },
    {
        title: 'CUPREVA',
        url: 'https://cupreva.com/',
        industry: 'Health & Wellness / Copper Lifestyle',
        description: 'CUPREVA is a premium copper bottle brand focused on health, detox, and immunity. The brand needed a clean, trust-building Shopify store that converts health-conscious buyers.',
        features: [
            'Custom Shopify theme design from scratch',
            'Health-focused product page layout with trust badges',
            'Mobile-first responsive design',
            'Conversion-optimized checkout flow',
            'Brand storytelling sections (Why Copper? benefits, etc.)'
        ],
        metrics: [
            { label: 'PageSpeed', value: '88+' },
            { label: 'Mobile UX', value: 'Optimized' },
            { label: 'Layout', value: 'Conversion-Focused' }
        ],
        image: 'https://placehold.co/800x500/0D1526/5B6EF5?text=CUPREVA'
    }
];

const ndaProjects = [
    { title: "Project Alpha", industry: "BEAUTY & COSMETICS" },
    { title: "Project Beta", industry: "JEWELLERY & LUXURY" },
    { title: "Project Gamma", industry: "FOOD & NUTRITION" }
];

const ScrollingImage = ({ image }) => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#070B14]">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-50%" }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="w-full relative"
            >
                <img src={image} alt="Project Preview" className="w-full block filter blur-[0.5px] opacity-90" />
                <img src={image} alt="Project Preview" className="w-full block filter blur-[0.5px] opacity-90" />
                <div className="absolute inset-0 bg-indigo-accent/[0.02] backdrop-blur-[0.5px] mix-blend-overlay pointer-events-none"></div>
            </motion.div>

            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#070B14] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#070B14] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] z-[2] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#070B14] relative overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-indigo-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="inline-block text-indigo-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-4">
                        SELECTED WORK
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sora">
                        A few stores we're proud of.
                    </h2>
                </div>

                {/* Alternating Layout Projects */}
                <div className="space-y-36 mb-36">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
                        >
                            {/* Mockup Left */}
                            <div className="w-full lg:w-3/5 group relative h-[360px] sm:h-[450px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(7,11,20,0.8)] transition-all duration-500 hover:border-indigo-accent/40 hover:shadow-[0_0_40px_rgba(91,110,245,0.15)]">
                                {['COPPERAA', 'COPPRLY', 'DREZYY'].includes(project.title) ? (
                                    <ScrollingImage image={project.image} />
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                                )}
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm z-20">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white text-[#070B14] px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                                    >
                                        Visit Live Store <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Details Right */}
                            <div className="w-full lg:w-2/5">
                                <span className="inline-block text-indigo-accent text-xs font-mono tracking-widest uppercase mb-3 bg-indigo-accent/10 px-3 py-1 rounded-full">
                                    {project.industry}
                                </span>
                                
                                <h3 className="text-3xl font-extrabold mb-4 text-white font-sora tracking-tight">
                                    {project.title}
                                </h3>
                                
                                <p className="text-text-muted leading-relaxed mb-8 font-inter">
                                    {project.description}
                                </p>

                                <h4 className="text-xs font-mono tracking-wider text-[#F0F4FF] uppercase mb-4">
                                    What We Did
                                </h4>
                                
                                <ul className="space-y-3 mb-8">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-text-muted text-sm font-inter">
                                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-accent/15 text-indigo-accent shrink-0 mt-0.5">
                                                <Check size={12} strokeWidth={3} />
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Metrics Row */}
                                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/[0.06] mb-8">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="bg-[#0D1526] border border-white/[0.04] px-4 py-2 rounded-xl flex items-center gap-2">
                                            <span className="text-xs text-text-muted font-inter">{metric.label}:</span>
                                            <span className="text-sm text-indigo-accent font-bold font-sora">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold border-b border-indigo-accent/80 hover:border-indigo-accent pb-1 transition-all duration-300 hover:text-indigo-accent"
                                >
                                    Visit Live Store <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* NDA Section */}
                <div className="border-t border-white/[0.06] pt-20">
                    <div className="text-center mb-12">
                        <span className="inline-block text-indigo-accent text-xs font-mono tracking-widest uppercase mb-3 bg-indigo-accent/10 px-3 py-1 rounded-full">
                            CONFIDENTIALITY GUARANTEED
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-sora">
                            Under Non-Disclosure Agreement
                        </h3>
                        <p className="text-text-muted text-sm max-w-xl mx-auto font-inter">
                            To protect client brand strategies, details of some stores built for enterprise partners remain protected.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ndaProjects.map((nda, index) => (
                            <div
                                key={index}
                                className="bg-[#0D1526] border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-48 group hover:border-indigo-accent/30 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 text-white/10 group-hover:text-indigo-accent/20 transition-colors">
                                    <Lock size={40} strokeWidth={1} />
                                </div>
                                
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-text-muted bg-white/[0.03] px-2 py-1 rounded">
                                        {nda.industry}
                                    </span>
                                    <h4 className="text-lg font-bold text-white/50 mt-4 font-sora">
                                        {nda.title}
                                    </h4>
                                </div>
                                
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-accent font-inter">
                                    <Lock size={12} /> Case Study Available on Request
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Get in Touch CTA */}
                <div className="text-center mt-20">
                    <p className="text-text-muted mb-4 font-inter text-base">
                        Want to see more? I'll share relevant case studies for your niche.
                    </p>
                    <a
                        href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-bold border-b border-indigo-accent/80 hover:border-indigo-accent pb-1 transition-all duration-300 hover:text-indigo-accent group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline text-indigo-accent mr-1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Get in Touch <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
