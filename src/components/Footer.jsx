import { Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' }
    ];

    const services = [
        { name: 'Store Development', href: '#services' },
        { name: 'Store Redesign', href: '#services' },
        { name: 'UX & Performance Tuning', href: '#services' },
        { name: 'Monthly Support', href: '#pricing' }
    ];

    const handleScrollClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
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
        <footer id="contact" className="bg-[#070B14] border-t border-white/[0.06] pt-20 pb-12 text-text-muted font-inter">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                {/* Brand Info Column */}
                <div className="md:col-span-2">
                    <div className="font-sora font-extrabold text-2xl text-white tracking-tight mb-4">
                        W3<span className="text-indigo-accent relative inline-block">3<span className="absolute bottom-0.5 left-0 w-full h-1 bg-indigo-accent rounded-full"></span></span>Setup
                    </div>
                    <p className="text-sm leading-relaxed max-w-sm text-text-muted">
                        Shopify Development for Brands That Mean Business. High-performance design optimized to convert visitors into loyal customers.
                    </p>
                </div>

                {/* Quick Links Column */}
                <div>
                    <h4 className="text-xs font-mono tracking-widest text-[#F0F4FF] uppercase mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-4 text-sm">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleScrollClick(e, link.href)}
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Connect Column */}
                <div>
                    <h4 className="text-xs font-mono tracking-widest text-[#F0F4FF] uppercase mb-6">
                        Connect
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a
                                href="https://wa.me/919336495028?text=Hi%20I%27m%20interested%20in%20a%20Shopify%20store%20for%20my%20brand"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm"
                            >
                                <MessageCircle size={16} className="text-indigo-accent" /> Chat on WhatsApp → +91 93364 95028
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:imaruneshmaurya@gmail.com"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Mail size={16} className="text-indigo-accent" /> Email Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/imaruneshmaurya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Linkedin size={16} className="text-indigo-accent" /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/imaruneshmaurya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Instagram size={16} className="text-indigo-accent" /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Row */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span>
                    &copy; 2025 W3Setup. All rights reserved.
                </span>
                <span className="text-text-muted/65">
                    Built on Shopify. Designed for performance.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
