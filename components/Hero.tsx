import React from 'react';
import { VIDEO_BG_URL, THEME_COLORS } from '../constants';
import { Button } from './Button';
import { Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#020617]/50 z-10" /> {/* General dark overlay */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_BG_URL} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
           <Rocket className="w-4 h-4 text-blue-400" />
           <span className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-wider">
             Agencia de Performance & Growth
           </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-5xl mx-auto">
          Escala tu negocio y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">rompe techos de facturación</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Diseñamos campañas que convierten con una estrategia clara, ejecución precisa y optimización continua. Facebook Ads, Google Ads y Funnels de alta conversión.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Agendar Llamada Estratégica
          </Button>
          <p className="text-sm text-slate-500 mt-4 md:mt-0">
            *Auditoría inicial incluida para empresas calificadas
          </p>
        </div>

        {/* Mini Social Proof */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 font-medium text-sm md:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>+250 Clientes Felices</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span>Resultados Comprobados</span>
          </div>
        </div>
      </div>
    </section>
  );
};