import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Maintenance from './components/Maintenance';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#030014] min-h-screen text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <Maintenance />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
