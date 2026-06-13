import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const words = ['customers.', 'revenue.', 'growth.'];
    const [wordIndex, setWordIndex] = useState(0);

    // Word rotation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Canvas particle background
    useEffect(() => {
        const canvas = document.getElementById('hero-particle-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.8 + 0.4;
                this.speedX = Math.random() * 0.15 - 0.075;
                this.speedY = Math.random() * -0.25 - 0.05;
                this.opacity = Math.random() * 0.4 + 0.15;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x < 0 || this.x > canvas.width) {
                    this.x = Math.random() * canvas.width;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(91, 110, 245, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 35; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-16 bg-[#050816]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-indigo-accent/15 rounded-full blur-[130px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-purple-accent/10 rounded-full blur-[130px]"></div>
                <canvas id="hero-particle-canvas" className="absolute inset-0 w-full h-full opacity-60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center text-left">
                    
                    {/* Left Column Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start"
                    >
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-accent/10 border border-indigo-accent/20 text-indigo-accent text-xs font-mono tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(91,110,245,0.05)]">
                            ✨ Trusted Shopify Growth Partner
                        </div>
                        
                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white max-w-2xl mb-6 font-satoshi">
                            Build Shopify stores<br className="hidden md:block" />
                            that turn visitors into<br className="hidden md:block" />
                            <span className="relative inline-block text-left h-[1.1em] w-[260px] sm:w-[320px] md:w-[380px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={words[wordIndex]}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-accent to-purple-accent"
                                    >
                                        {words[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>
                        
                        {/* Subheadline */}
                        <p className="text-text-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-inter font-medium">
                            Conversion-focused Shopify experiences engineered to increase sales, improve retention, and scale D2C brands globally.
                        </p>
                        
                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                            <a
                                href="https://cal.com/aruneshmaurya/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-indigo-accent to-purple-accent text-white rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,110,245,0.5)] transform hover:scale-[1.03] flex items-center justify-center gap-2 group/btn ripple-effect"
                            >
                                Book Free Strategy Call
                                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </a>
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-7 py-3.5 border border-white/10 hover:border-white/20 text-white bg-white/[0.02] hover:bg-white/[0.05] rounded-full font-bold text-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center transform hover:scale-[1.03] ripple-effect"
                            >
                                View Case Studies
                            </a>
                        </div>

                        {/* Trust Pills */}
                        <div className="flex flex-wrap gap-3 border-t border-white/[0.06] pt-6 w-full max-w-xl">
                            <div className="trust-pill cursor-pointer px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-semibold text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-indigo-accent/30 transition-all duration-300 flex items-center gap-2">
                                ⭐ 5.0 Client Satisfaction
                            </div>
                            <div className="trust-pill cursor-pointer px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-semibold text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-indigo-accent/30 transition-all duration-300 flex items-center gap-2">
                                🚀 50+ Projects Delivered
                            </div>
                            <div className="trust-pill cursor-pointer px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-semibold text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-indigo-accent/30 transition-all duration-300 flex items-center gap-2">
                                🌎 Global Clients
                            </div>
                            <div className="trust-pill cursor-pointer px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-semibold text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-indigo-accent/30 transition-all duration-300 flex items-center gap-2">
                                ⚡ Fast Turnaround
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Visual (3D Dashboard Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-visual-container perspective-1000 hidden lg:flex items-center justify-center"
                    >
                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="floating-card card-f1"
                        >
                            <span>📈 +37% Conversion Rate</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="floating-card card-f2"
                        >
                            <span>⚡ 0.9s Load Time</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="floating-card card-f3"
                        >
                            <span>💰 +$52K Revenue</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="floating-card card-f4"
                        >
                            <span>⭐ 5.0 Rating</span>
                        </motion.div>

                        {/* Interactive 3D Dashboard */}
                        <div className="dashboard-container-3d rotate-y-12 dashboard-3d w-[85%] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)]">
                            
                            {/* Dashboard Header Chrome */}
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5 mb-4 text-left">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block"></span>
                                    <span className="color-text-muted text-[10px] font-mono ml-2 opacity-50">shopify-admin/w3setup</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-full text-[10px] text-[#10B981] font-bold border border-rgba(16,185,129,0.15)">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse shadow-[0_0_8px_#10B981]"></span>
                                    Live Store Analytics
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-[2fr_1.1fr] gap-4 text-left">
                                {/* Revenue Chart Block */}
                                <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl">
                                    <span className="text-[10px] text-text-muted font-mono uppercase opacity-55">Total Revenue</span>
                                    <h4 className="text-2xl font-black text-white mt-1 mb-3 font-satoshi">$142,384.50</h4>
                                    
                                    {/* Curved Line SVG */}
                                    <svg viewBox="0 0 300 100" className="w-full h-[80px] overflow-visible">
                                        <defs>
                                            <linearGradient id="react-chart-glow" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5B6EF5" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#5B6EF5" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                        <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                        <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                        
                                        <path d="M0 80 Q 40 40, 80 60 T 160 30 T 240 45 T 300 10" fill="none" stroke="#5B6EF5" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M0 80 Q 40 40, 80 60 T 160 30 T 240 45 T 300 10 L 300 100 L 0 100 Z" fill="url(#react-chart-glow)" />
                                        <circle cx="300" cy="10" r="4" fill="#fff" stroke="#5B6EF5" strokeWidth="2" />
                                    </svg>
                                </div>

                                {/* Sidebar Stats */}
                                <div className="flex flex-col gap-3">
                                    {/* Speed score Circle Gauges */}
                                    <div className="bg-white/[0.01] border border-white/[0.04] p-3 rounded-xl text-center">
                                        <span className="text-[9px] text-text-muted font-mono uppercase opacity-55">Speed Score</span>
                                        <div className="relative w-14 h-14 mx-auto mt-2">
                                            <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3.5" />
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="3.5" strokeDasharray="98, 100" />
                                            </svg>
                                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-[#10B981] font-satoshi">98</span>
                                        </div>
                                        <span className="text-[8px] text-[#10B981] font-bold block mt-1">Excellent</span>
                                    </div>

                                    {/* AOV Lift card */}
                                    <div className="bg-white/[0.01] border border-white/[0.04] p-3 rounded-xl text-center flex flex-col justify-center flex-grow">
                                        <span className="text-[9px] text-text-muted font-mono uppercase opacity-55">Average AOV</span>
                                        <span className="text-base font-extrabold text-[#8B5CF6] mt-0.5">+$12.40</span>
                                        <span className="text-[8px] text-text-muted opacity-55 mt-0.5">+18% Lift</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
