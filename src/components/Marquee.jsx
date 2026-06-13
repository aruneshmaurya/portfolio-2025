import React from 'react';

const Marquee = () => {
    return (
        <section className="w-full py-12 border-y border-white/[0.04] bg-[#050816] relative overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted opacity-80 text-center">
                    Trusted by fast-growing D2C brands.
                </span>
                
                <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between gap-8 md:gap-10 w-full max-w-4xl justify-items-center text-white mt-2">
                    {/* Shopify */}
                    <div className="flex items-center justify-center h-8">
                        <svg viewBox="0 0 124 32" className="h-[25px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <path d="M10.8 4.2L6.1 1.1C5.3.6 4.3 1 4.3 1.9v2.3H2.5C1.1 4.2 0 5.3 0 6.7v18.5c0 1.4 1.1 2.5 2.5 2.5h15.2c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.4-1.1-2.5-2.5-2.5h-1.8v-2.3c0-.9-1-1.3-1.8-.8L10.8 4.2zM6.2 3.6l3.9 2.6H6.2V3.6zm7.8 0V6.2H10.1l3.9-2.6z"/>
                            <text x="26" y="22" className="font-inter font-black text-lg tracking-tighter">shopify</text>
                        </svg>
                    </div>

                    {/* Stripe */}
                    <div className="flex items-center justify-center h-8">
                        <svg viewBox="0 0 100 32" className="h-[23px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <path d="M43.7 13.5c0-2.8-2-4.1-5.1-4.1-3.6 0-6.7 1.6-6.7 1.6l1.3 3.3s2.6-1.2 4.6-1.2c1.6 0 2.4.6 2.4 1.5 0 2.3-7.9 1.9-7.9 7.2 0 3.1 2.4 4.8 5.7 4.8 2.8 0 5.1-1.3 5.1-1.3l-.2 1.1h3.6V13.5zm-3.6 7.4c0 1.2-1 2-2.3 2-1.3 0-2-.6-2-1.5 0-2.2 4.3-1.8 4.3-4.4v3.9zM10.5 13.2c0-2.6-1.8-3.8-4.7-3.8-3.3 0-6.1 1.5-6.1 1.5l1.2 3s2.4-1.1 4.2-1.1c1.5 0 2.2.6 2.2 1.4 0 2.1-7.2 1.8-7.2 6.6 0 2.9 2.2 4.4 5.2 4.4 2.6 0 4.7-1.2 4.7-1.2l-.2 1h3.3v-12.8h-.4zm-3.3 6.8c0 1.1-.9 1.8-2.1 1.8-1.2 0-1.8-.5-1.8-1.4 0-2 4-1.6 4-4v3.6zM26.4 9.4c-1.9 0-3.3.9-4 1.8V5.3l-3.6.8v19.9h3.6v-9.3c0-2.2 1.6-3.6 3.6-3.6 1.8 0 2.8 1.1 2.8 3.1v9.8h3.6V14.3c0-3.1-2-4.9-6-4.9zM73.4 9.4c-4.4 0-7.7 3.3-7.7 8.3s3.3 8.3 7.7 8.3c3.5 0 6.1-1.6 6.1-1.6l-1-3s-2.1 1.1-4.3 1.1c-2.4 0-4.3-1.5-4.4-4.2h10.3c.1-.5.1-1.1.1-1.6.1-4.8-3-7.3-7-7.3zm-3.9 6.2c.3-2.1 2-3.4 3.9-3.4s3.3 1.3 3.4 3.4H69.5zM89.3 9.4c-2.1 0-3.7 1.1-4.4 2.3V9.7h-3.4v20.9l3.6-.8V20.1c.7 1.2 2.3 2.3 4.4 2.3 3.8 0 6.6-3.1 6.6-8.3s-2.8-8.3-6.8-8.3zm-1 9.9c-2 0-3.4-1.5-3.4-4.8s1.4-4.8 3.4-4.8c2 0 3.4 1.5 3.4 4.8s-1.4 4.8-3.4 4.8z"/>
                        </svg>
                    </div>

                    {/* Meta Ads */}
                    <div className="flex items-center justify-center h-8">
                        <svg viewBox="0 0 120 32" className="h-[23px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <path d="M12.4 12.3c-1.6-2.5-4.3-4.1-7.4-4.1C2.2 8.2 0 10.4 0 13.2c0 2.8 2.2 5 5 5 3.1 0 5.8-1.6 7.4-4.1.6.9 1.4 1.6 2.4 2.1 1.6 2.5 4.3 4.1 7.4 4.1 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5-3.1 0-5.8 1.6-7.4 4.1-.6-.9-1.4-1.6-2.4-2.1zm-7.4 3.8c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.9 0 3.5 1.5 4.1 3.4-.6 1.5-2.2 2.4-4.1 2.4zm14.8 0c-1.9 0-3.5-1.5-4.1-3.4.6-1.5 2.2-2.4 4.1-2.4 1.6 0 2.9 1.3 2.9 2.9.1 1.6-1.2 2.9-2.9 2.9z"/>
                            <text x="30" y="21" className="font-inter font-black text-sm tracking-wide">Meta Ads</text>
                        </svg>
                    </div>

                    {/* Google Analytics */}
                    <div className="flex items-center justify-center h-8">
                        <svg viewBox="0 0 155 32" className="h-[23px] fill-current opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <rect x="0" y="14" width="3.5" height="12" rx="1.75"/>
                            <rect x="6" y="8" width="3.5" height="18" rx="1.75"/>
                            <rect x="12" y="2" width="3.5" height="24" rx="1.75"/>
                            <text x="22" y="20" className="font-inter font-black text-sm tracking-wide">Google Analytics</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
