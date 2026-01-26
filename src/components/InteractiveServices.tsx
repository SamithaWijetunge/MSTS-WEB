import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Shield,
  ClipboardCheck,
  Monitor,
  Package,
  Key,
  Search,
  Ship,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedSection } from './AnimatedSection';
import reeferServicesHero from '@/assets/services/reefer-services-hero.jpg';

const services = [
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    description: 'Get your reefer repairs & maintenance done by factory trained technicians.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Shield,
    title: 'Warranty Repairs',
    description: 'Authorized service agent for reefer container warranty repairs in Sri Lanka.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Pre Trip Inspections',
    description: 'Industry best reefer container pre-trip inspection services for compliance.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Monitor,
    title: 'Container Monitoring',
    description: 'Real-time data and alerts with our reefer monitoring solutions.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Package,
    title: 'Spare Parts Supply',
    description: 'Full range of reefer container spare parts at duty free prices.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Key,
    title: 'Container Renting',
    description: 'Continuously tested reefer container fleet for hassle-free rental.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: Search,
    title: 'Container Surveys',
    description: 'Best reefer container survey services using innovative technologies.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Ship,
    title: 'Vessel Surveys',
    description: 'Professional marine surveyors ensuring international compliance.',
    color: 'from-teal-500 to-emerald-500',
  },
];

export const InteractiveServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = services[activeIndex].icon;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-mesh-animated">

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Reefer Container <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive end-to-end reefer container management services under one roof
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left - Image showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 h-full flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[400px] lg:min-h-[500px]">
              <img
                src={reeferServicesHero}
                alt="Reefer container services"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Active service indicator */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass rounded-2xl p-6 border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${services[activeIndex].color} flex items-center justify-center`}>
                        <ActiveIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {services[activeIndex].title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {services[activeIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>

          {/* Right - Service list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative"
                >
                  {/* Animated gradient border for active card */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-accent to-mint animate-gradient-x"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-full h-full rounded-2xl bg-card" />
                    </motion.div>
                  )}
                  
                  {/* Card content */}
                  <div className={`relative group cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-card shadow-lg shadow-primary/10'
                      : 'bg-card/50 border border-border/50 hover:bg-muted/50'
                  }`}>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          activeIndex === index ? 'scale-110' : ''
                        }`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${
                          activeIndex === index ? 'translate-x-1 text-primary' : ''
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link to="/services">
                <Button variant="gradient" size="lg" className="gap-2 w-full sm:w-auto">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
