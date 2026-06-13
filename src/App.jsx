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
  return (
    <div className="bg-[#070B14] min-h-screen text-[#F0F4FF] overflow-hidden">
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
