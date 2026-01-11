import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const teaserMenuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Miso Ramen',
    description: 'Rik og smakfull miso-basert buljong med håndlagde nudler, marinert egg, chashu-svin, og friske grønnsaker.',
    price: '210,-',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    category: 'Ramen',
  },
  {
    id: 2,
    name: 'Miss Ramen',
    description: 'Vår signatur ramen med en spesiell twist - kremet buljong med sjømat og urter.',
    price: '225,-',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop',
    category: 'Ramen',
  },
  {
    id: 3,
    name: 'Vegansk Curry',
    description: 'Aromatisk curry med sesongbaserte grønnsaker, kokosmelk og jasminris.',
    price: '195,-',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop',
    category: 'Vegan',
  },
  {
    id: 4,
    name: 'Gyoza (6 stk)',
    description: 'Håndlagde japanske dumplings med svinefyll, servert med ponzu-saus.',
    price: '145,-',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop',
    category: 'Forrett',
  },
  {
    id: 5,
    name: 'Raspeballer',
    description: 'Tradisjonelle norske raspeballer med bacon, pølse og smør - akkurat som mor lagde.',
    price: '185,-',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    category: 'Tradisjonelt',
  },
];

export const MenuCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const velocityRef = useRef(0);
  const targetVelocityRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    const distanceFromCenter = mouseX - centerX;
    const maxDistance = rect.width / 2;
    
    // Normalize to -1 to 1 range
    const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
    
    // Apply exponential curve for smoother acceleration at edges
    const sign = Math.sign(normalizedDistance);
    const absDistance = Math.abs(normalizedDistance);
    
    // Only start scrolling when mouse is past 20% from center
    const deadZone = 0.2;
    if (absDistance < deadZone) {
      targetVelocityRef.current = 0;
    } else {
      // Remap from deadzone to edge (0.2-1.0 becomes 0-1)
      const remappedDistance = (absDistance - deadZone) / (1 - deadZone);
      // Exponential curve for smooth acceleration
      const speed = sign * Math.pow(remappedDistance, 2) * 12;
      targetVelocityRef.current = speed;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetVelocityRef.current = 0;
  }, []);

  useEffect(() => {
    let lastTime = performance.now();
    
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to ~60fps
      lastTime = currentTime;
      
      // Smooth interpolation toward target velocity (easing)
      const smoothing = 0.08;
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * smoothing * deltaTime;
      
      // Apply velocity to scroll
      if (carouselRef.current && Math.abs(velocityRef.current) > 0.01) {
        carouselRef.current.scrollLeft += velocityRef.current * deltaTime;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="relative max-w-6xl mx-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Edge gradient indicators */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto py-8 px-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teaserMenuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="carousel-item flex-shrink-0 w-72 bg-card rounded-xl overflow-hidden cursor-pointer glow-card border border-border/50"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {item.price}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">{item.category}</span>
                <h3 className="font-display text-xl font-semibold mt-1 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-card border-border max-w-lg">
          {selectedItem && (
            <>
              <div className="relative h-56 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <DialogHeader>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {selectedItem.category}
                </span>
                <DialogTitle className="font-display text-2xl">{selectedItem.name}</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{selectedItem.price}</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};