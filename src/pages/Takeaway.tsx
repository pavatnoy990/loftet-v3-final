import { motion } from 'framer-motion';
import { ShoppingBag, Clock, MapPin, Phone, Info } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Button } from '../components/ui/button';

const Takeaway = () => {
  return (
    <PageTransition>
      <div className="relative">
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop"
          className="h-[60vh] flex items-center justify-center"
          overlayOpacity={0.6}
        >
          <div className="container mx-auto px-4 text-center pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Takeaway
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
            >
              Nyt smaken av 2 Katter på Loftet hjemme i din egen stue.
            </motion.p>
          </div>
        </ParallaxSection>

        {/* Innholdsseksjon med negativ margin for å flytte boksene OPP over faden */}
        <section className="relative z-20 px-4 -mt-32 pb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Bestilling */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/95 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Bestill Online</h2>
                <p className="text-gray-400 mb-8 flex-grow">
                  Den raskeste måten å bestille på er via vår online portal. Se hele menyen og velg dine favoritter.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-bold rounded-xl">
                  Gå til bestilling
                </Button>
              </motion.div>

              {/* Henting & Tid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/95 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Hentetider</h2>
                <div className="space-y-2 text-gray-400 mb-8 flex-grow">
                  <p className="flex justify-between gap-4"><span>Søn - Tor:</span> <span className="text-white font-medium">12:00 - 21:00</span></p>
                  <p className="flex justify-between gap-4"><span>Fre - Lør:</span> <span className="text-white font-medium">12:00 - 22:00</span></p>
                  <p className="mt-4 text-sm italic">Forventet ventetid: 15-25 min</p>
                </div>
                <div className="w-full pt-6 border-t border-white/5">
                  <p className="text-sm text-primary font-bold uppercase tracking-wider">Klar til henting på loftet</p>
                </div>
              </motion.div>

              {/* Kontakt & Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card/95 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Ring oss</h2>
                <p className="text-gray-400 mb-4">
                  Foretrekker du å bestille over telefon? Ring oss direkte for personlig service.
                </p>
                <a href="tel:55000000" className="text-3xl font-display font-bold text-primary hover:scale-105 transition-transform mb-8 block">
                  55 00 00 00
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kvernhusmyrane 21, Knarvik</span>
                </div>
              </motion.div>

            </div>

            {/* Ekstra info boks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-primary/10 border border-primary/20 p-6 rounded-2xl flex items-start gap-4"
            >
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white">Viktig informasjon</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ved allergier ber vi deg informere oss i kommentarfeltet ved bestilling eller gi beskjed per telefon. 
                  Vi pakker maten forsvarlig for transport slik at den holder seg varm helt frem.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Takeaway;