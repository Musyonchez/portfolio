import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}) => {
  const baseClasses = `
    p-8 rounded-xl border transition-all duration-300
    ${gradient 
      ? 'bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/20' 
      : 'bg-white/5 border-white/10'
    }
    ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10' : ''}
  `;
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export const GlowCard: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`
        relative p-8 rounded-xl bg-black/40 border border-white/10
        before:absolute before:inset-0 before:rounded-xl before:p-[1px] 
        before:bg-gradient-to-r before:from-cyan-500/50 before:to-purple-500/50
        before:mask before:mask-content before:-z-10
        hover:before:from-cyan-500 hover:before:to-purple-500
        transition-all duration-500 group
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};