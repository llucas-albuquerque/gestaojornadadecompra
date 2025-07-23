import React from 'react';
import ObjectionCategory from './ObjectionCategory';
import { objections } from '../data/objections';

const ObjectionsList: React.FC = () => {
  return (
    <section id="objecoes" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Domine Todas as{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Objeções
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cada categoria de objeção e desenvolva suas estratégias personalizadas 
            para transformar resistência em aceitação.
          </p>
        </div>

        <div className="space-y-6">
          {objections.map((objection, index) => (
            <ObjectionCategory
              key={index}
              objection={objection}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm p-8 rounded-2xl glow-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">
              🎯 Dica Estratégica
            </h3>
            <div className="text-left space-y-4 text-gray-300">
              <p className="font-semibold text-cyan-300">Organize essas objeções por:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong className="text-purple-400">Frequência</strong> (mais comum = preparar resposta mais forte)</li>
                <li>• <strong className="text-purple-400">Momento</strong> (prospecção, apresentação, fechamento)</li>
                <li>• <strong className="text-purple-400">Tipo de cliente</strong> (pequeno, médio, grande porte)</li>
                <li>• <strong className="text-purple-400">Segmento</strong> (industrial, varejo, serviços, etc.)</li>
              </ul>
              <p className="mt-4 text-cyan-300 font-medium">
                Prepare respostas específicas para cada categoria e pratique até ficarem naturais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsList;