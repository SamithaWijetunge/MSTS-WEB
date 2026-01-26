import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const partners = [
  'Carrier Transicold',
  'Star Cool',
  'Thermo King',
  'Daikin',
  'Maersk',
  'MSC',
  'Evergreen',
  'Hapag-Lloyd',
];

export const TrustMarquee = () => {
  return (
    <section className="py-12 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Authorized Service Agents
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Partnered with world's leading reefer container manufacturers and shipping lines
          </p>
        </AnimatedSection>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Double the items for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <div className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors duration-300">
                    <span className="font-display font-semibold text-lg whitespace-nowrap">
                      {partner}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
