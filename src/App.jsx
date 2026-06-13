import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Results from './components/Results';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    // 1. Cursor Glow Element Tracker setup
    const glow = document.createElement('div');
    glow.className = 'cursor-glow-element';
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    const handleMouseMove = (e) => {
      glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Expand glow on hover of links, buttons, and trust pills
    const handleMouseEnter = () => {
      glow.style.width = '700px';
      glow.style.height = '700px';
      glow.style.background = 'radial-gradient(circle, rgba(91, 110, 245, 0.16) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)';
    };
    const handleMouseLeave = () => {
      glow.style.width = '500px';
      glow.style.height = '500px';
      glow.style.background = 'radial-gradient(circle, rgba(91, 110, 245, 0.1) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)';
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .trust-pill').forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // 2. Button Click Ripple effect handler
    const handleRippleClick = function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple-span';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const addRippleListeners = () => {
      document.querySelectorAll('.ripple-effect').forEach(btn => {
        btn.removeEventListener('click', handleRippleClick); // Prevent double bindings
        btn.addEventListener('click', handleRippleClick);
      });
    };

    // 3. Magnetic Hover Button Offset tracker
    const handleMagneticMove = function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      this.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0) scale(1.03)`;
      this.style.boxShadow = '0 10px 30px rgba(91, 110, 245, 0.45)';
    };
    const handleMagneticLeave = function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    };

    const addMagneticListeners = () => {
      document.querySelectorAll('.magnetic-button').forEach(btn => {
        btn.removeEventListener('mousemove', handleMagneticMove);
        btn.removeEventListener('mouseleave', handleMagneticLeave);
        btn.addEventListener('mousemove', handleMagneticMove);
        btn.addEventListener('mouseleave', handleMagneticLeave);
      });
    };

    // Bind listeners immediately
    addHoverListeners();
    addRippleListeners();
    addMagneticListeners();

    // Re-bind listeners occasionally to capture components rendered dynamically later
    const interval = setInterval(() => {
      addHoverListeners();
      addRippleListeners();
      addMagneticListeners();
    }, 1500);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      if (document.body.contains(glow)) {
        document.body.removeChild(glow);
      }
    };
  }, []);

  return (
    <div className="bg-[#050816] min-h-screen text-[#F0F4FF] overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Results />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
