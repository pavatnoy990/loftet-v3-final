import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { ShoppingBag, Phone, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

// Definerer bildet her for enkel forhåndslasting
const RAMEN_HERO = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1600&q=75&auto=format&fit=crop";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  allergens?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: 'Ramen',
    items: [
      {
        id: 1,
        name: 'Shoyu Ramen',
        description: 'Lett og elegant soyabasert buljong med kylling. Servert med spinat, marinert egg, menma og sesamfrø.',
        price: '210,-',
        image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80',
        allergens: 'A, C, F',
      },
      {
        id: 2,
        name: 'Miso Ramen',
        description: 'Rik og smakfull miso-basert buljong med hovndlagde nudler. Toppet med mais, smør, bønnespirer og fersk chili.',
        price: '210,-',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80',
        allergens: 'A, C, F, G',
      },
      {
        id: 3,
        name: 'Loftet Cheese Ramen',
        description: 'Vår signaturrett! Kremet ostebuljong med rik smak. Servert med smeltet ost, bacon og vårløk.',
        price: '225,-',
        image: 'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?w=800&q=80',
        allergens: 'A, C, G',
      },
      {
        id: 4,
        name: 'Vegan Shoyu',
        description: 'Plantebasert soyabuljong med tofu, shiitake, pak choy, vårløk og sesamolje.',
        price: '195,-',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 5,
        name: 'Vegan Miso Tantan',
        description: 'Krydret sesambuljong med tofufyll, pak choy, chilisolje og knust peanøtt. Vegansk og smakfull.',
        price: '195,-',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
        allergens: 'A, E, F',
      },
    ],
  },
  {
    name: 'Toppings',
    items: [
      {
        id: 6,
        name: 'Svinekjøtt',
        description: 'Mørt og saftig chashu-svin, perfekt marinert.',
        price: '+35,-',
        image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=800&q=80',
      },
      {
        id: 7,
        name: 'Kylling',
        description: 'Grillet kyllingbryst med teriyaki-glaze.',
        price: '+35,-',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80',
      },
      {
        id: 8,
        name: 'Biff',
        description: 'Tynneskåret biff, lynstekt til perfeksjon.',
        price: '+45,-',
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80',
      },
    ],
  },
  {
    name: 'Udon & Ris',
    items: [
      {
        id: 9,
        name: 'Biff og Løk Udon',
        description: 'Tykke udon-nudler i rik buljong med tynneskåret biff og karamellisert løk.',
        price: '210,-',
        image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 10,
        name: 'Soyamelk Kylling Udon',
        description: 'Kremet soyamelk-buljong med mørt kyllingkjøtt og udon-nudler.',
        price: '200,-',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 11,
        name: 'Udon Carbonara',
        description: 'Japansk vri på italiensk klassiker. Kremet eggesaus, bacon og parmesan.',
        price: '190,-',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
        allergens: 'A, C, G',
      },
      {
        id: 12,
        name: "Marine Captain's Curry",
        description: 'Japansk curry med sjømat, servert over dampet ris med pickles.',
        price: '200,-',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
        allergens: 'A, B, D',
      },
      {
        id: 13,
        name: 'Gyudon Biff Rice Bowl',
        description: 'Klassisk japansk biff-bolle med tynneskåret biff, løk og søt soyasaus over ris.',
        price: '185,-',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 14,
        name: 'Oyakodon Chicken Rice Bowl',
        description: 'Tradisjonell kylling og egg-bolle over dampet ris med løk og dashi.',
        price: '185,-',
        image: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=800&q=80',
        allergens: 'A, C, F',
      },
    ],
  },
  {
    name: 'Gua-Bao & Bakt Potet',
    items: [
      {
        id: 15,
        name: 'Gua-Bao (3 stk)',
        description: 'Myke, dampede brød fylt med svinekjøtt, pickles, koriander og hoisin-saus.',
        price: '165,-',
        image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 16,
        name: 'Samurai-Potet',
        description: 'Bakt potet med teriyaki-kylling, sesamfrø, vårløk og wasabi-majones.',
        price: '149,-',
        image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=800&q=80',
        allergens: 'C, F',
      },
      {
        id: 17,
        name: 'Klassisk-Potet',
        description: 'Bakt potet med rømme, bacon, ost og gressløk.',
        price: '149,-',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
        allergens: 'C, G',
      },
    ],
  },
  {
    name: 'Snacks',
    items: [
      {
        id: 18,
        name: 'Vårruller (4 stk)',
        description: 'Sprø vårruller fylt med grønnsaker og glassnudler. Servert med sweet chili.',
        price: '90,-',
        image: 'https://images.unsplash.com/photo-1606525437679-037aca74a3e9?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 19,
        name: 'Kyllingdumplings (6 stk)',
        description: 'Dampede dumplings med kyllingfyll, servert med ponzu og chilisolje.',
        price: '125,-',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 20,
        name: 'Yakitori (3 stk)',
        description: 'Grillede kyllingspyd med teriyaki-glaze og sesamfrø.',
        price: '100,-',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
        allergens: 'A, F',
      },
      {
        id: 21,
        name: 'Karaage',
        description: 'Japansk fritert kylling marinert i soya, sake og ingefær. Servert med japansk majones.',
        price: '125,-',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
        allergens: 'A, C, F',
      },
      {
        id: 22,
        name: 'Pommes Frites',
        description: 'Sprø pommes frites med valgfri dip.',
        price: '55,-',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
      },
    ],
  },
];

