import { motion } from 'framer-motion';
import { Fish, Apple, Pill, Snowflake } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

import seafoodImg from '@/assets/food/seafood.jpg';
import fruitsImg from '@/assets/food/fruits.jpg';
import vegetablesImg from '@/assets/food/vegetables.jpg';
import pharmaceuticalsImg from '@/assets/food/pharmaceuticals.jpg';

const foodCategories = [
  {
    id: 1,
    title: 'Fresh Seafood',
    description: 'Premium lobsters, salmon, shrimp & oysters transported at optimal temperatures',
    image: seafoodImg,
    icon: Fish,
    color: 'from-cyan-500 to-blue-600',
    stat: '50K+ tons',
  },
  {
    id: 2,
    title: 'Tropical Fruits',
    description: 'Exotic mangoes, pineapples, berries & citrus fruits shipped worldwide',
    image: fruitsImg,
    icon: Apple,
    color: 'from-orange-400 to-red-500',
    stat: '100+ varieties',
  },
  {
    id: 3,
    title: 'Fresh Vegetables',
    description: 'Farm-fresh produce including broccoli, peppers, carrots & premium greens',
    image: vegetablesImg,
    icon: Apple,
    color: 'from-green-400 to-emerald-600',
    stat: 'Farm to port',
  },
  {
    id: 4,
    title: 'Pharmaceuticals',
    description: 'Temperature-sensitive vaccines, medicines & medical supplies with cold chain integrity',
    image: pharmaceuticalsImg,
    icon: Pill,
    color: 'from-blue-400 to-indigo-600',
    stat: 'GDP Compliant',
  },
];

export const FoodShowcase = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-mesh-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-80 h-80 bg-mint/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 to-mint/20 text-accent mb-6"
          >
            <Snowflake className="w-4 h-4" />
            <span className="text-sm font-semibold">Cold Chain Excellence</span>
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="gradient-text">Transport</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Keeping your precious cargo fresh from origin to destination with our state-of-the-art reefer containers
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Background Image */}
                <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-64'} w-full`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                      className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Stat Badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {category.stat}
                    </motion.div>
                    
                    {/* Title & Description */}
                    <div className="relative z-10">
                      <h3 className={`font-display font-bold text-white mb-2 ${
                        index === 0 ? 'text-3xl' : 'text-xl'
                      }`}>
                        {category.title}
                      </h3>
                      <p className={`text-white/90 leading-relaxed ${
                        index === 0 ? 'text-base' : 'text-sm'
                      }`}>
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 border-2 border-white/30 rounded-3xl" />
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-3xl`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
