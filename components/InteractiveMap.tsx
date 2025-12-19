
import React, { useState } from 'react';
import { MapPin, Maximize2 } from 'lucide-react';
import { MAP_LOCATIONS } from '../constants';
import { MapLocation } from '../types';

const InteractiveMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<MapLocation>(MAP_LOCATIONS[0]);

  return (
    <section id="map" className="py-24 bg-sand-50 relative overflow-hidden border-t border-b border-sand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl text-gray-900 mb-4">Global Impact Hotspots</h2>
          <p className="text-gray-600 text-lg font-light">
            Key regions analyzed in the study, highlighting the intersection of ecology, policy, and human activity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[500px]">
          {/* List View */}
          <div className="lg:col-span-1 space-y-4 overflow-y-auto pr-2">
            {MAP_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocation(loc)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeLocation.id === loc.id 
                    ? 'bg-white border-oasis-500 shadow-lg scale-100 ring-1 ring-oasis-500/20' 
                    : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md scale-95 hover:scale-100 text-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-serif text-lg font-bold ${activeLocation.id === loc.id ? 'text-gray-900' : 'text-gray-600'}`}>
                    {loc.name}
                  </h3>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                    loc.type === 'Conflict' ? 'bg-red-100 text-red-700' : 
                    loc.type === 'Depletion' ? 'bg-orange-100 text-orange-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {loc.type}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${activeLocation.id === loc.id ? 'text-gray-600' : 'text-gray-400 line-clamp-2'}`}>
                  {loc.description}
                </p>
              </button>
            ))}
          </div>

          {/* Map Visual */}
          <div className="lg:col-span-2 relative bg-[#e5e7eb] rounded-3xl overflow-hidden shadow-inner border border-gray-200">
             {/* Abstract Map Background */}
             <div className="absolute inset-0 bg-gray-200 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
            
            {/* Dots */}
            {MAP_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                onClick={() => setActiveLocation(loc)}
              >
                 <div className={`relative flex items-center justify-center w-4 h-4 rounded-full ${activeLocation.id === loc.id ? 'bg-gray-900' : 'bg-gray-400'}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${activeLocation.id === loc.id ? 'bg-gray-900' : 'hidden'}`}></span>
                 </div>
              </div>
            ))}

            {/* Active Card Overlay inside map for mobile/aesthetic */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-xl lg:max-w-sm">
               <div className="flex items-center gap-3 mb-2 text-oasis-700">
                 <MapPin size={18} />
                 <span className="text-xs font-bold uppercase tracking-widest">{activeLocation.name}</span>
               </div>
               <div className="text-3xl font-serif text-gray-900 mb-1">{activeLocation.stat}</div>
               <p className="text-xs text-gray-500">Key Characteristic identified in study.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
