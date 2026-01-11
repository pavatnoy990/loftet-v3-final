import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Dialog, DialogContent } from '../components/ui/dialog';

// Vi definerer bildefilen her for å kunne forhåndslaste den
const HERO_IMAGE = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=75&auto=format&fit=crop";

const upcomingEvents = [
  {
    id: 1,
    title: 'Karaoke',
    date: 'Hver lørdag',
    time: '22:00',
    description: 'Ta mikrofonen og bli kveldens stjerne – lav terskel, høy stemning.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Quiz',
    date: 'Torsdager',
    time: '20:00',
    description: 'Samle laget og test kunnskapene – premier og skikkelig pubfølelse.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Live Musikk',
    date: 'Utvalgte fredager',
    time: '21:00',
    description: 'Live band og akustiske kvelder – tett på, varmt og intimt.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Spillaften',
    date: 'Onsdager',
    time: '18:00',
    description: 'Brettspill, kortspill og god stemning. Ta med venner og konkurrer!',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=400&fit=crop&q=80',
  },
];

const EventsPage = () => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // MAGIEN: Forhåndslaster bildet så snart komponenten våkner
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
  }, []);
  
  return (
    <PageTransition>
      <ParallaxSection
        backgroundImage={HERO_IMAGE}
        className="pt-32 pb-20"
        overlayOpacity={0.6}
        isHero={true}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Våre <span className="text-primary">Events</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Live musikk, karaoke og spesielle begivenheter - det skjer alltid noe på Loftet.
          </p>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl overflow-hidden border border-border/50 cursor-pointer"
                onClick={() => setSelectedImage(event)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {event.date} • {event.time}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-transparent border-none max-w-4xl p-0 shadow-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default EventsPage;