import React from 'react';
import { THEME_COLORS } from '../constants';
import { Target, MonitorPlay, Code2, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { SectionHeader } from './SectionHeader';

const SERVICES: ServiceItem[] = [
  {
    title: "Estrategia de Publicidad Digital",
    description: "Diseño, ejecución y optimización científica de campañas.",
    features: ["Meta Ads (Facebook & Instagram)", "Google Ads & YouTube Ads", "Estructura de Testing A/B", "Escalado horizontal y vertical"],
    icon: Target
  },
  {
    title: "Creativos de Alto Rendimiento",
    description: "Piezas visuales persuasivas orientadas psicológicamente a la conversión.",
    features: ["UGC (User Generated Content)", "Diseño Estático de alto impacto", "Guiones de Video persuasivos", "Edición dinámica para retención"],
    icon: MonitorPlay
  },
  {
    title: "Desarrollo Web & Funnels",
    description: "Ecosistemas digitales diseñados no para verse bonitos, sino para vender.",
    features: ["Landing Pages de Alta Conversión", "Optimización de Tasa de Conversión (CRO)", "Integraciones de CRM", "Velocidad de carga ultra-rápida"],
    icon: Code2
  }
];

export const Services: React.FC = () => {
  return (
    // Slightly lighter dark background for contrast as requested (using slate-900 vs main slate-950)
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Claridad en la Oferta" 
          subtitle="No hacemos de todo. Hacemos lo que genera dinero."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
              style={{ backgroundColor: THEME_COLORS.bgCard }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 h-12">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};