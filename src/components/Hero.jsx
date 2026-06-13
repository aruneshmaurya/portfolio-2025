import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    const handleScrollToWork = (e) => {
        e.preventDefault();
        const element = document.querySelector('#projects');
        if (element) {
            const offset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-16 bg-aurora-mesh">
            {/* Ambient Background Glow and Floating Abstract Geometric Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] bg-indigo-accent/15 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-accent/10 rounded-full blur-[150px]"></div>
                
                {/* Floating Shapes */}
                <div className="absolute top-[25%] right-[15%] w-12 h-12 border border-white/[0.04] bg-white/[0.01] rounded-xl rotate-12 animate-float-slow opacity-60"></div>
                <div className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-white/[0.04] bg-white/[0.02] rounded-full animate-float-medium opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    {/* Eyebrow Label */}
                    <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-accent/10 border border-indigo-accent/20 text-indigo-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-8">
                        SHOPIFY DEVELOPMENT SPECIALIST
                    </span>
                    
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white max-w-4xl font-sora">
                        I build Shopify stores <br className="hidden md:block" />
                        that turn visitors into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-accent to-purple-accent">
                            customers.
                        </span>
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-inter">
                        High-converting, fast-loading, mobile-first Shopify stores for D2C brands that are serious about growth.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
                        <a
                            href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-accent to-purple-accent text-white rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,110,245,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Start Your Project
                        </a>
                        <a
                            href="#projects"
                            onClick={handleScrollToWork}
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/20 text-white hover:bg-white/[0.02] rounded-full font-bold transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                        >
                            View My Work
                        </a>
                    </div>

                    {/* Trust Row */}
                    <div className="border-t border-white/[0.06] pt-8 w-full max-w-2xl flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm text-text-muted font-medium font-inter">
                        <span>50+ Stores Built</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent/30 hidden sm:inline-block"></span>
                        <span>100% On-Time</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent/30 hidden sm:inline-block"></span>
                        <span>D2C Specialists</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent/30 hidden sm:inline-block"></span>
                        <span className="flex items-center gap-1">5★ Rated <Star size={13} className="fill-amber-400 text-amber-400 inline" /></span>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-[1] pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};

export default Hero;
