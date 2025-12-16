import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  lightMode?: boolean; // If true, adjusts text colors for lighter background (if needed)
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center', lightMode = false }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl mx-auto`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#F8FAFC]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#94A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-blue-500 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};