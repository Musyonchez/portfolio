import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-md transition-all duration-300 hover:scale-105 gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black hover:shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40',
    outline: 'border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const Component = motion.a;
  
  if (href) {
    return (
      <Component
        href={href}
        target={target}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Component>
    );
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};