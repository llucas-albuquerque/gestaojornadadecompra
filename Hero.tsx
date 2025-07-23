import React from 'react';
import { ArrowRight, Target, TrendingUp, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Transforme{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Objeções
              </span>{' '}
              em{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vendas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Domine a <strong className="text-purple-400">Gestão da Jornada de Compra</strong> e 
              vença todas as 17 objeções mais comuns com estratégias comprovadas de vendas e persuasão.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <a 
              href="#objecoes" 
              className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-cyan-600 transition-all-smooth transform hover:scale-105 flex items-center justify-center space-x-2 animate-glow"
            >
              <span>Explorar Objeções</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl glow-border hover:bg-black/40 transition-all-smooth group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all-smooth">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">17 Objeções Mapeadas</h3>
              <p className="text-gray-400">
                Todas as objeções mais comuns organizadas e categorizadas para máxima eficiência.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl glow-border hover:bg-black/40 transition-all-smooth group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all-smooth">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">ROI Comprovado</h3>
              <p className="text-gray-400">
                Estratégias testadas que aumentam a taxa de conversão em até 300%.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl glow-border hover:bg-black/40 transition-all-smooth group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all-smooth">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Metodologia Exclusiva</h3>
              <p className="text-gray-400">
                Sistema completo baseado em psicologia de vendas e comunicação persuasiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;