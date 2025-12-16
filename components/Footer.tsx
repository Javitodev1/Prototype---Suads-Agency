import React from 'react';
import { THEME_COLORS } from '../constants';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 border-t border-slate-800 bg-[#020617]">
      {/* Final CTA */}
      <div className="container mx-auto px-6 text-center mb-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para escalar?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Deja de adivinar y empieza a crecer con datos reales. Agenda tu sesión de estrategia gratuita hoy mismo.
          </p>
          <div className="flex justify-center">
            <Button>Empezar a Vender Ahora</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-white">DEEPLOOK</span> &copy; {new Date().getFullYear()}. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};