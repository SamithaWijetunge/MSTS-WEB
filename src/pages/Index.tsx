import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { AnimatedSection } from '@/components/AnimatedSection';
import { EnhancedStats } from '@/components/EnhancedStats';
import { BentoGrid } from '@/components/BentoGrid';
import { AuthorizedAgents } from '@/components/AuthorizedAgents';
import { InteractiveServices } from '@/components/InteractiveServices';
import { TrustMarquee } from '@/components/TrustMarquee';
import { WhyChooseUsOrbit } from '@/components/WhyChooseUsOrbit';
import { WaveDivider } from '@/components/WaveDivider';

import { GalleryPreview } from '@/components/GalleryPreview';
import { FoodShowcase } from '@/components/FoodShowcase';
import { ProductCarousel } from '@/components/ProductCarousel';
import { Button } from '@/components/ui/button';
import reeferContainersHero from '@/assets/reefer-containers-hero.jpg';
import abstractBg from '@/assets/abstract-bg.jpg';

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Wave Divider */}
      <WaveDivider />

      {/* Enhanced Stats Section */}
      <EnhancedStats />

      {/* Food Showcase - NEW */}
      <FoodShowcase />

      {/* Why Choose Us - Timeline Design */}
      <WhyChooseUsOrbit />

      {/* About Preview */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={abstractBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Decorative Glows */}
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-mint/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl hover-lift"
                >
                  <img
                    src={reeferContainersHero}
                    alt="Reefer containers at port"
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
                
                {/* Enhanced floating badge - positioned above image */}
                <motion.div
                  className="absolute -top-6 -left-6 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glow effect behind badge */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-mint rounded-xl blur-lg opacity-50 animate-pulse" />
                  
                  {/* Animated gradient border wrapper */}
                  <div className="relative bg-gradient-to-r from-primary via-accent to-mint animate-gradient-x p-[2px] rounded-xl shadow-xl">
                    <div className="bg-background/95 backdrop-blur-sm p-5 rounded-xl">
                      <div className="text-4xl font-display font-bold gradient-text">37+</div>
                      <div className="text-sm font-medium text-foreground/80">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-mint/15 text-accent">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Trusted Since 1988</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                  Your Trusted Partner for{' '}
                  <span className="gradient-text">Reefer Container Services</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At Marine Survey & Technology Services (Pvt) Ltd. (MSTS), we are continuously 
                  reinventing to take care of those we serve. With over 30 years of excellence 
                  in the reefer container service industry, today MSTS owns the industry leading 
                  expertise, resources and reliability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Thanks to the cutting-edge technology and specialist knowledge of our dedicated 
                  and professionally qualified team, we carry out best-in-class and comprehensive 
                  reefer container services under one roof around-the-clock.
                </p>
                <Link to="/about">
                  <Button variant="gradient" size="lg" className="gap-2 mt-4 hover-lift">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider flip />

      {/* Bento Grid - Why Choose Us */}
      <BentoGrid />

      {/* Wave Divider */}
      <WaveDivider flip />

      {/* Authorized Service Agents */}
      <AuthorizedAgents />

      {/* Product Carousel - NEW */}
      <ProductCarousel />

      {/* Wave Divider */}
      <WaveDivider />

      {/* Interactive Services Section */}
      <InteractiveServices />


      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Partners Marquee Section */}
      <TrustMarquee />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-mesh-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="relative glass rounded-3xl p-8 lg:p-16 text-center overflow-hidden border border-accent/20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-mint/10" />
              
              {/* Animated decorations */}
              <motion.div
                className="absolute top-6 left-6 w-24 h-24 border-2 border-accent/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute bottom-6 right-6 w-20 h-20 border-2 border-mint/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-10 w-16 h-16 bg-accent/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 right-10 w-20 h-20 bg-mint/10 rounded-full blur-2xl"
                animate={{ scale: [1.5, 1, 1.5], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                  Get Your Questions{' '}
                  <span className="gradient-text">Answered by Experts</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                  We'll help you get the perfect protection for your reefer container boxes, 
                  covering all the compliances need to adhere.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/quote">
                    <Button variant="quote" size="xl" className="gap-2 glow-hover">
                      Request Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <a href="tel:+94114511080">
                    <Button variant="outline" size="xl" className="gap-2 hover-lift">
                      Call +94 114 511 080
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
