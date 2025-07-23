import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-black/50 backdrop-blur-sm border-t border-purple-500/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center animate-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold glow-text">JornadaPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforme sua abordagem de vendas com nossa metodologia exclusiva de 
              gestão da jornada de compra. Vença objeções e aumente suas conversões.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-all-smooth cursor-pointer">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all-smooth cursor-pointer">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-all-smooth cursor-pointer">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Gestão de Jornada</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Treinamento de Vendas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Consultoria Estratégica</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Análise de Conversão</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>llucasalbuquerque.ao@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>(85) 98888-7706</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Fortaleza, CE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 JornadaPro. Todos os direitos reservados. 
            <span className="text-purple-400 ml-2">Transformando objeções em oportunidades.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;