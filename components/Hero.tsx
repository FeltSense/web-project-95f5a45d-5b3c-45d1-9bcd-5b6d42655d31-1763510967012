'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-purple-300/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-blue-300/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rotate-12 animate-float-slow"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        ></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-purple-400 opacity-60" />
      </div>
      <div className="absolute top-48 right-16 animate-float-delayed">
        <Star className="w-6 h-6 text-blue-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 right-32 animate-float-slow">
        <Sparkles className="w-10 h-10 text-pink-400 opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/40">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Spring/Summer 2024 Collection
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              Redefine Your
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Elegance
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover curated collections where timeless sophistication meets contemporary design.
            <span className="block mt-2 text-base md:text-lg text-gray-500">
              Handpicked designer pieces for the modern connoisseur.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Primary CTA */}
            <a
              href="#collections"
              className="group relative px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Secondary CTA */}
            <a
              href="#lookbook"
              className="group px-8 py-4 text-base sm:text-lg font-bold text-gray-800 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:border-purple-400 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Lookbook</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>

          {/* Feature Tags */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-md">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              <span className="font-medium">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-md">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse delay-200"></div>
              <span className="font-medium">Exclusive Designs</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-md">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full animate-pulse delay-400"></div>
              <span className="font-medium">Sustainable Fashion</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1 animate-bounce">
              <div className="w-1.5 h-1.5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mx-auto animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}