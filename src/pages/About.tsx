import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Building, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Shield
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/Timeline';
import { GradientMesh } from '@/components/GradientMesh';
import { useTheme } from '@/hooks/useTheme';
import abstractBg from '@/assets/abstract-bg.jpg';
import ceylineLogoLight from '@/assets/ceyline-logo-light.png';
import ceylineLogoDark from '@/assets/ceyline-logo-dark.png';
import reeferRepairsImg from '@/assets/services/reefer-repairs.jpg';
import reeferMonitoringImg from '@/assets/services/reefer-monitoring.jpg';
import vesselSurveysImg from '@/assets/services/vessel-surveys.jpg';
import cargoLogisticsImg from '@/assets/services/cargo-logistics.jpg';

const About = () => {
  const { theme } = useTheme();
  const milestones = [
    { year: '1988', title: 'Foundation', description: 'Established under Ceyline Group' },
    { year: '2000', title: 'Expansion', description: 'Extended services to Maldives' },
    { year: '2010', title: 'Technology', description: 'Introduced real-time monitoring' },
    { year: '2024', title: 'Leadership', description: 'No.1 in Sri Lanka market' },
  ];

  const values = [
    { icon: Target, title: 'Excellence', desc: 'Committed to delivering the highest quality services', color: 'from-indigo-500 to-violet-500' },
    { icon: Award, title: 'Reliability', desc: '24/7 support with industry-leading response times', color: 'from-purple-500 to-pink-500' },
    { icon: Users, title: 'Partnership', desc: 'Building long-term relationships with our clients', color: 'from-orange-500 to-amber-500' },
    { icon: Building, title: 'Innovation', desc: 'Embracing cutting-edge technology solutions', color: 'from-green-500 to-emerald-500' },
  ];

  const stats = [
    { value: '35+', label: 'Years of Excellence' },
    { value: '1000+', label: 'Clients Served' },
    { value: '50+', label: 'Expert Team' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Split Screen */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 opacity-20">
            <img src={abstractBg} alt="" className="w-full h-full object-cover" />
          </div>
          <GradientMesh />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm">Since 1988</span>
              </motion.div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                About{' '}
                <span className="relative">
                  <span className="text-accent">MSTS</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>
              </h1>
              <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-lg">
                The leader in reefer container operations & services industry in Sri Lanka, 
                offering an extensive range of services under one roof.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>

      {/* Company Overview with Timeline */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <GradientMesh className="opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Marine Survey & Technology Services{' '}
                  <span className="gradient-text">(Pvt) Ltd.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Marine Survey & Technology Services (Pvt) Ltd., (MSTS) was established in 1988 
                  under the umbrella of Ceyline Group of Companies, the most diversified shipping 
                  group in Sri Lanka. Today being the leader in reefer container operations & 
                  services industry in Sri Lanka, MSTS provides a wide range of reefer container 
                  services under one roof.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With the cutting-edge technology and specialist knowledge, MSTS offers a 
                  comprehensive & integrated end-to-end reefer container management services to 
                  world's leading shipping lines.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Global Reach</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Certified Excellence</span>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                  src={reeferRepairsImg}
                  alt="Reefer Container Repairs"
                  className="relative rounded-2xl shadow-xl object-cover h-40"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={reeferMonitoringImg}
                  alt="Reefer Monitoring"
                  className="relative rounded-2xl shadow-xl object-cover h-40"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={vesselSurveysImg}
                  alt="Vessel Surveys"
                  className="relative rounded-2xl shadow-xl object-cover h-40"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={cargoLogisticsImg}
                  alt="Cargo Logistics"
                  className="relative rounded-2xl shadow-xl object-cover h-40"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline Section */}
          <AnimatedSection className="pt-10">
            <h3 className="font-display text-2xl font-bold text-center mb-16 text-foreground">
              Our <span className="gradient-text">Journey</span>
            </h3>
            <div className="hidden lg:block py-20">
              <Timeline items={milestones} />
            </div>
            
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-20 shrink-0">
                    <span className="font-display font-bold text-2xl gradient-text">{item.year}</span>
                  </div>
                  <div className="glass rounded-xl p-4 flex-1">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission - Modern Cards */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl opacity-90" />
                <div className="relative p-8 lg:p-12 h-full">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Eye className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-primary-foreground mb-6">Vision</h3>
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">
                    To continue to be the leader in Reefer Container Management in Sri Lanka & 
                    Maldives by demonstrating superiority in dynamic quality improvements and 
                    maintaining good relations with our principals and customers.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-90" />
                <div className="relative p-8 lg:p-12 h-full">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-10 h-10 text-accent-foreground" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-accent-foreground mb-6">Mission</h3>
                  <p className="text-accent-foreground/90 leading-relaxed text-lg">
                    To motivate and develop our staff acquiring the latest knowledge and ability 
                    keeping to world class standards with the current business needs and 
                    technological advancements in the field of Reefer Container Management.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values - Animated Cards */}
      <section className="py-20 lg:py-32 relative">
        <GradientMesh className="opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" 
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  />
                  <div className="relative glass rounded-3xl p-8 text-center h-full border border-border/50 group-hover:border-primary/30 transition-colors">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ceyline Group - Feature Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src={theme === 'dark' ? ceylineLogoDark : ceylineLogoLight} 
                alt="Ceyline Group Logo" 
                className="h-24 lg:h-32 object-contain mb-6"
              />
              <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Subsidiary of{' '}
                <span className="text-accent">Ceyline Group</span>
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed text-lg mb-6">
                Ceyline Group - The most diversified marine services group in Sri Lanka. 
                Marine Survey & Technology Services (Pvt) Ltd. is a proud member of Ceyline Group, 
                which has gained the reputation for its quality, reliability and professionalism 
                over the past three decades.
              </p>
              <a href="https://www.ceyline-group.lk/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-2">
                  Visit Ceyline Group
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {['35+ Years Legacy', '20+ Companies', 'Global Presence', 'Industry Leader'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                  >
                    <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
                    <span className="font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
              <div className="relative p-10 lg:p-16 text-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Partner with Us?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
                  Get in touch with our team to discuss your reefer container service needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="xl" className="gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="glass" size="xl">
                      View Services
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

export default About;
