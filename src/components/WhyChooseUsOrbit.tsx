import { motion, useInView } from 'framer-motion';
import { Building2, Award, GraduationCap, Ship } from 'lucide-react';
import { useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';

const features = [
  {
    id: 1,
    title: 'Subsidiary of Ceyline Group',
    description: "Part of Sri Lanka's largest and most diversified shipping conglomerate with decades of maritime excellence.",
    icon: Building2,
    color: 'from-accent to-primary',
  },
  {
    id: 2,
    title: 'Ceylon Chamber Appointed',
    description: 'Marine Surveyors officially appointed by The Ceylon Chamber of Commerce for trusted industry recognition.',
    icon: Award,
    color: 'from-mint to-accent',
  },
  {
    id: 3,
    title: 'Factory Trained Technicians',
    description: 'Expert technicians trained directly by world-leading manufacturers ensuring top-tier service quality.',
    icon: GraduationCap,
    color: 'from-primary to-accent',
  },
  {
    id: 4,
    title: 'Global Shipping Partners',
    description: "Working with world's leading shipping lines and container operators across international waters.",
    icon: Ship,
    color: 'from-accent to-mint',
  },
];

const TimelineItem = ({ 
  feature, 
  index, 
  isInView 
}: { 
  feature: typeof features[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const isLeft = index % 2 === 0;
  const Icon = feature.icon;

  return (
    <div className="relative flex items-center justify-center">
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className={`w-full lg:w-[calc(50%-40px)] ${
          isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
        }`}
      >
        <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group hover-lift border border-border/50 hover:border-accent/30">
          {/* Connector Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
            className={`hidden lg:block absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-accent to-mint ${
              isLeft ? 'right-0 origin-right -translate-x-0' : 'left-0 origin-left translate-x-0'
            }`}
            style={{
              [isLeft ? 'right' : 'left']: 'calc(50% - 40px)',
            }}
          />

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-accent/30 transition-shadow duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-accent/80">
                  0{feature.id}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center Milestone Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.2 + 0.2,
          type: 'spring',
          stiffness: 200
        }}
        className="absolute left-1/2 -translate-x-1/2 z-10 hidden lg:flex"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-mint shadow-lg shadow-accent/50 pulse-glow">
          <div className="absolute inset-1 rounded-full bg-background" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent to-mint" />
        </div>
      </motion.div>
    </div>
  );
};

export const WhyChooseUsOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-muted/30">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-mint/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-mint/15 text-accent text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Why Choose <span className="gradient-text">MSTS</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-leading expertise backed by decades of maritime excellence
          </p>
        </AnimatedSection>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-mint to-accent origin-top rounded-full"
          />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-16">
            {features.map((feature, index) => (
              <TimelineItem
                key={feature.id}
                feature={feature}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* End Cap */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-mint shadow-lg shadow-accent/50"
          />
        </div>
      </div>
    </section>
  );
};
