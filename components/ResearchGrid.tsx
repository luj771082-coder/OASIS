import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MOCK_RESEARCH_DATA } from '../constants';

const ResearchGrid: React.FC = () => {
  return (
    <section id="research" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Frontier Research</h2>
        <p className="text-gray-500 max-w-xl text-lg font-light">
          Curated studies and breakthrough findings in the field of desert ecology and restoration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
        {MOCK_RESEARCH_DATA.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-md">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800 uppercase tracking-wider">
                {article.category}
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{article.author}</span>
                </div>
                <h3 className="font-serif text-2xl text-gray-900 group-hover:text-oasis-700 transition-colors mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <div className="ml-4 p-2 rounded-full border border-gray-200 group-hover:bg-oasis-50 group-hover:border-oasis-200 transition-all">
                <ArrowUpRight size={20} className="text-gray-400 group-hover:text-oasis-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGrid;