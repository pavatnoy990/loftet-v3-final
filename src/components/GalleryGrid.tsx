import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from './ui/dialog';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    alt: 'Restaurant interiør',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    alt: 'Live band på scenen',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    alt: 'Bar område',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    alt: 'Spiseplass',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
    alt: 'Matservering',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop',
    alt: 'Cocktails',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop',
    alt: 'Stemning på kvelden',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    alt: 'Ramen servering',
  },
];

export const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Symmetrical 4-column grid with equal height images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 25px 5px hsl(355 82% 56% / 0.45)',
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="relative aspect-[3/2] overflow-hidden rounded-xl cursor-pointer border border-border/30"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-3 left-3 text-foreground font-medium text-sm">{image.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-transparent border-none max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-xl"
              />
              <p className="text-center text-foreground/80 mt-4">{selectedImage.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};