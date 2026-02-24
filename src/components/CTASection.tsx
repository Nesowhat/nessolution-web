const openWhatsApp = () => {
  const phoneNumber = '60102345678';
  const message = 'Hi Nessolution, I\'m ready to start my project.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

export default function CTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.05),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
          Ready To Grow With AI?
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          Let's build the future of your business together
        </p>

        <button
          onClick={openWhatsApp}
          className="px-10 py-5 bg-cyan-500 text-black rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-1 inline-block"
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}
