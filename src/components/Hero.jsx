import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Shopify Ecommerce Specialist
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        I build Shopify stores <br />
                        that turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">visitors into customers.</span>
                    </h1>
                    <p className="text-gray-500 text-sm font-medium mb-8 tracking-wide uppercase opacity-80">
                        Trusted by growing D2C & product brands
                    </p>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I help product and D2C brands launch clean, professional Shopify websites with strong UX, mobile optimization, and scalable structure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/919214836314"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Start Your Store
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[1] pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};

export default Hero;
