import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1043/1920/1080?grayscale" 
          alt="Desert Landscape" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-sand-50/100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
        <span className="inline-block py-1 px-3 border border-sand-300 rounded-full text-sand-100 text-xs tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
          Ecological Preservation
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand-50 font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Reclaiming the <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-oasis-300 to-sand-200">
            Lost Horizon
          </span>
        </h1>
        <p className="text-lg md:text-xl text-sand-100/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Exploring the delicate balance between arid expansion and oasis restoration. 
          Scientific breakthroughs reshaping our understanding of desert ecosystems.
        </p>
        
        <div className="animate-fade-in-up delay-300">
           <a 
            href="#research" 
            className="inline-flex items-center gap-2 bg-oasis-600 hover:bg-oasis-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-oasis-500/30 text-sm font-medium tracking-wide"
          >
            Explore Research
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;