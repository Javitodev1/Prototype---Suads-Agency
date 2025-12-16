import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { THEME_COLORS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#authority' },
    { name: 'Servicios', href: '#services' },
    { name: 'Resultados', href: '#results' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tighter text-white">
          DEEP<span style={{ color: THEME_COLORS.primaryCta }}>LOOK</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-colors hover:bg-blue-600"
            style={{ backgroundColor: THEME_COLORS.primaryCta }}
          >
            Agendar Llamada
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1E293B] border-b border-slate-700 p-6 md:hidden flex flex-col gap-4">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-5 py-3 rounded-md font-bold text-center text-white"
            style={{ backgroundColor: THEME_COLORS.primaryCta }}
          >
            Agendar Llamada
          </a>
        </div>
      )}
    </header>
  );
};