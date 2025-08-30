import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'subtle' | 'gradient' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  background = 'default',
  spacing = 'lg'
}) => {
  const backgroundClasses = {
    default: '',
    subtle: 'bg-white/5',
    gradient: 'bg-gradient-to-b from-black/50 to-transparent',
    dark: 'bg-black/80',
  };
  
  const spacingClasses = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-40',
  };
  
  return (
    <section 
      id={id} 
      className={`
        ${spacingClasses[spacing]} 
        ${backgroundClasses[background]} 
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <motion.div
      className={`
        ${centered ? 'text-center' : 'text-left'} 
        max-w-4xl ${centered ? 'mx-auto' : ''} 
        mb-16 lg:mb-20
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};