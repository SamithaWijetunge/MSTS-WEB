import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  Upload, 
  Send,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Heart,
  Sparkles
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientMesh } from '@/components/GradientMesh';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import abstractBg from '@/assets/abstract-bg.jpg';

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Excellent career development opportunities', color: 'from-indigo-500 to-violet-500' },
  { icon: Award, title: 'Competitive Pay', desc: 'Attractive remuneration packages', color: 'from-purple-500 to-pink-500' },
  { icon: Users, title: 'Great Team', desc: 'Collaborative and supportive environment', color: 'from-orange-500 to-amber-500' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible schedules when possible', color: 'from-green-500 to-emerald-500' },
];

const jobOpenings: Array<{
  title: string;
  type: string;
  age: string;
  location: string;
  requirements: string[];
  advantages: string[];
}> = [];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest! We'll review your application and get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm">Join Our Team</span>
            </motion.div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              <span className="relative inline-block">
                <span className="text-accent">Careers</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>{' '}
              at MSTS
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              If you are collaborative, creative, skilled, daring and love the shipping 
              industry, MSTS is the right place to improve your career development.
            </p>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute right-10 bottom-10 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-4xl font-display font-bold text-accent">50+</div>
            <div className="text-primary-foreground/70 text-sm">Team Members</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a team that values growth, innovation, and work-life balance
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
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
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-muted-foreground">
              Explore opportunities to join our growing team
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <AnimatedSection key={job.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                        <div>
                          <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Sparkles className="w-3 h-3" />
                            New Opening
                          </motion.div>
                          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                              <Briefcase className="w-4 h-4 text-primary" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                              <Clock className="w-4 h-4 text-accent" />
                              {job.age}
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                              <MapPin className="w-4 h-4 text-secondary" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-primary rounded-full" />
                            Requirements
                          </h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req) => (
                              <motion.li 
                                key={req} 
                                className="flex items-start gap-3 text-muted-foreground"
                                whileHover={{ x: 5 }}
                              >
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                                {req}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-accent rounded-full" />
                            Added Advantages
                          </h4>
                          <ul className="space-y-3">
                            {job.advantages.map((adv) => (
                              <motion.li 
                                key={adv} 
                                className="flex items-start gap-3 text-muted-foreground"
                                whileHover={{ x: 5 }}
                              >
                                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                                {adv}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-3xl p-12 border border-border/50 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center"
                  >
                    <Briefcase className="w-10 h-10 text-muted-foreground" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    No Current Openings
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    We don't have any open positions at the moment, but we're always looking for talented individuals. 
                    Feel free to submit your CV below for future opportunities.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Check back soon for new opportunities
                  </div>
                </motion.div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-32 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Apply <span className="gradient-text">Here</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill this form and submit your CV for current openings or future opportunities.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <motion.form 
                onSubmit={handleSubmit} 
                className="glass rounded-3xl p-8 lg:p-12 space-y-6 border border-border/50"
                whileHover={{ y: -5 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="bg-background h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-background h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+94 XX XXX XXXX"
                      className="bg-background h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Position Applying For
                    </label>
                    <Input
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Position title"
                      className="bg-background h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Yourself
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself, your experience, and why you want to join MSTS..."
                    rows={5}
                    className="bg-background"
                  />
                </div>

                <motion.div 
                  className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-1">
                    Drag and drop your CV here
                  </p>
                  <p className="text-muted-foreground text-sm">
                    or click to browse (doc, docx, pdf)
                  </p>
                </motion.div>

                <Button type="submit" variant="quote" size="xl" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Submit Application
                </Button>
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
