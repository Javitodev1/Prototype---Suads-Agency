import React from 'react';
import { THEME_COLORS } from '../constants';
import { CaseStudy } from '../types';
import { SectionHeader } from './SectionHeader';

const CASES: CaseStudy[] = [
  {
    company: "SilBe by Silvy Araujo",
    industry: "App Fitness",
    metrics: [
      { value: "+349%", label: "Suscripciones", type: "success" },
      { value: "-79%", label: "CAC (Costo Adq.)", type: "tech" }
    ]
  },
  {
    company: "FabNet",
    industry: "Moda / E-commerce",
    metrics: [
      { value: "+129%", label: "Incremento Ventas", type: "success" },
      { value: "4x", label: "ROAS Promedio", type: "tech" }
    ]
  },
  {
    company: "Davman Persa",
    industry: "Joyería de Lujo",
    metrics: [
      { value: "+42%", label: "Ventas Totales", type: "success" },
      { value: "+59%", label: "Mejora ROAS", type: "tech" }
    ]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    // "Light" dark section
    <section id="results" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="La Prueba Irrefutable"
          subtitle="Los números no mienten. Así hemos transformado negocios."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((study, idx) => (
            <div 
              key={idx}
              className="relative p-8 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
              style={{ backgroundColor: THEME_COLORS.bgCard }}
            >
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-white tracking-wide">{study.company}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300 border border-slate-600">
                  {study.industry}
                </span>
              </div>

              <div className="space-y-8">
                {study.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <div 
                      className="text-5xl font-extrabold tracking-tight mb-2"
                      style={{ 
                        color: metric.type === 'success' ? THEME_COLORS.resultSuccess : THEME_COLORS.resultTech 
                      }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};