import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit3, Save, X } from 'lucide-react';
import { ObjectionData } from '../types/objection';

interface ObjectionCategoryProps {
  objection: ObjectionData;
  index: number;
}

const ObjectionCategory: React.FC<ObjectionCategoryProps> = ({ objection, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubcategories, setExpandedSubcategories] = useState<{ [key: string]: boolean }>({});
  
  // Load solutions from localStorage on component mount
  const loadSolutions = () => {
    const saved = localStorage.getItem('objection-solutions');
    return saved ? JSON.parse(saved) : {};
  };
  
  const [solutions, setSolutions] = useState<{ [key: string]: string }>(loadSolutions);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const toggleSubcategory = (subcategoryTitle: string) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcategoryTitle]: !prev[subcategoryTitle]
    }));
  };

  const handleSolutionChange = (key: string, value: string) => {
    setSolutions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSolution = (key: string) => {
    // Save current solutions to localStorage
    const updatedSolutions = { ...solutions };
    localStorage.setItem('objection-solutions', JSON.stringify(updatedSolutions));
    
    // Show a brief success feedback
    const element = document.querySelector(`[data-save-key="${key}"]`);
    if (element) {
      element.classList.add('text-green-400');
      setTimeout(() => {
        element.classList.remove('text-green-400');
      }, 1000);
    }
    
    setEditingKey(null);
  };
  const startEditing = (key: string) => {
    setEditingKey(key);
  };

  const saveEdit = (key: string) => {
    saveSolution(key);
  };

  const cancelEdit = () => {
    setEditingKey(null);
  };

  const getSolutionKey = (subcategoryTitle: string, objectionText?: string) => {
    return objectionText ? `${subcategoryTitle}-${objectionText}` : subcategoryTitle;
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl glow-border overflow-hidden hover:bg-black/40 transition-all-smooth">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/10 transition-all-smooth group"
      >
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-all-smooth">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-all-smooth">
            {objection.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400 bg-purple-500/20 px-3 py-1 rounded-full">
            {objection.subcategories.length} subcategorias
          </span>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-all-smooth" />
          ) : (
            <ChevronRight className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-all-smooth" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-purple-500/20">
          {objection.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="border-b border-purple-500/10 last:border-b-0">
              <button
                onClick={() => toggleSubcategory(subcategory.title)}
                className="w-full p-4 pl-16 text-left flex items-center justify-between hover:bg-cyan-500/10 transition-all-smooth group"
              >
                <h4 className="text-lg font-medium text-cyan-300 group-hover:text-cyan-200 transition-all-smooth">
                  {subcategory.title}
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 bg-cyan-500/20 px-2 py-1 rounded-full">
                    {subcategory.objections.length} objeções
                  </span>
                  {expandedSubcategories[subcategory.title] ? (
                    <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-all-smooth" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-all-smooth" />
                  )}
                </div>
              </button>

              {expandedSubcategories[subcategory.title] && (
                <div className="bg-black/20 p-4 pl-20">
                  <div className="space-y-3 mb-6">
                    {subcategory.objections.map((objectionText, objIndex) => (
                      <div key={objIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 italic">"{objectionText}"</p>
                      </div>
                    ))}
                  </div>

                  {/* Solution textarea for subcategory */}
                  <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-4 glow-border">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-semibold text-purple-300 flex items-center space-x-2">
                        <Edit3 className="w-4 h-4" />
                        <span>Estratégias de Quebra de Objeção</span>
                      </h5>
                      {editingKey === getSolutionKey(subcategory.title) ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => saveEdit(getSolutionKey(subcategory.title))}
                            className="text-green-400 hover:text-green-300 transition-colors"
                            data-save-key={getSolutionKey(subcategory.title)}
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => startEditing(getSolutionKey(subcategory.title))}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <textarea
                      value={solutions[getSolutionKey(subcategory.title)] || ''}
                      onChange={(e) => handleSolutionChange(getSolutionKey(subcategory.title), e.target.value)}
                      placeholder="Digite aqui suas estratégias de comunicação, vendas, persuasão e oratória para vencer essas objeções..."
                      className="w-full h-32 bg-black/40 border border-purple-500/30 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all-smooth resize-none"
                      disabled={editingKey !== null && editingKey !== getSolutionKey(subcategory.title)}
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      💡 Dica: Use técnicas de PNL, storytelling, prova social e criação de urgência
                    </div>
                  </div>

                  {/* Individual objection solutions */}
                  <div className="mt-6 space-y-4">
                    {subcategory.objections.map((objectionText, objIndex) => (
                      <div key={objIndex} className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg p-3 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <h6 className="text-xs font-medium text-gray-400 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>Resposta específica para: "{objectionText.substring(0, 30)}..."</span>
                          </h6>
                          {editingKey === getSolutionKey(subcategory.title, objectionText) ? (
                            <div className="flex space-x-1">
                              <button
                                onClick={() => saveEdit(getSolutionKey(subcategory.title, objectionText))}
                                className="text-green-400 hover:text-green-300 transition-colors"
                                data-save-key={getSolutionKey(subcategory.title, objectionText)}
                              >
                                <Save className="w-3 h-3" />
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="text-red-400 hover:text-red-300 transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => startEditing(getSolutionKey(subcategory.title, objectionText))}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                        <textarea
                          value={solutions[getSolutionKey(subcategory.title, objectionText)] || ''}
                          onChange={(e) => handleSolutionChange(getSolutionKey(subcategory.title, objectionText), e.target.value)}
                          placeholder="Resposta específica para esta objeção..."
                          className="w-full h-20 bg-black/40 border border-purple-500/20 rounded p-2 text-sm text-gray-300 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/20 transition-all-smooth resize-none"
                          disabled={editingKey !== null && editingKey !== getSolutionKey(subcategory.title, objectionText)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectionCategory;