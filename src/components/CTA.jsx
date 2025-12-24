import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-primary/20 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Need a professional Shopify <br /> store for your brand?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Let’s build a store that looks premium and actually sells.
                </p>

                <a
                    href="https://wa.me/919214836314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1"
                >
                    Start Your Project <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
};

export default CTA;
