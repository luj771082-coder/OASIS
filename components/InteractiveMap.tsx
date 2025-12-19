import React, { useState } from 'react';
import { MapPin, Info, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { MAP_LOCATIONS } from '../constants';
import { MapLocation } from '../types';

const InteractiveMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));

  return (
    <section id="map" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Global Aridity Monitor</h2>
          <p className="text-gray-600 max-w-xl text-lg font-light">
            Interactive visualization of key desertification research hubs and environmental metrics.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[16/9] bg-[#eef6f6] rounded-3xl overflow-hidden shadow-xl border border-sand-200 group">
          
          {/* Map Controls */}
          <div className="absolute top-6 right-6 z-30 flex flex-col gap-2">
            <button onClick={handleZoomIn} className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-oasis-600 transition-colors">
              <ZoomIn size={20} />
            </button>
            <button onClick={handleZoomOut} className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-oasis-600 transition-colors">
              <ZoomOut size={20} />
            </button>
          </div>

          {/* Draggable/Zoomable Area Wrapper */}
          <div 
            className="w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Simple SVG World Map Outline */}
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full fill-sand-200 stroke-white stroke-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified Shapes representing continents for aesthetic purposes */}
              <path d="M200,100 Q300,50 400,100 T600,150 T800,100 T950,200 L900,400 L800,450 L700,400 L600,450 L500,400 L400,350 L200,400 L100,300 Z" fill="none" /> 
              {/* Note: In a real production app, we would use a proper GeoJSON path here. 
                  For this demo, we simulate the landmass visual with a large aesthetic SVG or simplified paths.
                  Using a placeholder path for visual structure. */}
               <path d="M50,150 L250,150 L280,350 L100,400 Z" fill="#e3d0a6" className="opacity-60" /> {/* Americas approx */}
               <path d="M300,100 L600,100 L650,250 L550,450 L400,400 Z" fill="#e3d0a6" className="opacity-60" /> {/* Africa/Europe approx */}
               <path d="M620,80 L950,80 L900,300 L700,250 Z" fill="#e3d0a6" className="opacity-60" /> {/* Asia approx */}
               <path d="M750,350 L900,350 L880,450 L780,450 Z" fill="#e3d0a6" className="opacity-60" /> {/* Australia approx */}
            </svg>

            {/* Render Locations */}
            {MAP_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group/pin"
                style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                onClick={() => setActiveLocation(loc)}
                onMouseEnter={() => setActiveLocation(loc)}
              >
                <div className="relative">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-oasis-400 opacity-75 animate-ping"></span>
                  <div className={`relative inline-flex rounded-full p-2 transition-colors duration-300 ${activeLocation?.id === loc.id ? 'bg-oasis-600 text-white scale-125' : 'bg-white text-oasis-600 shadow-lg'}`}>
                    <MapPin size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Card Overlay (Bottom Left) */}
          <div className={`absolute bottom-6 left-6 max-w-xs w-full transition-all duration-500 transform ${activeLocation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
            {activeLocation && (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-sand-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{activeLocation.name}</h3>
                  <button onClick={() => setActiveLocation(null)} className="text-gray-400 hover:text-gray-600">
                    <Maximize2 size={16} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-light leading-relaxed">{activeLocation.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Aridity Index</span>
                    <span className="font-medium text-red-500">{activeLocation.aridityIndex}</span>
                  </div>
                   <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-red-400 h-1.5 rounded-full" style={{ width: `${activeLocation.aridityIndex * 100}%` }}></div>
                   </div>
                  
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-gray-500">Vegetation</span>
                    <span className="font-medium text-oasis-600">{activeLocation.vegetationCoverage}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100 mt-2">
                    <span className="text-gray-500">Active Projects</span>
                    <span className="inline-flex items-center justify-center bg-sand-100 text-sand-800 font-bold px-2 py-0.5 rounded text-xs">
                      {activeLocation.projectCount}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Instructions Overlay (When no selection) */}
          {!activeLocation && (
             <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-sand-100 text-sm text-gray-500 flex items-center gap-2 animate-pulse">
                <Info size={16} />
                <span>Interact with the map to view regional data</span>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;