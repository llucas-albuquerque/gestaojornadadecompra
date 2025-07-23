import React from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center animate-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold glow-text">JornadaPro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
              Início
            </a>
            <a href="#objecoes" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
              Objeções
            </a>
            <a href="#contato" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
              Contato
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2 rounded-full text-white font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all-smooth transform hover:scale-105">
              Começar Agora
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
                Início
              </a>
              <a href="#objecoes" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
                Objeções
              </a>
              <a href="#contato" className="text-gray-300 hover:text-purple-400 transition-all-smooth">
                Contato
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2 rounded-full text-white font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all-smooth w-fit">
                Começar Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;