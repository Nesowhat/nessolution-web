import { Zap, Brain, Headphones, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    title: '10x Faster Delivery',
    description: 'AI-powered development cuts time to market dramatically',
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Every project leverages the latest in artificial intelligence',
  },
  {
    icon: Headphones,
    title: 'Full Support Included',
    description: 'Ongoing maintenance and support built into every package',
  },
  {
    icon: MapPin,
    title: 'Built For Malaysia',
    description: 'Local expertise with global standards and capabilities',
  },
];

export default function WhyNessolution() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Why Nessolution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
