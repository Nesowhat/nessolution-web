import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'TechStart Solutions',
    category: 'Corporate Website',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'ShopEase Store',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'FitLife Gym',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing our recent projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-cyan-400 text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
