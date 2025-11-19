import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophia Laurent',
      role: 'Fashion Editor',
      company: 'Vogue Paris',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Atelier Luxe has completely transformed my wardrobe. The styling consultation was impeccable, and the curated collections are always on point. A true luxury experience.',
      rating: 5
    },
    {
      name: 'Isabella Chen',
      role: 'Creative Director',
      company: 'Elle Magazine',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'The attention to detail and personalized service is unmatched. From the lookbooks to the styling tips, everything reflects sophistication and elegance. Absolutely stunning!',
      rating: 5
    },
    {
      name: 'Emma Richardson',
      role: 'Lifestyle Influencer',
      company: '@EmmaStyleDaily',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      quote: 'I\'ve found my fashion sanctuary at Atelier Luxe. The designer collections and advanced filtering make shopping effortless. Their gift cards are my go-to for special occasions!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-600"></div>
            <Quote className="w-8 h-8 text-purple-600 mx-3" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our valued clients about their exceptional experiences with Atelier Luxe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Quote Background */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-24 h-24 text-purple-600" />
              </div>

              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-400 to-pink-400 shadow-lg mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient Ring Animation */}
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl mx-auto transition-opacity duration-300"></div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 mx-0.5 transform group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <p className="text-gray-700 text-center italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="text-center border-t border-gray-100 pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-medium text-purple-600 mb-1">
                  {testimonial.role}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonial.company}
                </p>
              </div>

              {/* Bottom Gradient Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              5,000+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;