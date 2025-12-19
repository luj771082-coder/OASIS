
import React from 'react';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-sand-50">
      {/* Abstract Background - Simulating Satellite Data */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sand-50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 mt-12 text-center">
        <div className="inline-flex items-center gap-2 py-1 px-4 border border-gray-300 rounded-full bg-white/50 backdrop-blur-sm text-gray-600 text-xs tracking-widest uppercase mb-8 animate-fade-in-up">
          <FileText size={12} />
          <span>Nature | Vol 632 | August 2024</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl text-gray-900 font-bold mb-8 leading-tight animate-fade-in-up delay-100">
          Groundwater-Dependent <br/>
          <span className="text-oasis-600">Ecosystems Map</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          "Exposes global dryland protection needs."
        </p>

        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200 border-t border-gray-200 pt-8">
          A visual analysis of the study by <span className="font-semibold text-gray-800">Melissa M. Rohde et al.</span>, revealing that 53% of GDEs exist in regions with declining groundwater trends, while only 21% are protected.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
           <a 
            href="#highlights" 
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl text-sm font-medium tracking-wide"
          >
            Read Analysis
            <ArrowDown size={16} />
          </a>
          <a 
            href="https://doi.org/10.1038/s41586-024-07702-8" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium tracking-wide"
          >
            Source PDF
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
