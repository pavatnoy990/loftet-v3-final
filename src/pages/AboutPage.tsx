import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';

// Vi definerer stabile bilde-URL-er her
const HERO_IMAGE = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop";
const TEAM_IMAGE = "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop";

const AboutPage = () => {
  // MAGI: Dette tvinger nettleseren til å laste bildet med en gang siden åpnes
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
  }, []);

  return (
    <PageTransition>
      {/* Hero - Bruker isHero={true} for å fjerne sort felt i toppen */}
      <ParallaxSection
        backgroundImage={HERO_IMAGE}
        className="pt-32 pb-20"
        overlayOpacity={0.7}
        isHero={true}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold mb-4"
          >
            Om <span className="text-primary">Oss</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto"
          >
            Møt teamet bak 2 Katter på Loftet
          </motion.p>
        </div>
      </ParallaxSection>

      {/* About Text Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              En lokal pub i Knarvik som også driver med autentisk Japansk ramen! 
              Du finner oss sentralt på AMFI Knarvik, oppe på Loftet. Vi er mer enn bare en restaurant; 
              vi er bygdas sosiale stue med underholdning, quiz, karaoke og brettspill. 
              Nyt maten inne i våre lune lokaler eller ute på vår store terrasse. 
              Vi har alle rettigheter for servering og garanterer god stemning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Image Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden glow-card border border-border/50">
              <img
                src={TEAM_IMAGE}
                alt="Vårt team"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Vårt <span className="text-primary">Team</span>
                </h2>
                <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                  100% lokalt eierskap - Alle rettigheter forbeholdt lokalsamfunnet
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;