import React from 'react';
import { THEME_COLORS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center gap-2 px-8 py-4 
        font-bold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-blue-500/25
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{ 
        backgroundColor: THEME_COLORS.primaryCta,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = THEME_COLORS.primaryHover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = THEME_COLORS.primaryCta)}
    >
      <span className="text-lg tracking-wide">{children}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};