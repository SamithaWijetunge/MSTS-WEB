import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import seafoodImg from '@/assets/food/seafood.jpg';
import fruitsImg from '@/assets/food/fruits.jpg';
import vegetablesImg from '@/assets/food/vegetables.jpg';
import pharmaceuticalsImg from '@/assets/food/pharmaceuticals.jpg';

const products = [
  { id: 1, name: 'Fresh Lobster', image: seafoodImg, category: 'Seafood' },
  { id: 2, name: 'Tropical Fruits', image: fruitsImg, category: 'Fruits' },
  { id: 3, name: 'Farm Vegetables', image: vegetablesImg, category: 'Vegetables' },
  { id: 4, name: 'Medical Supplies', image: pharmaceuticalsImg, category: 'Pharma' },
  { id: 5, name: 'Premium Seafood', image: seafoodImg, category: 'Seafood' },
  { id: 6, name: 'Exotic Fruits', image: fruitsImg, category: 'Fruits' },
  { id: 7, name: 'Organic Produce', image: vegetablesImg, category: 'Vegetables' },
  { id: 8, name: 'Vaccines', image: pharmaceuticalsImg, category: 'Pharma' },
];

export const ProductCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-medium"
          >
            Trusted for transporting perishables worldwide
          </motion.p>
        </div>

        {/* Infinite Scroll Carousel */}
        <div 
          className="relative pause-on-hover"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Content */}
          <motion.div
            className="flex gap-6 marquee-content"
            animate={isPaused ? {} : { x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...products, ...products].map((product, index) => (
              <motion.div
                key={`${product.id}-${index}`}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-shrink-0 w-64 group"
              >
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h4 className="text-white font-display font-bold text-lg">
                      {product.name}
                    </h4>
                  </div>
                  
                  {/* Glow border on hover */}
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
