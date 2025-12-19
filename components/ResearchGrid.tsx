
import React from 'react';
import { AlertTriangle, ShieldAlert, Map, Users } from 'lucide-react';
import { STUDY_HIGHLIGHTS } from '../constants';

const ResearchGrid: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'alert': return <AlertTriangle className="text-red-500" size={24} />;
      case 'shield': return <ShieldAlert className="text-oasis-600" size={24} />;
      case 'map': return <Map className="text-blue-500" size={24} />;
      case 'people': return <Users className="text-orange-500" size={24} />;
      default: return <Map size={24} />;
    }
  };

  return (
    <section id="highlights" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="mb-16 text-center">
        <h2 className="font-serif text-4xl text-gray-900 mb-4">Core Findings</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          Utilizing Random Forest machine learning on 30m resolution Landsat data to map probable GDEs across global drylands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STUDY_HIGHLIGHTS.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-sand-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-sand-50 rounded-full">
              {getIcon(item.iconType)}
            </div>
            <div className="font-serif text-5xl font-bold text-gray-900 mb-2">
              {item.value}
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGrid;
