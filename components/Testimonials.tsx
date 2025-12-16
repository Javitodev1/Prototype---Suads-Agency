import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';
import { THEME_COLORS } from '../constants';

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Después de años de relaciones fallidas con otras agencias, sentimos que finalmente hemos encontrado al equipo ganador… además de ver un aumento en el ROI, nos encanta la creatividad e ideas dinámicas que DEEPLOOK da vida en nuestros anuncios.",
    author: "Vivian L.",
    role: "Marketing Director",
    company: "Olga Lorencin Skincare"
  },
  {
    quote: "Su sólida gestión y estrategia en Meta Ads han sido un impulso invaluable para nuestra empresa. Entienden nuestro negocio como si fuera suyo.",
    author: "Camila R.",
    role: "CEO",
    company: "Shapes Secrets"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative" style={{ backgroundColor: THEME_COLORS.bgMain }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">La Voz del Cliente</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-slate-800 relative"
              style={{ backgroundColor: THEME_COLORS.bgCard }}
            >
              <Quote className="w-10 h-10 text-slate-600 absolute top-6 left-6 opacity-50" />
              <p className="text-lg text-slate-300 italic leading-relaxed mb-8 pt-6 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};