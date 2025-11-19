import React from 'react';
import { Sparkles, Filter, BookOpen, Ruler, Instagram, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Seasonal Collection Showcase',
      description: 'Explore our curated seasonal collections with stunning hero presentations featuring the latest trends and timeless pieces.',
      gradient: 'from-rose-500 to-pink-600',
      accentColor: 'text-rose-600'
    },
    {
      icon: Filter,
      title: 'Advanced Product Filtering',
      description: 'Discover women\'s wear, accessories, shoes, and bags through our intuitive filtering system tailored to your preferences.',
      gradient: 'from-purple-500 to-indigo-600',
      accentColor: 'text-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Designer Collections & Lookbooks',
      description: 'Browse exclusive designer collections and immersive lookbook galleries showcasing sophisticated style narratives.',
      gradient: 'from-blue-500 to-cyan-600',
      accentColor: 'text-blue-600'
    },
    {
      icon: Ruler,
      title: 'Size Guide & Styling Tips',
      description: 'Access comprehensive size guides, personalized styling tips, and create your custom style profile for a perfect fit.',
      gradient: 'from-amber-500 to-orange-600',
      accentColor: 'text-amber-600'
    },
    {
      icon: Instagram,
      title: 'Social Media Integration',
      description: 'Stay connected with our vibrant Instagram feed showcasing real customer styles, trends, and daily fashion inspiration.',
      gradient: 'from-fuchsia-500 to-rose-600',
      accentColor: 'text-fuchsia-600'
    },
    {
      icon: Gift,
      title: 'Style Consultations & Gifts',
      description: 'Book personalized styling consultations, explore our gift card options, and subscribe to exclusive fashion insights.',
      gradient: 'from-violet-500 to-purple-600',
      accentColor: 'text-violet-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"> Exclusive </span>
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your style journey with our comprehensive fashion services and personalized experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-md`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Service Title */}
                <h3 className={`text-xl font-bold mb-3 ${service.accentColor} group-hover:text-gray-900 transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Decorative Bottom Border */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;