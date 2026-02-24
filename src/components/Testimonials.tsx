import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Ahmad',
    business: 'Restaurant Owner',
    rating: 5,
    comment: 'Nessolution transformed our online presence. Our website is beautiful and our online orders have increased by 200%!',
  },
  {
    name: 'Michael Tan',
    business: 'E-commerce Founder',
    rating: 5,
    comment: 'Professional team, excellent communication, and delivered beyond our expectations. Our sales have never been better!',
  },
  {
    name: 'Lisa Wong',
    business: 'Fitness Studio Owner',
    rating: 5,
    comment: 'The landing page they created is stunning and converts really well. We get new sign-ups every single day now!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.comment}</p>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-cyan-400 text-sm">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
