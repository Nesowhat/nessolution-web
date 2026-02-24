import { Check, Star } from 'lucide-react';

const openWhatsApp = () => {
  const phoneNumber = '60102345678';
  const message = 'Hi Nessolution, I\'m interested in getting started with a package.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

const plans = [
  {
    name: 'Starter',
    oneTime: 'RM500',
    monthly: 'RM80',
    description: 'Perfect for small businesses starting online',
    features: [
      'Landing page (1 page)',
      'WhatsApp button integration',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    oneTime: 'RM1,000',
    monthly: 'RM120',
    description: 'Growing business with online presence',
    features: [
      '3–5 pages website',
      'Contact form',
      'Mobile responsive',
      'Basic SEO',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    oneTime: 'RM2,000',
    monthly: 'RM180',
    description: 'Complete business solution',
    features: [
      'Multi-page website',
      'Database integration',
      'Login/Booking system',
      'Advanced features',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'E-commerce',
    oneTime: 'RM3,500',
    monthly: 'RM250',
    description: 'Full online store setup',
    features: [
      'Online store setup',
      'Payment gateway integration',
      'Product management',
      'Inventory tracking',
      'Advanced analytics',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Simple <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'lg:col-span-1 md:col-span-2 lg:row-span-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

                <div className="space-y-2 mb-6">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">One-time fee</p>
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">
                      {plan.oneTime}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Monthly maintenance</p>
                    <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                      {plan.monthly}
                    </span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openWhatsApp}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