const allergenCodes = [
  { code: 'A', name: 'Gluten' },
  { code: 'B', name: 'Skalldyr' },
  { code: 'C', name: 'Egg' },
  { code: 'D', name: 'Fisk' },
  { code: 'E', name: 'Peanøtter' },
  { code: 'F', name: 'Soya' },
  { code: 'G', name: 'Melk' },
  { code: 'H', name: 'Nøtter' },
  { code: 'I', name: 'Selleri' },
];

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = RAMEN_HERO;
  }, []);

  return (
    <PageTransition>
      <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <ParallaxSection
          backgroundImage={RAMEN_HERO}
          className="pt-32 pb-24 min-h-[65vh] flex items-center justify-center"
          overlayOpacity={0.6}
          isHero={true}
        >
          <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-8xl font-bold mb-4 tracking-tighter text-white"
            >
              2 Katter på <span className="text-primary italic">Loftet</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed"
            >
              Autentisk japansk ramen og småretter - laget med kjærlighet
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-5 shadow-2xl text-left hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary p-3 rounded-full shadow-lg shadow-primary/20">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1">Sulten hjemme?</p>
                <Link to="/takeaway" className="flex items-center text-sm text-white font-medium hover:text-primary transition-colors group">
                  Bestill takeaway her <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
          {menuCategories.map((category) => (
            <section key={category.name} className="mb-24 last:mb-0">
              <div className="mb-12">
                <div className="inline-block relative">
                  <div className="absolute -top-3 left-0 w-16 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {category.name}
                  </h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 0 25px 5px hsl(355 82% 56% / 0.45)',
                      borderColor: "rgba(230, 57, 70, 0.4)"
                    }}
                    className="group bg-white/[0.02] rounded-2xl overflow-hidden cursor-pointer border border-white/5 will-change-transform"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-black shadow-xl">
                        {item.price}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-7 bg-[#0a0a0a]/40 backdrop-blur-sm border-t border-white/5">
                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-8 font-light italic">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-white/5 pt-5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                          Allergener: {item.allergens || 'Ingen'}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* Bottom Info Section */}
          <section className="mt-28 p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 text-center max-w-4xl mx-auto shadow-3xl backdrop-blur-sm">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Noe du ikke tåler?</h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed text-lg font-light italic">
              Vennligst informer betjeningen om eventuelle allergier. 
              Vi har full oversikt over alle allergener i våre retter.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 font-bold flex items-center gap-3 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95" onClick={() => window.location.href='tel:56350000'}>
                 <Phone className="w-5 h-5" /> Ring 56 35 00 00
               </Button>
               <Button variant="outline" className="border-white/10 hover:border-primary/50 hover:bg-primary/5 text-white rounded-full px-12 py-8 font-bold text-lg transition-all active:scale-95" asChild>
                 <Link to="/takeaway">Se Takeaway-meny</Link>
               </Button>
            </div>
          </section>

          {/* Allergen List */}
          <section className="mt-24 pt-16 border-t border-white/5">
            <h3 className="font-display text-xl font-bold text-white mb-10 tracking-[0.1em] uppercase flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Allergenoversikt
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {allergenCodes.map((allergen) => (
                <div
                  key={allergen.code}
                  className="flex items-center gap-4 text-sm text-gray-500 hover:text-gray-300 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/5 text-primary flex items-center justify-center text-xs font-black border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    {allergen.code}
                  </span>
                  <span className="font-semibold tracking-tight uppercase text-xs">{allergen.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-[#0f0f0f] border-white/10 max-w-lg p-0 overflow-hidden shadow-3xl backdrop-blur-2xl">
          {selectedItem && (
            <>
              <div className="relative h-80 w-full">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
              </div>
              <div className="p-10">
                <DialogHeader>
                  <DialogTitle className="font-display text-4xl font-bold text-white tracking-tight">{selectedItem.name}</DialogTitle>
                </DialogHeader>
                <p className="text-gray-400 mt-6 leading-relaxed font-light text-lg italic">{selectedItem.description}</p>
                <div className="mt-12 flex items-center justify-between gap-8">
                  <span className="text-4xl font-black text-primary tracking-tighter">{selectedItem.price}</span>
                  <Button className="rounded-full px-10 py-7 font-bold text-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                    <Link to="/takeaway">Bestill Takeaway</Link>
                  </Button>
                </div>
                {selectedItem.allergens && (
                  <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Allergener:</span>
                    <span className="text-xs text-gray-400 font-bold">{selectedItem.allergens}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="md:hidden fixed bottom-8 left-6 right-6 z-[50]">
        <Link to="/takeaway">
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(230,57,70,0.4)] flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6" />
              <span className="font-black tracking-tight uppercase text-sm">Bestill takeaway nå</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </Link>
      </div>
    </PageTransition>
  );
};

export default MenuPage;