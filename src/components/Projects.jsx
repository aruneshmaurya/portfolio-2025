import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';

const projects = [
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
        title: 'CUPREVA',
        url: 'https://cupreva.com/',
        industry: 'Health & Wellness',
        description: 'CUPREVA needed a Shopify store that builds instant trust for a health-focused product. We designed a clean, benefit-led layout that educates and converts — combining brand storytelling with fast, mobile-first performance.',
        features: [
            'Custom Shopify theme — clean health-brand aesthetic',
            '"Why Copper?" benefit storytelling section',
            'Trust badges and ingredient-transparency layout',
            'Mobile-first product pages optimized for conversion',
            'PageSpeed optimized — score 88+'
        ],
        metrics: [
            { value: 'PageSpeed 88+' },
            { value: 'Mobile Optimized' },
            { value: 'Health-Trust Layout' }
        ],
        image: '/images/cupreva-full.png'
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
    }
];

const ndaProjects = [
    { title: "Project Alpha", industry: "BEAUTY & COSMETICS" },
    { title: "Project Beta", industry: "JEWELLERY & LUXURY" },
    { title: "Project Gamma", industry: "FOOD & NUTRITION" }
];

const BrowserMockup = ({ project }) => {
    const isCupreva = project.title === 'CUPREVA';
    
    return (
        <div 
            className="browser-mockup-container w-full h-[360px] sm:h-[450px] rounded-[12px] overflow-hidden relative bg-bg-primary select-none flex flex-col group/browser"
            style={isCupreva ? {
                border: '1.5px solid rgba(184, 115, 51, 0.4)',
                boxShadow: '0 0 40px rgba(184, 115, 51, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)'
            } : {
                border: '1px solid var(--border-accent)'
            }}
        >
            {/* Fake Browser Chrome Header */}
            <div 
                className="h-10 px-4 flex items-center justify-between border-b border-border-accent z-20 shrink-0 relative"
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                }}
            >
                {/* Red/Yellow/Green Chrome Window Controls */}
                <div className="flex gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block"></span>
                </div>
                {/* URL Bar */}
                <div className="bg-black/35 rounded-md text-[11px] font-mono text-text-secondary px-6 py-1 w-full max-w-[240px] text-center truncate select-none border border-white/[0.04]">
                    {project.url.replace('https://', '').replace(/\/$/, '')}
                </div>
                {/* Placeholder action icon spacer */}
                <div className="w-[44px]"></div>
            </div>

            {/* Content Area */}
            <div className="relative w-full flex-grow overflow-hidden z-10 bg-bg-primary">
                {/* Scrolling Image Mockup */}
                <div className="w-full absolute top-0 left-0 animate-mockup-scroll">
                    <img 
                        src={project.image} 
                        alt={`${project.title} Preview`} 
                        className="w-full block select-none pointer-events-none"
                    />
                </div>

                {isCupreva && (
                    /* Glass overlay that sits static on top of the scrolling content */
                    <div 
                        className="absolute inset-0 pointer-events-none z-15"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.02) 80%, rgba(255, 255, 255, 0.08) 100%)',
                            boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: 'inherit',
                            backdropFilter: 'blur(0.5px) saturate(1.1) contrast(1.05)',
                            WebkitBackdropFilter: 'blur(0.5px) saturate(1.1) contrast(1.05)',
                        }}
                    >
                        {/* Diagonal light reflection shine overlay */}
                        <div 
                            className="absolute inset-0 opacity-45"
                            style={{
                                background: 'linear-gradient(60deg, transparent 40%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.12) 55%, transparent 60%)',
                                backgroundSize: '200% 200%',
                            }}
                        />
                    </div>
                )}

                {/* Overlay Subtle Gradient at Bottom */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none z-15"
                    style={{
                        background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)'
                    }}
                ></div>

                {/* Visit Store Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm z-20">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#070B14] px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        Visit Live Store <span className="text-[14px]">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative overflow-hidden bg-bg-primary">
            {/* Background ambient light */}
            <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="eyebrow-label mb-4">
                        SELECTED WORK
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 font-sora mt-2">
                        A few stores we're proud of.
                    </h2>
                </div>

                {/* Projects Alternating Layout */}
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
                            {/* Browser Mockup Column */}
                            <div className="w-full lg:w-3/5">
                                <BrowserMockup project={project} />
                            </div>

                            {/* Details Column */}
                            <div className="w-full lg:w-2/5">
                                {/* Industry tag */}
                                <span className="inline-block text-accent text-xs font-mono tracking-widest uppercase mb-3 bg-accent/10 px-3 py-1 rounded-full">
                                    {project.industry}
                                </span>
                                
                                {/* Store Title */}
                                <h3 className="text-3xl font-extrabold mb-4 text-text-primary font-sora tracking-tight">
                                    {project.title}
                                </h3>
                                
                                {/* Store Description */}
                                <p className="text-text-secondary leading-relaxed mb-8 font-inter text-[15px]">
                                    {project.description}
                                </p>

                                {/* Features section */}
                                <h4 className="text-xs font-mono tracking-wider text-text-primary uppercase mb-4">
                                    What We Did
                                </h4>
                                
                                <ul className="space-y-3 mb-8">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-text-secondary text-sm font-inter">
                                            {/* Indigo Checkmark */}
                                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                                                <Check size={12} strokeWidth={3} />
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Result Badges Row (pill style, dark bg, indigo border) */}
                                <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/[0.06] mb-8">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="bg-bg-secondary border border-border-accent/60 px-3.5 py-1.5 rounded-full flex items-center text-xs font-medium text-accent font-inter shadow-sm">
                                            {metric.label ? (
                                                <>
                                                    <span className="opacity-75 mr-1 font-normal">{metric.label}:</span>
                                                    <span className="font-bold">{metric.value}</span>
                                                </>
                                            ) : (
                                                <span className="font-bold">{metric.value}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Live Store Action Link */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-text-primary font-bold border-b border-accent/80 hover:border-accent pb-1 transition-all duration-300 hover:text-accent group"
                                >
                                    Visit Live Store <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* NDA Section */}
                <div className="border-t border-white/[0.06] pt-20">
                    <div className="text-center mb-12">
                        <span className="inline-block text-accent text-xs font-mono tracking-widest uppercase mb-3 bg-accent/10 px-3 py-1 rounded-full">
                            CONFIDENTIALITY GUARANTEED
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4 font-sora">
                            Under Non-Disclosure Agreement
                        </h3>
                        <p className="text-text-secondary text-sm max-w-xl mx-auto font-inter">
                            To protect client brand strategies, details of some stores built for enterprise partners remain protected.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ndaProjects.map((nda, index) => (
                            <div
                                key={index}
                                className="bg-[#0D1526] border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-48 group hover:border-accent/30 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 text-white/10 group-hover:text-accent/20 transition-colors">
                                    <Lock size={40} strokeWidth={1} />
                                </div>
                                
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-text-secondary bg-white/[0.03] px-2 py-1 rounded">
                                        {nda.industry}
                                    </span>
                                    <h4 className="text-lg font-bold text-white/50 mt-4 font-sora">
                                        {nda.title}
                                    </h4>
                                </div>
                                
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-accent font-inter">
                                    <Lock size={12} /> Case Study Available on Request
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Get in Touch CTA */}
                <div className="text-center mt-20">
                    <p className="text-text-secondary mb-4 font-inter text-base">
                        Want to see more? I'll share relevant case studies for your niche.
                    </p>
                    <a
                        href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-text-primary font-bold border-b border-accent/80 hover:border-accent pb-1 transition-all duration-300 hover:text-accent group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline text-accent mr-1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Get in Touch <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
