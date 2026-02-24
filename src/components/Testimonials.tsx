import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,212,255,0.03),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <div className="p-12 bg-white/5 border border-white/10 rounded-3xl min-h-96 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-2xl text-white mb-8 leading-relaxed font-light">
                "{testimonials[current].comment}"
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
              <p className="text-cyan-400">{testimonials[current].business}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-cyan-400 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
