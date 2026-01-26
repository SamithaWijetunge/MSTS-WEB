import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientMesh } from '@/components/GradientMesh';
import { ServiceData, getRelatedServices } from '@/data/servicesData';

interface ServicePageTemplateProps {
  service: ServiceData;
}

export const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  const relatedServices = getRelatedServices(service.id);
  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        <GradientMesh className="opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/services">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20 border border-accent/30">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                {service.category === 'reefer' ? 'Reefer Services' : 
                 service.category === 'survey' ? 'Survey Services' : 'Logistics'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="gap-2">
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      {service.contentSections && service.contentSections.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-20">
              {service.contentSections.map((section, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <div className={`grid ${section.image ? 'lg:grid-cols-2 gap-8 lg:gap-12 items-center' : ''} ${index % 2 === 1 && section.image ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text Content */}
                    <div className={`${index > 0 && !section.image ? 'pl-6 border-l-2 border-accent/30' : ''} ${index % 2 === 1 && section.image ? 'lg:order-2' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-muted-foreground leading-relaxed text-lg">
                            {paragraph}
                          </p>
                        ))}
                        {/* Bullet Points */}
                        {section.bulletPoints && section.bulletPoints.length > 0 && (
                          <ul className="space-y-3 mt-6">
                            {section.bulletPoints.map((point, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-accent/20 mt-0.5 flex-shrink-0">
                                  <Check className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    {/* Section Image */}
                    {section.image && (
                      <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features & Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <AnimatedSection direction="up">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  What We Offer
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-accent/20 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Benefits */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-gradient-to-br from-accent/10 to-mint/10 rounded-2xl p-8 border border-accent/20 h-full">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Why Choose Us
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-accent mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Related Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our other services that complement {service.shortTitle}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <AnimatedSection key={relatedService.id} direction="up" delay={index * 0.1}>
                    <Link to={relatedService.path}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 h-full"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={relatedService.image}
                            alt={relatedService.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-accent/20">
                              <RelatedIcon className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {relatedService.shortTitle}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedService.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-mint relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today for a free consultation and discover how our {service.shortTitle.toLowerCase()} service can benefit your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/quote">
                  <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
