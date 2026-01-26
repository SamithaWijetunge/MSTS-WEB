import { motion } from 'framer-motion';
import { 
  Package, 
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Sparkles
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MultiStepForm } from '@/components/MultiStepForm';
import { GradientMesh } from '@/components/GradientMesh';
import abstractBg from '@/assets/abstract-bg.jpg';

const Quote = () => {
  const benefits = [
    'Competitive pricing tailored to your needs',
    'Detailed breakdown of all services',
    'No hidden costs or surprises',
    'Free consultation with our experts',
    'Quick turnaround time',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 opacity-20">
            <img src={abstractBg} alt="" className="w-full h-full object-cover" />
          </div>
          <GradientMesh />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20"
            >
              <Package className="w-12 h-12 text-accent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm">Free Quote</span>
            </motion.div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Request a{' '}
              <span className="relative inline-block">
                <span className="text-accent">Quote</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Get a customized quote for your reefer container service needs. 
              Our experts will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 lg:py-32 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <MultiStepForm />
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.2}>
                <motion.div 
                  className="glass rounded-3xl p-8"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Why Request a Quote?
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {benefits.map((item, index) => (
                      <motion.li 
                        key={item} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.div 
                  className="relative overflow-hidden rounded-3xl p-8"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
                  <div className="relative z-10">
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">
                      Need Immediate Assistance?
                    </h3>
                    <div className="space-y-4">
                      <motion.a
                        href="tel:+94114511080"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span>+94 114 511 080</span>
                      </motion.a>
                      <motion.a
                        href="mailto:thushara@msts.lk"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span>thushara@msts.lk</span>
                      </motion.a>
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-sm text-primary-foreground/70">
                      <Clock className="w-4 h-4" />
                      <span>24/7 Support Available</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Estimated Response */}
              <AnimatedSection delay={0.4}>
                <motion.div 
                  className="glass rounded-3xl p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-accent/30 flex items-center justify-center"
                  >
                    <Clock className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h4 className="font-display font-bold text-foreground mb-1">
                    Estimated Response Time
                  </h4>
                  <p className="text-3xl font-display font-bold gradient-text">
                    &lt; 24 Hours
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
