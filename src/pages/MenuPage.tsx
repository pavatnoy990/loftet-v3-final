import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ParallaxSection } from '../components/ParallaxSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

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
        image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600&h=400&fit=crop',
        allergens: 'A, C, F',
      },
      {
        id: 2,
        name: 'Miso Ramen',
        description: 'Rik og smakfull miso-basert buljong med håndlagde nudler. Toppet med mais, smør, bønnespirer og fersk chili.',
        price: '210,-',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop',
        allergens: 'A, C, F, G',
      },
      {
        id: 3,
        name: 'Loftet Cheese Ramen',
        description: 'Vår signaturrett! Kremet ostebuljong med rik smak. Servert med smeltet ost, bacon og vårløk.',
        price: '225,-',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
        allergens: 'A, C, G',
      },
      {
        id: 4,
        name: 'Vegan Shoyu',
        description: 'Plantebasert soyabuljong med tofu, shiitake, pak choy, vårløk og sesamolje.',
        price: '195,-',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 5,
        name: 'Vegan Miso Tantan',
        description: 'Krydret sesambuljong med tofufyll, pak choy, chilisolje og knust peanøtt. Vegansk og smakfull.',
        price: '195,-',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=600&h=400&fit=crop',
      },
      {
        id: 7,
        name: 'Kylling',
        description: 'Grillet kyllingbryst med teriyaki-glaze.',
        price: '+35,-',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop',
      },
      {
        id: 8,
        name: 'Biff',
        description: 'Tynneskåret biff, lynstekt til perfeksjon.',
        price: '+45,-',
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 10,
        name: 'Soyamelk Kylling Udon',
        description: 'Kremet soyamelk-buljong med mørt kyllingkjøtt og udon-nudler.',
        price: '200,-',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 11,
        name: 'Udon Carbonara',
        description: 'Japansk vri på italiensk klassiker. Kremet eggesaus, bacon og parmesan.',
        price: '190,-',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop',
        allergens: 'A, C, G',
      },
      {
        id: 12,
        name: "Marine Captain's Curry",
        description: 'Japansk curry med sjømat, servert over dampet ris med pickles.',
        price: '200,-',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop',
        allergens: 'A, B, D',
      },
      {
        id: 13,
        name: 'Gyudon Biff Rice Bowl',
        description: 'Klassisk japansk biff-bolle med tynneskåret biff, løk og søt soyasaus over ris.',
        price: '185,-',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 14,
        name: 'Oyakodon Chicken Rice Bowl',
        description: 'Tradisjonell kylling og egg-bolle over dampet ris med løk og dashi.',
        price: '185,-',
        image: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=600&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 16,
        name: 'Samurai-Potet',
        description: 'Bakt potet med teriyaki-kylling, sesamfrø, vårløk og wasabi-majones.',
        price: '149,-',
        image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=600&h=400&fit=crop',
        allergens: 'C, F',
      },
      {
        id: 17,
        name: 'Klassisk-Potet',
        description: 'Bakt potet med rømme, bacon, ost og gressløk.',
        price: '149,-',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1606525437679-037aca74a3e9?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 19,
        name: 'Kyllingdumplings (6 stk)',
        description: 'Dampede dumplings med kyllingfyll, servert med ponzu og chilisolje.',
        price: '125,-',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 20,
        name: 'Yakitori (3 stk)',
        description: 'Grillede kyllingspyd med teriyaki-glaze og sesamfrø.',
        price: '100,-',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop',
        allergens: 'A, F',
      },
      {
        id: 21,
        name: 'Karaage',
        description: 'Japansk fritert kylling marinert i soya, sake og ingefær. Servert med japansk majones.',
        price: '125,-',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop',
        allergens: 'A, C, F',
      },
      {
        id: 22,
        name: 'Pommes Frites',
        description: 'Sprø pommes frites med valgfri dip.',
        price: '55,-',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop',
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

  // Forhåndslasting for å stoppe flimmer
  useEffect(() => {
    const img = new Image();
    img.src = RAMEN_HERO;
  }, []);

  return (
    <PageTransition>
      {/* Hero Section - Bruker det nye bildet og fjerner flimmer/topp-sort */}
      <ParallaxSection
        backgroundImage={RAMEN_HERO}
        className="pt-32 pb-20"
        overlayOpacity={0.65}
        isHero={true}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold mb-4"
          >
            Vår <span className="text-primary">Meny</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto"
          >
            Autentisk japansk ramen og småretter - laget med kjærlighet
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Menu Categories */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {menuCategories.map((category) => (
            <section key={category.name} className="mb-16 last:mb-0">
              <div className="mb-8">
                <div className="inline-block relative">
                  <div className="absolute -top-2 left-0 w-12 h-1 bg-primary rounded-full" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {category.name}
                  </h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glow-card bg-card rounded-xl overflow-hidden cursor-pointer border border-border/50 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)]"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.description}
                      </p>
                      {item.allergens && (
                        <p className="text-xs text-primary/70 mt-2">
                          Allergener: {item.allergens}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* Allergen Info */}
          <section className="mt-16 pt-8 border-t border-border/30">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Allergeninformasjon
            </h3>
            <div className="flex flex-wrap gap-4">
              {allergenCodes.map((allergen) => (
                <div
                  key={allergen.code}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                    {allergen.code}
                  </span>
                  <span>{allergen.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Item Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-card border-border max-w-lg p-0 overflow-hidden">
          {selectedItem && (
            <>
              <div className="relative h-64 w-full">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">{selectedItem.name}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{selectedItem.price}</span>
                  {selectedItem.allergens && (
                    <span className="text-xs text-muted-foreground italic">
                      Allergener: {selectedItem.allergens}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default MenuPage;