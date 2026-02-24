import { Zap, Code, MessageSquare, Cog, Brain } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'AI Website Development',
    description: 'Modern websites powered by artificial intelligence',
  },
  {
    icon: Cog,
    title: 'Custom Software & Apps',
    description: 'Tailored solutions built with cutting-edge technology',
  },
  {
    icon: MessageSquare,
    title: 'AI Marketing Automation',
    description: 'Smart campaigns that drive results and engagement',
  },
  {
    icon: Brain,
    title: 'AI Sales & WhatsApp Agent',
    description: '24/7 automated customer engagement and support',
  },
  {
    icon: Zap,
    title: 'AI Business Systems',
    description: 'Intelligent automation for your entire operation',
  },
];

const openWhatsApp = () => {
  const phoneNumber = '60102345678';
  const message = 'Hi Nessolution, I\'d like to learn more about your services.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

export default function WhatWeDo() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Everything Your Business Needs,{' '}
            <span className="text-cyan-400">Powered By AI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <button
                  onClick={openWhatsApp}
                  className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
