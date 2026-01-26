import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientMesh } from '@/components/GradientMesh';
import { Button } from '@/components/ui/button';
import { servicesData, serviceCategories, getServicesByCategory } from '@/data/servicesData';
import heroShip from '@/assets/hero-ship.jpg';

const Services = () => {
  const reeferServices = getServicesByCategory('reefer');
  const surveyServices = getServicesByCategory('survey');
  const logisticsServices = getServicesByCategory('logistics');

  const ServiceCard = ({ service, index }: { service: typeof servicesData[0]; index: number }) => {
    const Icon = service.icon;
    return (
      <AnimatedSection delay={index * 0.05}>
        <Link to={service.path}>
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <div className="relative bg-card rounded-2xl overflow-hidden h-full border border-border/50 group-hover:border-accent/50 transition-all duration-500">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-2.5 rounded-xl bg-accent/90 shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </AnimatedSection>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroShip} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <GradientMesh />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm">14 Comprehensive Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Our{' '}
              <span className="relative inline-block">
                <span className="text-accent">Services</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary-foreground/80 text-xl max-w-2xl"
            >
              MSTS offers the best rates for an extensive range of reefer container services 
              & marine survey services in Sri Lanka under one roof.
            </motion.p>
          </div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
        >
          <div className="space-y-4">
            {[
              { value: '14', label: 'Services' },
              { value: '35+', label: 'Years' },
              { value: '24/7', label: 'Support' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/10"
              >
                <div className="text-2xl font-bold text-accent">{item.value}</div>
                <div className="text-xs text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reefer Container Services */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <GradientMesh className="opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {serviceCategories.reefer.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {serviceCategories.reefer.description}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reeferServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Survey Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {serviceCategories.survey.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {serviceCategories.survey.description}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {surveyServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Specialized Services */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <GradientMesh className="opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {serviceCategories.logistics.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {serviceCategories.logistics.description}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logisticsServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Icons Marquee */}
      <section className="py-12 bg-primary overflow-hidden">
        <motion.div
          className="flex gap-16"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[...servicesData, ...servicesData].map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex items-center gap-4 shrink-0">
                <Icon className="w-6 h-6 text-primary-foreground/50" />
                <span className="text-primary-foreground/70 font-medium whitespace-nowrap text-sm">
                  {service.shortTitle}
                </span>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <GradientMesh className="opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <motion.div 
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="relative p-10 lg:p-16 text-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Need a Custom <span className="text-accent">Solution?</span>
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
                  Contact our team to discuss your specific reefer container service requirements.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/quote">
                    <Button variant="hero" size="xl" className="gap-2">
                      Request Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="glass" size="xl">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
