import { ChevronDown } from 'lucide-react';

const openWhatsApp = () => {
  const phoneNumber = '60102345678';
  const message = 'Hi Nessolution, I\'m interested in learning about your AI solutions.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-float-orb-1"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float-orb-2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.05),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block text-sm font-medium text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
            Welcome to the Future
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 leading-tight">
          We Power Businesses With AI
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-12 animate-fade-in-up animation-delay-400 max-w-3xl mx-auto leading-relaxed">
          From websites to full AI systems — we build the future of your business
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
          <button
            onClick={openWhatsApp}
            className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Explore Our Solutions
          </button>
          <button
            onClick={openWhatsApp}
            className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Talk To Us
          </button>
        </div>

        <div className="animate-scroll">
          <ChevronDown className="w-6 h-6 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
