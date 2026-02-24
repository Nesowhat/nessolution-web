import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import WhyNessolution from './components/WhyNessolution';
import ServicesDeepDive from './components/ServicesDeepDive';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <WhyNessolution />
      <ServicesDeepDive />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
