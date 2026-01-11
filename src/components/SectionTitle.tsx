import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ children, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-20 bg-primary rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
