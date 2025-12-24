import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajkumar",
        role: "Founder, COPPERAA",
        text: "Great Shopify work. Clean design and smooth delivery. The store looks premium and works perfectly across all devices.",
        avatar: (
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 20C4 16 8 16 12 16C16 16 20 16 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    },
    {
        name: "Abhishek",
        role: "Founder, COPPRLY",
        text: "Very professional Shopify setup and support. Communication was clear and the final result exceeded our expectations.",
        avatar: (
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="4" width="8" height="8" rx="4" fill="currentColor" />
                <path d="M4 20C4 17 8 17 12 17C16 17 20 17 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    },
    {
        name: "Himanshu",
        role: "Founder, DREZYY",
        text: "Our Shopify store looks modern and premium. The mobile experience is exactly what we needed for our customers.",
        avatar: (
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L14.5 9H9.5L12 4Z" fill="currentColor" />
                <circle cx="12" cy="7" r="3" fill="currentColor" />
                <path d="M5 20C5 17 9 17 12 17C15 17 19 17 19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    }
];

// Double the testimonials to create seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#080808] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What My Clients Say</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

            <div className="relative w-full flex overflow-hidden group">
                {/* Marquee Container */}
                <div className="flex animate-marquee group-hover:pause-on-hover gap-8 pr-8">
                    {duplicatedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl relative flex-shrink-0 w-[85vw] md:w-[450px]"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden p-1">
                                    {item.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold">{item.name}</div>
                                    <div className="text-xs text-gray-500">Verified Client <span className='text-gray-600'>| {item.role}</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Duplicate container for seamless loop if needed, but CSS keyframe handles 100% loop with duplicated data in one list usually. 
                    However, standard marquee technique often uses two identical lists moving together. 
                    Let's stick to the single list with double data and translateX(-50%) for the loop logic. 
                    The keyframe moves from 0 to -50%. The list contains [A, B, C, A, B, C]. At -50%, we are at the start of the second set, which looks exactly like the start of the first set (0%).
                */}
            </div>
        </section>
    );
};

export default Testimonials;
