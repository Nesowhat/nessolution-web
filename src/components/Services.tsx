import { Palette, FileText, ShoppingCart, Wrench } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Custom, responsive designs that capture your brand essence and engage your audience effectively.',
  },
  {
    icon: FileText,
    title: 'Landing Page',
    description: 'High-converting landing pages optimized for your marketing campaigns and business goals.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Full-featured online stores with secure payment integration and inventory management.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your website secure, fast, and up-to-date.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
