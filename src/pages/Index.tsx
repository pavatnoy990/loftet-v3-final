import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { MenuCarousel } from '../components/MenuCarousel';
import { ReviewCard } from '../components/ReviewCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent } from '../components/ui/dialog';

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: 'Karaoke',
    date: 'Hver lørdag',
    time: '22:00',
    description: 'Ta mikrofonen og bli kveldens stjerne – lav terskel, høy stemning.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Quiz',
    date: 'Torsdager',
    time: '20:00',
    description: 'Samle laget og test kunnskapene – premier og skikkelig pubfølelse.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Live Musikk',
    date: 'Utvalgte fredager',
    time: '21:00',
    description: 'Live band og akustiske kvelder – tett på, varmt og intimt.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
  },
];

// 4 ekte anmeldelser fra bildene dine
const reviews = [
  {
    id: 1,
    name: 'Birte A',
    text: "FOR en god mat! Spiste vegansk Marine Captain's Curry, og det smakte himmelsk! Anbefales på det varmeste 😍 Super service var det og 🥳",
    rating: 5,
  },
  {
    id: 2,
    name: 'SagasAdventures',
    text: 'Beste ramen vi har smakt! Kraften var noe av det beste, og konsistensen på nudlene helt nydelig! Vi kommer gjerne igjen.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Markus Eide',
    text: 'Kjempetrivelig sted. Spiste raspeballer og dette var veldig godt. Store gode porsjoner med rikelig tilbehør til en fin pris.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tine B',
    text: 'Koselige folk som jobber der og de serverer veldig god mat. Masse gøy i helgen med konserter eller karaoke. Anbefales.',
    rating: 5,
  },
];

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1920&h=1080&fit=crop&q=80"
        className="min-h-screen flex items-center justify-center"
        overlayOpacity={0.65}
      >
        <div className="container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="font-display text-3xl md:text-5xl text-white font-light tracking-wide">Din Favoritt</p>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-primary drop-shadow-[0_0_30px_hsl(355_82%_56%/0.5)]">
              Smaken av Loftet
            </h1>
            <p className="font-display text-3xl md:text-5xl text-white font-light tracking-wide">Under Taket</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary/60 hover:border-primary hover:bg-primary/10 text-white" asChild>
              <Link to="/meny">Se Menyen</Link>
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Menu Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Smakebiter</h2>
            <p className="text-primary text-sm mt-4 tracking-wide font-bold uppercase">Utforsk våre mest populære retter</p>
          </div>
          <MenuCarousel />
        </div>
      </section>

      {/* Events Teaser */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&h=1080&fit=crop"
        className="py-20"
        overlayOpacity={0.85}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Hva <span className="text-primary">skjer?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl overflow-hidden border border-border/50 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{event.title}</h3>
                  <p className="text-primary text-sm mb-2">{event.date} • {event.time}</p>
                  <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Vår Historie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop" 
                alt="Restaurant interiør" 
                className="w-full h-[400px] object-cover" 
              />
            </motion.div>

            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Vår Historie</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Siden 2024 har vi vært Knarviks samlingspunkt for de som elsker god mat og ekte kultur. 
                Beliggende rett under taket, tilbyr vi en atmosfære du ikke finner andre steder.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <Heart className="w-6 h-6 text-primary" />
                  <span className="text-sm font-bold uppercase">100% Hjemmelaget</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-sm font-bold uppercase">Alle Rettigheter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Nå med max-w-6xl som resten av siden */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Hva gjestene <span className="text-primary">sier</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-8">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Fra Vårt <span className="text-primary">Galleri</span>
          </h2>
          <div className="max-w-6xl mx-auto px-8">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* Modal for Events */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-card max-w-2xl p-0 overflow-hidden border-none">
          {selectedEvent && (
            <div>
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-primary font-bold mb-4">{selectedEvent.date} • {selectedEvent.time}</p>
                <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default Index;