import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#hero');

    useEffect(() => {
        const sections = ['#hero', '#services', '#projects', '#pricing', '#testimonials', '#faq'];
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
            
            // Simple section detection for active indicator
            const scrollPosition = window.scrollY + 120;
            for (const section of sections) {
                const element = document.querySelector(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
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
                setActiveSection(href);
            }, 100);
        }
    };

    return (
        <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-7xl transition-all duration-500 rounded-full border border-white/[0.08] ${
            scrolled 
                ? 'top-3 bg-[#050816]/75 backdrop-blur-xl py-3 border-indigo-accent/20 shadow-[0_20px_40px_rgba(0,0,0,0.5),_0_0_20px_rgba(91,110,245,0.08)]' 
                : 'top-6 bg-white/[0.03] backdrop-blur-lg py-4 shadow-xl'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 cursor-pointer flex items-center font-satoshi font-black text-2xl text-white tracking-tight"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        W3<span className="text-accent relative inline-block">S<span className="absolute bottom-0.5 left-0 w-full h-1 bg-accent rounded-full"></span></span>etup
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`nav-link text-text-muted hover:text-text-main transition-colors duration-300 text-sm font-medium font-inter tracking-wide ${
                                    activeSection === link.href ? 'active text-white' : ''
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://cal.com/aruneshmaurya/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-accent to-purple-accent text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,110,245,0.4)] transform hover:-translate-y-0.5 group/btn ripple-effect"
                        >
                            Book Free Call
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
                            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#050816] border-l border-white/[0.06] z-50 p-8 flex flex-col md:hidden"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="font-satoshi font-black text-2xl text-white tracking-tight">
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
                                        className={`text-text-muted hover:text-text-main text-lg font-medium tracking-wide transition-colors font-satoshi py-2 border-b border-white/[0.03] ${
                                            activeSection === link.href ? 'text-white border-b-accent' : ''
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href="https://cal.com/aruneshmaurya/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-indigo-accent to-purple-accent text-white py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(91,110,245,0.3)] group/btn ripple-effect"
                                >
                                    Book Free Call
                                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
