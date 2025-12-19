import React from 'react';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-sand-100 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-oasis-500">
              <Leaf size={24} />
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                OasisFrontier
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Advancing the understanding of arid ecosystems through technology, data, and global collaboration.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-oasis-600 hover:text-white transition-all text-gray-400">
              <Github size={20} />
            </a>
             <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-oasis-600 hover:text-white transition-all text-gray-400">
              <Twitter size={20} />
            </a>
             <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-oasis-600 hover:text-white transition-all text-gray-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} OasisFrontier Research Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sand-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;