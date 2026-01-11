import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
  delay?: number;
}

export const ReviewCard = ({ review, delay = 0 }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="glow-card bg-card p-6 rounded-xl border border-border/50 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-primary fill-primary' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <p className="text-foreground/90 mb-4 italic">"{review.text}"</p>
      <p className="font-medium text-primary">{review.name}</p>
    </motion.div>
  );
};
