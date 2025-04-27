import React from 'react';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="mb-4 flex items-center">
            <span className="font-bold text-2xl">
              <span style={{ color: "#003051" }}>onva</span>
              <span style={{ color: "#DC3C35" }}>oo</span>
            </span>
            </a>
            <p className="text-sm text-gray-600 mb-4">
              Onvaoo connecte tous les amis des voyages. Explorez notre large gamme de visites de destinations et de services.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">CATÉGORIES</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Culture & Histoire</a></li>
              <li><a href="#" className="hover:text-blue-600">Nature & Aventure</a></li>
              <li><a href="#" className="hover:text-blue-600">Gastronomie</a></li>
              <li><a href="#" className="hover:text-blue-600">Insolite & Secrets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">RESTEZ SAGE</h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li><a href="#" className="hover:text-blue-600">Nous contacter</a></li>
              <li><a href="#" className="hover:text-blue-600">Nos valeurs</a></li>
            </ul>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p>© Copyright 2025</p>
              <p>Mentions légales</p>
              <p>Conditions générales</p>
            </div>
            
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;