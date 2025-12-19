import React from 'react';
import { BookOpen, ExternalLink, Mic, PlayCircle } from 'lucide-react';
import { FRONTIER_PAPERS, EXPERT_INTERVIEW } from '../constants';

const FrontierDynamics: React.FC = () => {
  return (
    <section id="frontier" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-oasis-600 font-medium tracking-wider text-sm uppercase mb-2 block">Monthly Update</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Frontier Dynamics</h2>
          </div>
          <a href="#" className="text-gray-500 hover:text-oasis-600 flex items-center gap-2 text-sm font-medium transition-colors">
            View Archive <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Latest Papers Column (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-serif text-2xl text-gray-800 flex items-center gap-2 mb-6">
              <BookOpen className="text-sand-400" size={24} />
              Top-Tier Research
            </h3>
            
            <div className="space-y-6">
              {FRONTIER_PAPERS.map((paper) => (
                <div key={paper.id} className="group bg-sand-50 rounded-2xl p-6 border border-sand-100 hover:border-oasis-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-oasis-700 mb-2">
                        <span className="bg-oasis-100 px-2 py-0.5 rounded">{paper.journal}</span>
                        <span className="text-gray-400">{paper.date}</span>
                      </div>
                      <h4 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-oasis-800 transition-colors">
                        {paper.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {paper.summary}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="italic">{paper.authors}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={paper.abstractUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 bg-white rounded-full text-gray-400 group-hover:text-oasis-600 group-hover:scale-110 transition-all shadow-sm"
                      title="Read Abstract"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Interview Column (Right - 5 cols) */}
          <div className="lg:col-span-5">
             <h3 className="font-serif text-2xl text-gray-800 flex items-center gap-2 mb-6">
              <Mic className="text-sand-400" size={24} />
              Expert Voices
            </h3>

            <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl text-white h-[500px] flex flex-col justify-end group">
              {/* Background Image */}
              <img 
                src={EXPERT_INTERVIEW.imageUrl} 
                alt={EXPERT_INTERVIEW.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  In Conversation
                </div>
                
                <h4 className="font-serif text-2xl font-bold mb-1">{EXPERT_INTERVIEW.name}</h4>
                <p className="text-sand-300 text-sm mb-6">{EXPERT_INTERVIEW.role}</p>
                
                <blockquote className="text-lg font-light italic leading-relaxed text-gray-200 mb-8 border-l-2 border-oasis-500 pl-4">
                  "{EXPERT_INTERVIEW.quote}"
                </blockquote>

                <button className="w-full py-4 bg-oasis-600 hover:bg-oasis-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn">
                  <PlayCircle size={20} />
                  <span>Read Full Interview</span>
                </button>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-sand-50 rounded-xl border border-sand-100">
               <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Next Month</div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                     <img src="https://picsum.photos/id/65/100/100" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Prof. Wang Wei</p>
                    <p className="text-xs text-gray-500">Topic: AI in Desert Drones</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FrontierDynamics;