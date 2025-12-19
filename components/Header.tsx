import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-sand-200' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-oasis-100 text-oasis-700' : 'bg-white/20 text-white'}`}>
              <Leaf size={24} />
            </div>
            <span className={`font-serif text-xl font-bold tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Oasis<span className={isScrolled ? 'text-oasis-600' : 'text-sand-200'}>Frontier</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wider hover:text-oasis-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-sand-100'}`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : 
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-sand-200 py-6 px-6 shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-4">
             {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;