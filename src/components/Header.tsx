import React from "react";
import Button from "./ui/Button";
import { MapPin } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl">
              <span style={{ color: "#003051" }}>onva</span>
              <span style={{ color: "#DC3C35" }}>oo</span>
            </span>
          </a>

          <nav className="hidden md:flex ml-10 space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Explorer
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Thèmes
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Nos guides
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Offre aux partenaires
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Nous contacter
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="primary">S'inscrire</Button>
          <Button variant="outline" className="flex items-center gap-1">
            <MapPin size={16} />
            Se connecter
          </Button>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
