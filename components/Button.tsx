import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  const variants = {
    primary: "bg-terra-500 hover:bg-terra-600 text-white",
    secondary: "bg-white text-terra-600 border-2 border-terra-500 hover:bg-cream-50"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );
};