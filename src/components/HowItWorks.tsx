import { MessageCircle, Lightbulb, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Tell Us Your Problem',
    description: 'Share your business challenges and goals with our AI experts',
  },
  {
    icon: Lightbulb,
    title: 'We Build With AI',
    description: 'We design and develop intelligent solutions tailored to you',
  },
  {
    icon: TrendingUp,
    title: 'You Grow Faster',
    description: 'Launch faster, automate smarter, and scale with confidence',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-cyan-400/50">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
