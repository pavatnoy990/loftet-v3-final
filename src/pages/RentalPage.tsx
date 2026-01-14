import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Mail, Phone, Users, Music, Utensils, GlassWater } from 'lucide-react';
import { Button } from '../components/ui/button';

const RentalPage = () => {
  const facilities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Kapasitet',
      desc: 'Plass til opptil 150 gjester (80 sittende).'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Lyd & Lys',
      desc: 'Komplett PA-anlegg, mikrofoner og scenebelysning.'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Servering',
      desc: 'Fullverdig kjøkken med mulighet for catering.'
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: 'Bar',
      desc: 'Full skjenkebevilling med alle rettigheter.'
    }
  ];

  return (
    <PageTransition>
      <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80"
          className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center"
          overlayOpacity={0.7}
          isHero={true}
        >
          <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-8xl font-bold mb-4 tracking-tighter text-white"
            >
              Leie <span className="text-primary italic">Loftet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed"
            >
              Våre unike lokaler midt i Knarvik.
            </motion.p>
          </div>
        </ParallaxSection>
        <div className="absolute inset-x-0 bottom-0 h-64 z-[20] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.7) 40%, #0a0a0a 100%)' }} />
      </div>

      <div className="py-24 bg-[#0a0a0a] relative z-[30]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 max-w-6xl mx-auto">
            {facilities.map((item, index) => (
              <div key={index} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RentalPage;