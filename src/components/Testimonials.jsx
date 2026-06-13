import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Rajkumar S.",
        company: "Founder, COPPERAA",
        badge: "Lifestyle & Wellness",
        text: "Honestly didn't expect this level of quality at this price point. The store went from a basic template to something that looks like a ₹10L agency built it. PageSpeed went from 44 to 89 after optimization. Sales picked up within the first week.",
        initials: "RS"
    },
    {
        name: "Abhishek M.",
        company: "Founder, COPPRLY",
        badge: "Copper Products",
        text: "What stood out was the communication — daily updates, no ghosting, delivered 2 days ahead of schedule. The mobile experience is exactly what our customers needed. Our add-to-cart rate improved significantly after launch.",
        initials: "AM"
    },
    {
        name: "Himanshu T.",
        company: "Founder, DREZYY",
        badge: "Fashion & Apparel",
        text: "We'd worked with two agencies before and both disappointed us. W3Setup delivered a fashion store that actually looks fashion. The product pages, the typography, the hover effects — everything felt intentional. Very happy.",
        initials: "HT"
    },
    {
        name: "Cupreva Team",
        company: "Founder, CUPREVA",
        badge: "Health & Wellness",
        text: "Needed a health brand store that builds trust fast — copper products need credibility. The 'Why Copper?' storytelling section they designed converted visitors who were on the fence. Clean, fast, and exactly on-brand.",
        initials: "CT"
    }
];

// Duplicate items for continuous seamless looping (3 sets is ideal for filling desktop screen width)
const carouselItems = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative overflow-hidden bg-bg-primary">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="eyebrow-label mb-4">
                        CLIENT LOVE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 font-sora mt-2">
                        Don't take my word for it.
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto font-inter">
                        Real feedback from real brand founders.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="w-full overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-none py-8 px-4 -mx-4">
                    <div className="flex gap-6 animate-carousel-loop">
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className="testimonials-card w-[300px] md:w-[380px] shrink-0 snap-center rounded-[20px] p-8 transition-all duration-300 relative select-none flex flex-col justify-between"
                                style={{
                                    background: 'linear-gradient(135deg, #111827 0%, #0D1526 100%)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                                    e.currentTarget.style.boxShadow = '0 0 32px var(--accent-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                                }}
                            >
                                {/* Quote mark icon background */}
                                <div className="absolute top-4 left-4 text-[64px] font-sora font-extrabold text-accent opacity-30 leading-none select-none pointer-events-none">
                                    "
                                </div>

                                <div className="relative z-10 flex flex-col">
                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-6 text-[#F59E0B] text-[18px]">
                                        ★★★★★
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-[#CBD5E1] text-[15px] leading-[1.7] italic font-inter mb-8">
                                        "{item.text}"
                                    </p>
                                </div>

                                {/* Divider & Author Row */}
                                <div className="relative z-10 mt-auto">
                                    <div className="h-[1px] bg-white/[0.07] w-full mb-6"></div>
                                    
                                    <div className="flex items-center gap-3.5">
                                        {/* Avatar */}
                                        <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-r from-accent to-accent-purple flex items-center justify-center text-text-primary font-sora font-bold text-[14px] shrink-0 shadow-md">
                                            {item.initials}
                                        </div>

                                        {/* Author Details */}
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-sora text-[15px] font-bold text-text-primary truncate">
                                                {item.name}
                                            </span>
                                            
                                            <div className="flex items-center gap-2 flex-wrap mt-0.5">
                                                <span className="font-inter text-[13px] text-text-secondary truncate max-w-[120px] md:max-w-[150px]">
                                                    {item.company}
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full text-[11px] bg-accent/10 text-accent font-inter font-medium shrink-0">
                                                    {item.badge}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Centered Trust line below the carousel */}
                <div className="text-center mt-12">
                    <p className="font-inter text-[13px] text-text-secondary opacity-70 tracking-wide">
                        All reviews are from verified clients &middot; Projects delivered 2023&ndash;2025
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
