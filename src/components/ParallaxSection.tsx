import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  overlayOpacity?: number;
  isHero?: boolean;
}

export const ParallaxSection = ({
  children,
  backgroundImage,
  className = '',
  overlayOpacity = 0.5,
  isHero = false,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Forsterket effekt: 30% bevegelse
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden bg-[#0a0a0a] ${className}`}
    >
      {backgroundImage && (
        <>
          <motion.div
            className="absolute inset-0 w-full h-[160%]"
            style={{
              y,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              top: '-30%',
              zIndex: 0,
            }}
          />
          
          <div 
            className="absolute inset-x-0 bottom-0 h-96 pointer-events-none z-[1]" 
            style={{
              background: 'linear-gradient(to top, #0a0a0a 0%, #0a0a0a 15%, transparent 100%)'
            }}
          />

          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background: isHero 
                ? `linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, ${overlayOpacity}) 40%)`
                : `rgba(10, 10, 10, ${overlayOpacity})`,
            }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};