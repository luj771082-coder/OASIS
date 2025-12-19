import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchGrid from './components/ResearchGrid';
import InteractiveMap from './components/InteractiveMap';
import FrontierDynamics from './components/FrontierDynamics';
import DataViz from './components/DataViz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sand-50 font-sans text-gray-800 selection:bg-oasis-200 selection:text-oasis-900 relative">
      <Header />
      <main>
        <Hero />
        <InteractiveMap />
        <ResearchGrid />
        <FrontierDynamics />
        <DataViz />
      </main>
      <Footer />
      
      {/* Watermark */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none select-none mix-blend-multiply">
        <span className="font-serif text-4xl md:text-5xl font-bold text-gray-900 opacity-[0.05] -rotate-12 block tracking-widest">
          Lu Jian
        </span>
      </div>
    </div>
  );
}

export default App;