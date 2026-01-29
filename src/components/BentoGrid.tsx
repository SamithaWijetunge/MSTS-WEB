import { motion } from 'framer-motion';
import { Building, Award, Users, Globe, Wrench, Shield, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const bentoItems = [
  {
    title: 'Subsidiary of Ceyline Group',
    description: "Part of Sri Lanka's most diversified shipping group with 40+ years of maritime excellence",
    icon: Building,
    size: 'large',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Ceylon Chamber Appointed',
    description: 'Marine surveyors officially appointed by The Ceylon Chamber of Commerce',
    icon: Award,
    size: 'medium',
    gradient: 'from-mint to-accent',
    //rtewq
  },
  {
    title: 'Factory Trained',
    description: 'Expert technicians trained by leading manufacturers worldwide',
    icon: Wrench,
    size: 'medium',
    gradient: 'from-primary to-accent',
  },
  {
    title: '4 Main Brands',
    description: 'Working with shipping leaders',
    icon: Globe,
    size: 'small',
    stat: '50+',
  },
  {
    title: '38+ Years',
    description: 'Industry excellence',
    icon: Shield,
    size: 'small',
    stat: '37+',
  },
  {
    title: '40+ Trained Technicians',
    description: 'Qualified technicians',
    icon: Users,
    size: 'small',
    stat: '100+',
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dots">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-mint/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-mint/15 text-accent mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">MSTS?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-leading expertise backed by decades of experience and global partnerships
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Card - Ceyline Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="lg:col-span-2 lg:row-span-2 relative group"
          >
            <div className="h-full glass rounded-3xl p-8 lg:p-10 overflow-hidden relative border border-border/50 hover:border-accent/40 transition-all duration-300 shine-effect">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-mint/5 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${bentoItems[0].gradient} flex items-center justify-center mb-6 shadow-xl shadow-accent/30`}
              >
                <Building className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {bentoItems[0].title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {bentoItems[0].description}
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-3 h-3 rounded-full bg-gradient-to-br from-accent to-mint opacity-70"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium Cards */}
          {bentoItems.slice(1, 3).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="lg:col-span-2 group"
            >
              <div className="h-full glass rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-300 shine-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-mint/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small Stat Cards */}
          {bentoItems.slice(3).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 text-center relative overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-mint/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="relative z-10"
                >
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    {item.stat}
                  </div>
                  <div className="text-foreground font-semibold mb-1 group-hover:text-accent transition-colors">{item.title}</div>
                  <div className="text-muted-foreground text-sm">{item.description}</div>
                </motion.div>

                {/* Background icon */}
                <item.icon className="absolute -bottom-4 -right-4 w-24 h-24 text-accent/10 transform rotate-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
