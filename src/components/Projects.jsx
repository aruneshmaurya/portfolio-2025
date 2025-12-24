import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const projects = [
    {
        title: 'COPPERAA',
        url: 'https://copperaa.com',
        description: 'COPPERAA is a premium copper drinkware brand. I built a complete Shopify store focused on luxury presentation, trust elements, and smooth shopping experience.',
        features: [
            'Custom homepage layout',
            'Collection-based navigation',
            'Product pages with trust elements',
            'Order tracking setup',
            'Mobile-first responsive design',
            'Result: Enhanced user experience'
        ],
        image: 'https://placehold.co/800x500/1e1e2e/FFF?text=COPPERAA+Preview', // Fallback
        color: 'from-orange-500/20 to-amber-700/5'
    },
    {
        title: 'COPPRLY',
        url: 'https://copprly.com',
        description: 'COPPRLY is a wellness-focused copper products brand. The goal was to create a clean and modern Shopify store that reflects tradition, health, and premium craftsmanship.',
        features: [
            'Shopify theme customization',
            'Homepage content layout',
            'Product collections setup',
            'UX-focused improvements',
            'Responsive mobile optimization',
            'Result: Improved mobile browsing experience'
        ],
        image: 'https://placehold.co/800x500/1e1e2e/FFF?text=COPPRLY+Preview',
        color: 'from-amber-600/20 to-orange-800/5'
    },
    {
        title: 'DREZYY',
        url: 'https://www.drezyy.com',
        description: 'DREZYY is a fashion and apparel brand. The store was designed with a bold, modern layout focused on visuals, collections, and easy navigation.',
        features: [
            'Fashion-focused homepage layout',
            'Category-based collections',
            'Product grid optimization',
            'Clean typography and spacing',
            'Fast-loading responsive design',
            'Result: Cleaner product navigation'
        ],
        image: 'https://placehold.co/800x500/1e1e2e/FFF?text=DREZYY+Preview',
        color: 'from-purple-500/20 to-indigo-700/5'
    }
];

// Helper component for scrolling image
const ScrollingImage = ({ image }) => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#030014]">
            {/* Container for the scrolling image - animating translateY */}
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
                {/* Render image twice for seamless loop - full width with intentional blur */}
                <img src={image} alt="Project Preview" className="w-full block filter blur-[1px] opacity-80" />
                <img src={image} alt="Project Preview" className="w-full block filter blur-[1px] opacity-80" />

                {/* Glass overlay to smooth out pixels */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] mix-blend-overlay pointer-events-none"></div>
            </motion.div>

            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-[2] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of high-converting Shopify stores built for performance and design.
                    </p>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                        >
                            {/* Project Card - Clickable */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full lg:w-3/5 group relative h-[500px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl block"
                            >
                                {/* Special layout for COPPERAA, COPPRLY, and DREZYY using scrolling image */}
                                {['COPPERAA', 'COPPRLY', 'DREZYY'].includes(project.title) ? (
                                    <ScrollingImage image={
                                        project.title === 'COPPERAA' ? "/images/copperaa-full.png" :
                                            project.title === 'COPPRLY' ? "/images/copprly-full.png" :
                                                "/images/drezyy-full.png"
                                    } />
                                ) : (
                                    <>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 z-10`}></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform scale-105"
                                        />
                                    </>
                                )}

                                {/* Overlay Button (always visible) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 bg-black/40 backdrop-blur-sm z-20">
                                    <span
                                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold"
                                    >
                                        Visit Live Store <ExternalLink size={16} />
                                    </span>
                                </div>
                            </a>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5">
                                <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Work Done</h4>
                                <ul className="space-y-3 mb-8">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400">
                                            <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white border-b border-primary pb-1 hover:text-primary transition-colors inline-flex items-center gap-2"
                                >
                                    View Live Project <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
