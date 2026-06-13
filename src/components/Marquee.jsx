import React from 'react';

const Marquee = () => {
    return (
        <section className="w-full py-12 border-y border-white/[0.04] bg-[#050816] relative overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted opacity-80 text-center">
                    Premium tools I use to build & scale high-converting stores
                </span>
                
                <div className="marquee-container w-full">
                    <div className="marquee-track">
                        {/* Set 1 */}
                        {/* Shopify */}
                        <div className="flex items-center justify-center h-8">
                            <svg viewBox="0 0 124 32" className="h-[26px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer text-white">
                                <path d="M10.8 4.2L6.1 1.1C5.3.6 4.3 1 4.3 1.9v2.3H2.5C1.1 4.2 0 5.3 0 6.7v18.5c0 1.4 1.1 2.5 2.5 2.5h15.2c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.4-1.1-2.5-2.5-2.5h-1.8v-2.3c0-.9-1-1.3-1.8-.8L10.8 4.2zM6.2 3.6l3.9 2.6H6.2V3.6zm7.8 0V6.2H10.1l3.9-2.6z"/>
                                <text x="26" y="22" className="font-inter font-black text-lg tracking-tighter">shopify</text>
                            </svg>
                        </div>
                        {/* Meta */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/meta.png" alt="Meta" className="h-6 object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* Google Ads */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/google-ads.png" alt="Google Ads" className="h-[22px] object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* Ahrefs */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/ahrefs.png" alt="Ahrefs" className="h-5 object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* React */}
                        <div className="flex items-center gap-2 justify-center h-8 opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <svg viewBox="0 0 100 100" className="h-7 fill-none stroke-current text-white">
                                <circle cx="50" cy="50" r="8" fill="currentColor"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(0 50 50)"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(60 50 50)"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(120 50 50)"/>
                            </svg>
                            <span className="font-inter font-extrabold text-sm tracking-tight text-white">React</span>
                        </div>
                        {/* Tailwind */}
                        <div className="flex items-center gap-2 justify-center h-8 opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <svg viewBox="0 0 100 100" className="h-6 fill-current text-white">
                                <path d="M50 30c-5.5 0-9.2 2.7-11 8.2 5.5-5.5 10.1-4.6 13.8 2.8 2.2 4.3 4.6 9 10.2 9 5.5 0 9.2-2.7 11-8.2-5.5 5.5-10.1 4.6-13.8-2.8-2.2-4.3-4.6-9-10.2-9zm-16.7 20c-5.5 0-9.2 2.7-11 8.2 5.5-5.5 10.1-4.6 13.8 2.8 2.2 4.3 4.6 9 10.2 9 5.5 0 9.2-2.7 11-8.2-5.5 5.5-10.1 4.6-13.8-2.8-2.2-4.3-4.6-9-10.2-9z"/>
                            </svg>
                            <span className="font-inter font-extrabold text-sm tracking-tight text-white">TailwindCSS</span>
                        </div>

                        {/* Set 2 */}
                        {/* Shopify */}
                        <div className="flex items-center justify-center h-8">
                            <svg viewBox="0 0 124 32" className="h-[26px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer text-white">
                                <path d="M10.8 4.2L6.1 1.1C5.3.6 4.3 1 4.3 1.9v2.3H2.5C1.1 4.2 0 5.3 0 6.7v18.5c0 1.4 1.1 2.5 2.5 2.5h15.2c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.4-1.1-2.5-2.5-2.5h-1.8v-2.3c0-.9-1-1.3-1.8-.8L10.8 4.2zM6.2 3.6l3.9 2.6H6.2V3.6zm7.8 0V6.2H10.1l3.9-2.6z"/>
                                <text x="26" y="22" className="font-inter font-black text-lg tracking-tighter">shopify</text>
                            </svg>
                        </div>
                        {/* Meta */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/meta.png" alt="Meta" className="h-6 object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* Google Ads */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/google-ads.png" alt="Google Ads" className="h-[22px] object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* Ahrefs */}
                        <div className="flex items-center justify-center h-8">
                            <img src="/images/ahrefs.png" alt="Ahrefs" className="h-5 object-contain opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer" />
                        </div>
                        {/* React */}
                        <div className="flex items-center gap-2 justify-center h-8 opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <svg viewBox="0 0 100 100" className="h-7 fill-none stroke-current text-white">
                                <circle cx="50" cy="50" r="8" fill="currentColor"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(0 50 50)"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(60 50 50)"/>
                                <ellipse cx="50" cy="50" rx="38" ry="15" strokeWidth="3" transform="rotate(120 50 50)"/>
                            </svg>
                            <span className="font-inter font-extrabold text-sm tracking-tight text-white">React</span>
                        </div>
                        {/* Tailwind */}
                        <div className="flex items-center gap-2 justify-center h-8 opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <svg viewBox="0 0 100 100" className="h-6 fill-current text-white">
                                <path d="M50 30c-5.5 0-9.2 2.7-11 8.2 5.5-5.5 10.1-4.6 13.8 2.8 2.2 4.3 4.6 9 10.2 9 5.5 0 9.2-2.7 11-8.2-5.5 5.5-10.1 4.6-13.8-2.8-2.2-4.3-4.6-9-10.2-9zm-16.7 20c-5.5 0-9.2 2.7-11 8.2 5.5-5.5 10.1-4.6 13.8 2.8 2.2 4.3 4.6 9 10.2 9 5.5 0 9.2-2.7 11-8.2-5.5 5.5-10.1 4.6-13.8-2.8-2.2-4.3-4.6-9-10.2-9z"/>
                            </svg>
                            <span className="font-inter font-extrabold text-sm tracking-tight text-white">TailwindCSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
