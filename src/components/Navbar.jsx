import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            setTimeout(() => {
                const offset = 90;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled 
                ? 'bg-[#070B14]/80 backdrop-blur-xl border-b border-white/[0.06] py-4 shadow-2xl' 
                : 'bg-transparent py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 cursor-pointer flex items-center font-sora font-extrabold text-2xl text-white tracking-tight"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        W3<span className="text-accent relative inline-block">S<span className="absolute bottom-0.5 left-0 w-full h-1 bg-accent rounded-full"></span></span>etup
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="nav-link text-text-muted hover:text-text-main transition-colors duration-300 text-sm font-medium font-inter tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-accent to-purple-accent text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,110,245,0.4)] transform hover:-translate-y-0.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Start a Project
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-text-muted hover:text-text-main focus:outline-none p-1 transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sliding Mobile Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                        />
                        
                        {/* Slide-in Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#0D1526] border-l border-white/[0.06] z-50 p-8 flex flex-col md:hidden"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="font-sora font-extrabold text-2xl text-white tracking-tight">
                                    W3<span className="text-accent relative inline-block">S<span className="absolute bottom-0.5 left-0 w-full h-1 bg-accent rounded-full"></span></span>etup
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-text-muted hover:text-text-main focus:outline-none"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6 flex-grow">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-text-muted hover:text-text-main text-lg font-medium tracking-wide transition-colors font-sora py-2 border-b border-white/[0.03]"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-accent to-purple-accent text-white py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(91,110,245,0.3)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    Start a Project
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
