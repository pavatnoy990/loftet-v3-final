import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Standup-kveld på Loftet',
    date: '24. Oktober',
    time: '20:00',
    location: 'Hovedscenen',
    description: 'Gjør deg klar for en kveld fylt med latter! Vi får besøk av tre av landets mest spennende komikere for et forrykende show.',
    price: '250,-',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80',
    category: 'Show'
  },
  {
    id: 2,
    title: 'Jazz & Ramen-night',
    date: '30. Oktober',
    time: '19:00',
    location: 'Restauranten',
    description: 'Nyt vår signatur-ramen til tonene av live jazz. En perfekt kombinasjon for en stemningsfull kveld i Knarvik.',
    price: 'Gratis inngang',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80',
    category: 'Konsert'
  },
  {
    id: 3,
    title: 'Halloween-party',
    date: '31. Oktober',
    time: '22:00',
    location: 'Hele Loftet',
    description: 'Vi forvandler Loftet til et hjemsøkt hus! Beste kostyme premieres. DJ-en spiller utover natten.',
    price: '150,-',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80',
    category: 'Fest'
  }
];

const EventsPage = () => {
  return (
    <PageTransition>
      {/* Hero Section med ditt bilde og sentrert innhold */}
      <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=75&auto=format&fit=crop"
          className="pt-32 pb-24 min-h-[65vh] flex items-center justify-center"
          overlayOpacity={0.6}
          isHero={true}
        >
          <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-8xl font-bold mb-4 tracking-tighter"
            >
              Hva skjer på <span className="text-primary italic">Loftet?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed mb-8"
            >
              Fra intime konserter til dundrende standup – se våre kommende arrangementer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-2 rounded-full"
            >
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Knarviks kulturscene</p>
            </motion.div>
          </div>
        </ParallaxSection>

        <div 
          className="absolute inset-x-0 bottom-0 h-64 z-[20] pointer-events-none" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.7) 40%, #0a0a0a 100%)' 
          }}
        />
      </div>

      <div className="py-24 bg-[#0a0a0a] relative z-[30]">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-72 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-4 mb-6 text-sm font-bold text-primary/80 uppercase tracking-tighter">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-8 font-light leading-relaxed italic">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <span className="text-2xl font-black text-white">{event.price}</span>
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                        <Ticket className="w-4 h-4" /> Kjøp Billetter
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Info - Oppdatert med lenke til den nye siden */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 text-center max-w-4xl mx-auto shadow-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Planlegger du et lukket selskap?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Vi leier ut Loftet til private arrangementer, bursdager og bedriftsfester. 
              Klikk under for å lese mer om fasiliteter og priser.
            </p>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 py-7 font-bold text-lg transition-all hover:border-primary/50" asChild>
              <Link to="/leie">Kontakt oss om utleie</Link>
            </Button>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default EventsPage;