import { motion } from 'framer-motion';
import { Calendar, Clock, Music, Mic } from 'lucide-react';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'live-band' | 'karaoke' | 'dj' | 'special';
  image?: string;
}

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

const typeIcons = {
  'live-band': Music,
  karaoke: Mic,
  dj: Music,
  special: Calendar,
};

export const EventCard = ({ event, featured = false }: EventCardProps) => {
  const Icon = typeIcons[event.type];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`glow-card bg-card rounded-xl overflow-hidden border border-border/50 ${
        featured ? 'md:flex' : ''
      }`}
    >
      {event.image && (
        <div className={`relative ${featured ? 'md:w-1/2' : ''} h-48 md:h-auto overflow-hidden`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      )}
      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </span>
          <span className="text-xs uppercase tracking-wider text-primary font-medium">
            {event.type === 'live-band' ? 'Live Band' : event.type === 'karaoke' ? 'Karaoke' : event.type === 'dj' ? 'DJ' : 'Spesial'}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">{event.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{event.time}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{event.description}</p>
      </div>
    </motion.div>
  );
};
