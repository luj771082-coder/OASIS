
import React from 'react';
import { Database, Satellite, Cpu, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_METRICS } from '../constants';

const Methodology: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Satellite size={24} className="text-oasis-400" />;
      case 1: return <Database size={24} className="text-blue-400" />;
      case 2: return <CheckCircle2 size={24} className="text-green-400" />;
      case 3: return <Cpu size={24} className="text-purple-400" />;
      default: return <Database size={24} />;
    }
  };

  return (
    <section id="methodology" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:flex justify-between items-end border-b border-gray-800 pb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl text-white mb-4">Scientific Framework</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              The study employs a <span className="text-oasis-400 font-medium">Random Forest</span> machine learning model to predict GDE occurrence, integrating satellite-based spectral data with climatic and topographic variables.
            </p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Methodology</div>
             <div className="font-serif text-xl">Rohde et al. 2024</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_METRICS.map((metric, idx) => (
            <div key={metric.id} className="group relative bg-gray-800/50 hover:bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-oasis-500/50 transition-all duration-300">
              <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {getIcon(idx)}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {metric.value}
              </div>
              
              <div className="h-1 w-12 bg-oasis-600 mb-6 group-hover:w-20 transition-all duration-300"></div>
              
              <h3 className="text-lg font-medium text-oasis-100 mb-3">
                {metric.label}
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-800 rounded-3xl border border-gray-700 flex flex-col md:flex-row items-center gap-8 md:gap-12">
           <div className="flex-1">
              <h4 className="font-serif text-2xl mb-2">Predictive Logic</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The model identifies GDEs as "green islands" that maintain photosynthetic activity and cooler land surface temperatures (LST) during dry seasons, contrasting with the surrounding moisture-limited landscape.
              </p>
           </div>
           <div className="flex gap-4">
              <div className="px-6 py-3 bg-gray-900 rounded-lg border border-gray-700 text-xs font-mono text-oasis-400">
                LST_Anomaly
              </div>
              <div className="px-6 py-3 bg-gray-900 rounded-lg border border-gray-700 text-xs font-mono text-oasis-400">
                ETaP_Ratio
              </div>
              <div className="px-6 py-3 bg-gray-900 rounded-lg border border-gray-700 text-xs font-mono text-oasis-400">
                NDVI_DrySeason
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
