const Marquee = () => {
    const niches = [
        "Fashion Brands",
        "Beauty & Skincare",
        "Home Decor",
        "Health & Wellness",
        "Electronics",
        "Food & Beverage",
        "Jewellery Brands",
        "Sports & Fitness"
    ];

    // Duplicate list for seamless looping
    const duplicatedNiches = [...niches, ...niches, ...niches];

    return (
        <section className="w-full bg-[#070B14] py-6 border-y border-white/[0.04] overflow-hidden relative select-none">
            {/* Gradient overlays to fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#070B14] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#070B14] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max">
                <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-mono tracking-[0.15em] uppercase text-text-muted">
                    {duplicatedNiches.map((niche, index) => (
                        <div key={index} className="flex items-center gap-12">
                            <span>{niche}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
