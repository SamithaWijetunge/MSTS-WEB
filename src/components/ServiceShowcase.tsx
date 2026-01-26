import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ServiceShowcaseProps {
  services: Service[];
}

export const ServiceShowcase = ({ services }: ServiceShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image Side */}
      <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

        {/* Active service info */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-8"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
            {services[activeIndex].title}
          </h3>
          <p className="text-primary-foreground/80 mb-4 max-w-md">
            {services[activeIndex].description}
          </p>
          <Link to="/quote">
            <Button variant="hero" size="lg" className="gap-2">
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Floating decorations */}
        <motion.div
          className="absolute top-6 right-6 w-24 h-24 rounded-full bg-accent/20 backdrop-blur-sm"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Services List Side */}
      <div className="space-y-3 order-1 lg:order-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={service.title}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ x: 8 }}
              className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl'
                  : 'glass hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-primary/10 to-accent/10'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-display font-semibold text-lg ${
                      isActive ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {service.title}
                  </h4>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-primary-foreground/80 text-sm mt-1 line-clamp-2"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    isActive
                      ? 'text-primary-foreground rotate-0'
                      : 'text-muted-foreground group-hover:translate-x-1'
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
