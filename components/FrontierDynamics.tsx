
import React from 'react';
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react';
import { SAHEL_CASE_STUDY } from '../constants';

const FrontierDynamics: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-sand-900 text-sand-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand-800/30 transform skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sand-700 text-sand-300 text-xs tracking-wider uppercase mb-6">
              Case Study Analysis
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {SAHEL_CASE_STUDY.title}
            </h2>
            <p className="text-xl text-sand-200 font-light leading-relaxed mb-8">
              {SAHEL_CASE_STUDY.content}
            </p>
            
            <div className="space-y-6">
              {SAHEL_CASE_STUDY.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1.5 min-w-[20px] h-[1px] bg-oasis-500"></div>
                  <p className="text-sand-100/80 font-light">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="bg-sand-800 p-10 rounded-3xl border border-sand-700 shadow-2xl relative">
                <Quote className="absolute top-10 left-8 text-sand-700 transform scale-150 rotate-180" size={48} />
                <p className="relative z-10 text-lg md:text-xl font-serif italic text-sand-100 leading-relaxed mb-8 pt-6">
                  "It is imperative that the global distribution and extent of GDEs be improved so that programmatic and policy decisions can protect these vulnerable dryland environments."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sand-700 rounded-full flex items-center justify-center">
                    <ShieldCheck size={20} className="text-oasis-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Policy Recommendation</div>
                    <div className="text-sm text-sand-400">Integrated protection strategies required</div>
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
