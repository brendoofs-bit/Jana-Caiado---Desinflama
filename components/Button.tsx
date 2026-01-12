import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success';
  fullWidth?: boolean;
  href?: string;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false,
  href,
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-terra-500 hover:bg-terra-600 text-white", // Default / Branding
    secondary: "bg-white text-terra-600 border-2 border-terra-500 hover:bg-cream-50", // Secondary actions
    success: "bg-green-600 hover:bg-green-700 text-white" // Hotmart / Sales
  };

  // Determine icon to show
  const IconComponent = Icon ? Icon : (variant === 'success' ? ArrowRight : MessageCircle);

  return (
    <a 
      href={href || WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <IconComponent className="w-5 h-5" />
      {children}
    </a>
  );
};