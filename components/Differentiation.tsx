import React from 'react';
import { THEME_COLORS } from '../constants';
import { BarChart3, HeartHandshake } from 'lucide-react';

export const Differentiation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: THEME_COLORS.bgMain }}>
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Ventas o Vanity Metrics?
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mb-8" />
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                     <span className="text-red-500 font-bold text-lg">X</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Lo que hacen los demás</h3>
                  <p className="text-slate-400 leading-relaxed">
                    La mayoría de agencias te venden "Likes", "Impresiones" y métricas de vanidad que se ven bien en un reporte pero no pagan la nómina. Se esconden detrás de la jerga técnica.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                 <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                     <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Nuestra obsesión</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Nos enfocamos radicalmente en el <span className="text-blue-400 font-bold">ROAS</span> (Retorno de Inversión) y el <span className="text-green-400 font-bold">Cash Flow</span>. Si no hay ventas reales y crecimiento sostenido, nuestro trabajo no está terminado. Somos socios de crecimiento, no solo proveedores de servicios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative">
             <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="mt-6 space-y-4">
                <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                   <span className="text-slate-400 text-sm">Campaña Anterior</span>
                   <span className="text-slate-500 font-mono">Likes: 10k | Ventas: 0</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                   <span className="text-blue-400 font-bold text-sm">Campaña DeepLook</span>
                   <span className="text-green-400 font-bold font-mono">Ventas: $50,000+</span>
                </div>
                <div className="w-full bg-slate-800 h-32 rounded-lg mt-6 relative overflow-hidden flex items-end px-4 gap-2">
                    <div className="w-1/4 bg-slate-600 h-[20%] rounded-t-sm opacity-50"></div>
                    <div className="w-1/4 bg-slate-600 h-[30%] rounded-t-sm opacity-50"></div>
                    <div className="w-1/4 bg-blue-600 h-[60%] rounded-t-sm animate-pulse"></div>
                    <div className="w-1/4 bg-blue-500 h-[85%] rounded-t-sm relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ROI
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);