import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  category: string;
  title: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  selectedCategory: string;
}

export const MasonryGallery = ({ images, selectedCategory }: MasonryGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < filteredImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrev(e as any);
    if (e.key === 'ArrowRight') handleNext(e as any);
    if (e.key === 'Escape') setSelectedIndex(null);
  };

  return (
    <>
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => {
            // Varying heights for masonry effect
            const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-56'];
            const heightClass = heights[index % heights.length];

            return (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedIndex(index)}
                  className={`group cursor-pointer relative ${heightClass} rounded-2xl overflow-hidden`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                      className="w-14 h-14 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center mb-4 shadow-xl"
                    >
                      <ZoomIn className="w-6 h-6 text-accent-foreground" />
                    </motion.div>
                    <h3 className="text-primary-foreground font-display font-semibold text-lg text-center px-4">
                      {image.title}
                    </h3>
                    <span className="text-primary-foreground/70 text-sm mt-1">{image.category}</span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </motion.button>

            {/* Navigation */}
            {selectedIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handlePrev}
                className="absolute left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary-foreground" />
              </motion.button>
            )}
            {selectedIndex < filteredImages.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleNext}
                className="absolute right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-primary-foreground" />
              </motion.button>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-primary-foreground font-display text-2xl font-bold">
                  {filteredImages[selectedIndex].title}
                </h3>
                <span className="text-primary-foreground/60 mt-2 inline-block px-4 py-1 rounded-full bg-white/10">
                  {filteredImages[selectedIndex].category}
                </span>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/60">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
