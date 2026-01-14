import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero-seksjon - Jordnær og velkommende */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80" 
            alt="Stemning på en lokal pub" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-3 block">Lokalt samlingspunkt i Knarvik</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            OM <span className="text-primary italic">LOFTET</span>
          </h1>
        </motion.div>
      </section>

      {/* Hoveddel - Fokus på lokal tilhørighet og uformell stemning */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 tracking-tight text-white/90">Midt i Knarvik, rett under taket</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                2 Katter på Loftet er ikke et sted for hvite duker og stive servitører. Her i Knarvik har vi skapt et sted med lave skuldre, hvor du kan komme akkurat som du er – enten du er ferdig på jobb eller skal ut med gode venner.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Vi brenner for det lokale miljøet. Navnet vårt speiler den uformelle sjelen vår, og vi ønsker å være den lune stuen i Nordhordland hvor praten sitter løst og stemningen er ekte.
              </p>
            </div>
            
            <div className="flex flex-col justify-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="mb-8">
                <h3 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Hva vi står for</h3>
                <p className="text-lg font-medium italic">"Gode naboer, kald drikke og en scene for alle."</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-gray-300">Uformell bar med sjel</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-gray-300">Mat som metter og smaker</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-gray-300">Lokale kulturinnslag</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tredelt seksjon - Bar • Restaurant • Kultur */}
      <section className="py-16 border-y border-white/5 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-primary">Bar</h4>
              <p className="text-sm text-gray-400">En ordentlig bar med et utvalg du kjenner igjen, og alltid noe nytt fra lokale bryggerier.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-primary">Restaurant</h4>
              <p className="text-sm text-gray-400">Hjemmelaget mat uten dikkedarer. Vi bruker gode råvarer for å servere retter folk liker.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-primary">Kultur</h4>
              <p className="text-sm text-gray-400">Fra quiz-kvelder til lokale band. Loftet er scenen for det som skjer i Knarvik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bunn-seksjon */}
      <section className="py-24 text-center container mx-auto px-6">
        <h2 className="font-display text-3xl font-bold mb-10">Stikk innom oss på Loftet</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/meny" className="px-8 py-3 bg-primary text-white rounded-md font-bold hover:bg-primary/90 transition-all">
            Se hva vi serverer
          </a>
          <a href="/events" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-md font-bold hover:bg-white/10 transition-all">
            Hva skjer fremover?
          </a>
        </div>
        <p className="mt-12 text-gray-500 text-sm italic">Vi sees i andre etasje!</p>
      </section>
    </div>
  );
};

export default AboutPage;