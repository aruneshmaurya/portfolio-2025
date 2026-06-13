import { Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
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
        <footer id="contact" className="bg-[#070B14] border-t border-white/[0.06] pt-20 pb-12 text-text-secondary font-inter">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Column 1 — Brand Info */}
                <div className="flex flex-col items-start">
                    {/* Logo (W3Setup - Single 3, Option 1 colors) */}
                    <div 
                        className="font-sora font-extrabold text-2xl text-white tracking-tight mb-4 cursor-pointer select-none"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        W3<span className="text-accent relative inline-block">S<span className="absolute bottom-0.5 left-0 w-full h-1 bg-accent rounded-full"></span></span>etup
                    </div>
                    {/* Tagline */}
                    <p className="text-sm leading-relaxed text-text-secondary max-w-[200px] mb-4">
                        Shopify development for brands that mean business.
                    </p>
                    {/* Serving note */}
                    <span className="text-xs text-text-secondary opacity-80">
                        Serving D2C brands worldwide 🌍
                    </span>
                </div>

                {/* Column 2 — Quick Links */}
                <div>
                    <h4 className="text-[11px] font-mono tracking-[0.15em] text-accent uppercase mb-6 flex items-center gap-2 select-none">
                        NAVIGATE
                    </h4>
                    <ul className="space-y-3.5">
                        {[
                            { name: 'Home', href: '#hero' },
                            { name: 'Services', href: '#services' },
                            { name: 'Work', href: '#projects' },
                            { name: 'Pricing', href: '#pricing' },
                            { name: 'FAQ', href: '#faq' }
                        ].map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => link.href.startsWith('#') && handleScrollClick(e, link.href)}
                                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 — Services */}
                <div>
                    <h4 className="text-[11px] font-mono tracking-[0.15em] text-accent uppercase mb-6 flex items-center gap-2 select-none">
                        SERVICES
                    </h4>
                    <ul className="space-y-3.5">
                        {[
                            { name: 'Store Development', href: '#services' },
                            { name: 'Store Redesign', href: '#services' },
                            { name: 'Performance Optimization', href: '#services' },
                            { name: 'Support & Maintenance', href: '#pricing' }
                        ].map((service) => (
                            <li key={service.name}>
                                <a
                                    href={service.href}
                                    onClick={(e) => handleScrollClick(e, service.href)}
                                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                                >
                                    {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 — Connect */}
                <div>
                    <h4 className="text-[11px] font-mono tracking-[0.15em] text-accent uppercase mb-6 flex items-center gap-2 select-none">
                        CONNECT
                    </h4>
                    <ul className="space-y-4">
                        {/* WhatsApp CTA (no phone number visible) */}
                        <li>
                            <a
                                href="https://wa.me/919336495028?text=Hi%20I'm%20interested%20in%20a%20Shopify%20store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200 group"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    className="text-accent shrink-0"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Message Us
                            </a>
                        </li>
                        {/* Email Us */}
                        <li>
                            <a
                                href="mailto:imaruneshmaurya@gmail.com"
                                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200"
                            >
                                <Mail size={18} className="text-accent shrink-0" />
                                Email Us
                            </a>
                        </li>
                        {/* LinkedIn */}
                        <li>
                            <a
                                href="https://www.linkedin.com/in/imaruneshmaurya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200"
                            >
                                <Linkedin size={18} className="text-accent shrink-0" />
                                LinkedIn
                            </a>
                        </li>
                        {/* Instagram */}
                        <li>
                            <a
                                href="https://www.instagram.com/imaruneshmaurya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200"
                            >
                                <Instagram size={18} className="text-accent shrink-0" />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Row */}
            <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-text-secondary font-inter">
                <span>
                    &copy; 2025 W3Setup. All rights reserved.
                </span>
                <span>
                    Made with ☕ for D2C brands
                </span>
            </div>
        </footer>
    );
};

export default Footer;
