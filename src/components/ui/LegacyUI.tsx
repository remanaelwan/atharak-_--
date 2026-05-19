import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("glass-card p-4", className)}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'gold' | 'outline';
}

export function GlowButton({ children, onClick, className, variant = 'primary' }: ButtonProps) {
  const variants = {
    primary: "bg-primary text-text-primary hover:bg-primary-light glow-shadow",
    gold: "bg-accent text-background hover:bg-accent-light gold-glow",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
