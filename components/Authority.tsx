import React from 'react';
import { COMPANIES, THEME_COLORS } from '../constants';
import { Youtube, Users, Globe } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section id="authority" className="py-20 border-b border-slate-800" style={{ backgroundColor: THEME_COLORS.bgMain }}>
      <div className="container mx-auto px-6">
        
        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
           {/* Image/Video Placeholder for Founder */}
           <div className="w-full md:w-1/2 relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative group">
                  {/* Simulate a professional photo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                    alt="Felipe Vergara - Founder"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg border border-slate-700">
                    <p className="text-white font-bold text-lg">Felipe Vergara</p>
                    <p className="text-slate-400 text-sm">Fundador & CEO</p>
                  </div>
              </div>
           </div>

           {/* Content */}
           <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Liderados por el mayor divulgador de publicidad digital en español.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Fundada por Felipe Vergara, DeepLook combina la experiencia educativa que ha formado a miles de marketers con una ejecución de agencia de élite. No somos teóricos; practicamos lo que enseñamos a escala global.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <Youtube className="w-8 h-8 text-red-500 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white">300K+</h4>
                      <p className="text-sm text-slate-500">Suscriptores en YouTube</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <Users className="w-8 h-8 text-blue-500 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white">20+ Expertos</h4>
                      <p className="text-sm text-slate-500">Marketers y Creativos</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 sm:col-span-2">
                    <Globe className="w-8 h-8 text-cyan-500 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white">6 Países</h4>
                      <p className="text-sm text-slate-500">Presencia Global del Equipo</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Logos Section */}
        <div className="border-t border-slate-800 pt-16">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">
            Impulsando a más de 250 empresas en 5 continentes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {COMPANIES.map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-black text-slate-300">
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};