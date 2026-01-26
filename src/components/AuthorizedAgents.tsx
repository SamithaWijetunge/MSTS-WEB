import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import thermokingLogo from '@/assets/brands/thermoking.jpg';
import carrierLogo from '@/assets/brands/carrier.jpg';
import daikinLogo from '@/assets/brands/daikin.jpg';
import starcoolLogo from '@/assets/brands/starcool.jpg';

const agents = [
  { name: 'Thermo King', logo: thermokingLogo },
  { name: 'Carrier', logo: carrierLogo },
  { name: 'Daikin', logo: daikinLogo },
  { name: 'Star Cool', logo: starcoolLogo },
];

export const AuthorizedAgents = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-primary/5" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Trusted Partnerships</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Authorized Service <span className="gradient-text">Agents</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to be authorized service agents for the world's leading reefer container manufacturers
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <AnimatedSection key={agent.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 lg:p-8 h-48 lg:h-56 flex flex-col items-center justify-center gap-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo container */}
                  <div className="relative z-10 w-full h-24 lg:h-32 flex items-center justify-center bg-white/95 rounded-xl p-4 shadow-sm">
                    <img
                      src={agent.logo}
                      alt={`${agent.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Brand name */}
                  <span className="relative z-10 font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {agent.name}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
