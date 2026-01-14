import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, Facebook, Instagram, ShoppingBag } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { MenuCarousel } from '../components/MenuCarousel';
import { ReviewCard } from '../components/ReviewCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent } from '../components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

// CSS for å tvinge bakgrunnsbildet i galleriet til å bli svart-hvitt
const customStyles = `
  .gallery-parallax [style*="background-image"] {
    filter: grayscale(100%) !important;
  }
`;

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

  useEffect(() => {
    // Forteller nettleseren at den ikke skal huske scroll-posisjon ved refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Tvinger vinduet til toppen umiddelbart
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageTransition>
      <style>{customStyles}</style>

      {/* Hero Section */}
      <div className="relative">
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1575184560884-5f3ece6e636c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="min-h-screen flex items-center justify-center"
          overlayOpacity={0.65}
          isHero={true}
        >
          <div className="container mx-auto px-4 text-center pt-20 relative z-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="font-display text-2xl md:text-4xl text-white font-light tracking-[0.2em] uppercase">Velkommen til</p>
              <h1 className="font-display text-6xl md:text-9xl font-bold text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                2 Katter <span className="text-primary italic">på Loftet</span>
              </h1>
              <p className="font-display text-xl md:text-3xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto">
                Ditt lokale samlingspunkt i Knarvik for en god middag eller en kveld med venner.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-col items-center gap-8"
            >
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full font-bold transition-transform hover:scale-105" asChild>
                  <Link to="/meny" className="flex items-center gap-2">
                    Utforsk Menyen <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105" asChild>
                  <Link to="/takeaway">
                    <ShoppingBag className="w-5 h-5" /> Bestill Takeaway
                  </Link>
                </Button>

                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/20 hover:bg-white/10 text-white rounded-full font-bold transition-transform hover:scale-105" asChild>
                  <Link to="/events">Hva skjer?</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-white/80">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all hover:text-white hover:scale-110"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all hover:text-white hover:scale-110"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      </div>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-10 h-10 hidden md:block" />
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">Lyst på maten hjemme?</h2>
              <p className="opacity-90">Vi tilbyr takeaway på hele vår meny!</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full font-bold shadow-lg" asChild>
            <Link to="/takeaway">Les mer & Bestill</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Smakebiter</h2>
            <p className="text-primary text-sm mt-4 tracking-wide font-bold uppercase">Utforsk våre mest populære retter</p>
          </div>
          <MenuCarousel />
        </div>
      </section>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="py-40"
          overlayOpacity={0.6}
        >
          <div className="container mx-auto px-4 relative z-0">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-2xl">
              Hva <span className="text-primary">skjer?</span>
            </h2>

            <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto px-8 overflow-visible">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ 
                    y: -12,
                    boxShadow: "0 0 45px 12px rgba(234, 38, 38, 0.55)",
                    borderColor: "rgba(234, 38, 38, 0.4)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 cursor-pointer shadow-2xl relative"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">Event</p>
                    <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="md:hidden px-4">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {upcomingEvents.map((event) => (
                    <CarouselItem key={event.id}>
                      <div 
                        className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 shadow-xl mx-1"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                          <h3 className="font-display text-xl font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-primary text-sm mb-2 font-bold">{event.date} • {event.time}</p>
                          <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-4">
                  <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white" />
                  <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </ParallaxSection>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      </div>

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
                  <span className="text-sm font-bold uppercase">Asiatiske Smaker</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-sm font-bold uppercase">Lokal Sjel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-0 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Hva gjestene <span className="text-primary">sier</span>
          </h2>
          
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-8 pb-20">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} delay={index * 0.1} />
            ))}
          </div>

          <div className="md:hidden px-4 pb-20">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {reviews.map((review) => (
                    <CarouselItem key={review.id}>
                      <div className="mx-1 h-full">
                        <ReviewCard review={review} delay={0} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-6">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
          </div>
        </div>
      </section>

      <div className="relative bg-background overflow-hidden gallery-parallax">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-background via-background/90 to-transparent z-10" />
        
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1672664889570-aafb621c0f38?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="pt-64 pb-80"
          overlayOpacity={0.85}
        >
          <div className="container mx-auto px-4 text-center relative z-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-lg">
              Fra Vårt <span className="text-primary">Galleri</span>
            </h2>
            <div className="max-w-6xl mx-auto px-8">
              <GalleryGrid />
            </div>
          </div>
        </ParallaxSection>
        
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-background via-background to-transparent z-10" />
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-card max-w-2xl p-0 overflow-hidden border-none shadow-2xl">
          {selectedEvent && (
            <div>
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-2 text-white">{selectedEvent.title}</h3>
                <p className="text-primary font-bold mb-4 uppercase tracking-wider">{selectedEvent.date} • {selectedEvent.time}</p>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default Index;