import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Differentiation } from './components/Differentiation';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <Hero />
      <Authority />
      <Services />
      <Differentiation />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;