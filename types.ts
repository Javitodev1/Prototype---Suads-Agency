import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface CaseStudy {
  company: string;
  industry: string;
  metrics: {
    value: string;
    label: string;
    type: 'success' | 'tech'; // success = green, tech = blue
  }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Colors {
  bgMain: string;
  bgCard: string;
  textMain: string;
  textMuted: string;
  primaryCta: string;
  primaryHover: string;
  resultSuccess: string;
  resultTech: string;
}