import { Code, Cog, MessageSquare, Brain, Zap } from 'lucide-react';

const serviceDetails = [
  {
    icon: Code,
    title: 'AI Website Development',
    description: 'Modern websites powered by artificial intelligence. From responsive design to intelligent features, we create websites that work as hard as you do.',
  },
  {
    icon: Cog,
    title: 'Custom Software & Apps',
    description: 'Tailored solutions built with cutting-edge technology. Whatever your business needs, we build it with scalability and performance in mind.',
  },
  {
    icon: MessageSquare,
    title: 'AI Marketing Automation',
    description: 'Smart campaigns that drive results and engagement. Let AI handle repetitive tasks while you focus on growing your business.',
  },
  {
    icon: Brain,
    title: 'AI Sales & WhatsApp Agent',
    description: '24/7 automated customer engagement and support. Your AI agent handles inquiries, qualifies leads, and drives conversions around the clock.',
  },
];

const openWhatsApp = () => {
  const phoneNumber = '60102345678';
  const message = 'Hi Nessolution, I\'d like to apply for a service.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

export default function ServicesDeepDive() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Our Services
          </h2>
        </div>

        <div className="space-y-24">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div className={isEven ? '' : 'md:order-2'}>
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-1"
                  >
                    Apply Now
                  </button>
                </div>

                <div className={isEven ? '' : 'md:order-1'}>
                  <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl flex items-center justify-center">
                    <Icon className="w-32 h-32 text-cyan-500/30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            More Services Coming Soon
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            We're constantly expanding our AI capabilities and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300"
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
