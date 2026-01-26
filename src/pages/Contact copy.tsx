import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  Globe,
  Sparkles
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientMesh } from '@/components/GradientMesh';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import abstractBg from '@/assets/abstract-bg.jpg';

const contactDetails = [
  {
    title: 'Technical Department',
    contacts: [
      { email: 'thushara@msts.lk', phone: '0777 562 802' },
      { email: 'upali@msts.lk', phone: '077 364 7826' },
    ],
  },
  {
    title: 'Renting Department',
    contacts: [
      { email: 'jayalathge@msts.lk', phone: '0777 562 807' },
    ],
  },
  {
    title: 'Survey Department',
    contacts: [
      { email: 'dulmini@msts.lk', phone: '074 109 9269' },
      { email: 'senavi@msts.lk', phone: '077 392 5824' },
    ],
  },
  {
    title: 'PTI Department',
    contacts: [
      { email: 'bandula@msts.lk', phone: '077 756 2803' },
    ],
  },
  {
    title: 'MSTS Maldives',
    contacts: [
      { email: 'thamiza@msts.lk', phone: '076 037 2341' },
      { email: 'info@msts-maldives.com', phone: '+960 738 0302' },
    ],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us! We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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

        {/* Animated Globe */}
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <Globe className="w-96 h-96 text-white/30" strokeWidth={0.5} />
        </motion.div>

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
              <span className="text-primary-foreground/90 text-sm">Get in Touch</span>
            </motion.div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Contact{' '}
              <span className="relative inline-block">
                <span className="text-accent">Us</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Drop us a line or call us. We're more than happy to assist you 
              with world-class solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach out to the right department for faster assistance
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactDetails.map((detail, index) => (
              <AnimatedSection key={detail.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="relative glass rounded-2xl p-6 h-full border border-border/50 group-hover:border-primary/30 transition-colors">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {detail.title}
                    </h3>
                    <div className="space-y-4">
                      {detail.contacts.map((contact, contactIndex) => (
                        <div key={contactIndex} className="space-y-2">
                          <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/link"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover/link:bg-accent transition-colors">
                              <Mail className="w-5 h-5" />
                            </div>
                            {contact.email}
                          </a>
                          <a
                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/link"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">
                              <Phone className="w-5 h-5" />
                            </div>
                            {contact.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}

            {/* Address Card */}
            <AnimatedSection delay={0.5}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-90" />
                <div className="relative p-6 h-full text-primary-foreground">
                  <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Head Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                      <span>
                        Ceyline Building, 1 Alfred House Ave,
                        <br />Colombo 00300, Sri Lanka
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 shrink-0" />
                      24/7 Service Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Have a question about our services? Fill out the form and our team 
                  will get back to you within 24 hours with a detailed response.
                </p>
                
                <div className="space-y-4 pt-4">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-5 glass rounded-2xl border border-border/50"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">Quick Response</h4>
                      <p className="text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-5 glass rounded-2xl border border-border/50"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                      <Phone className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">24/7 Support</h4>
                      <p className="text-muted-foreground">Round-the-clock assistance</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <motion.form 
                onSubmit={handleSubmit} 
                className="glass rounded-3xl p-8 lg:p-10 space-y-6 border border-border/50"
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
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+94 XX XXX XXXX"
                      className="bg-background h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="bg-background h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    className="bg-background"
                  />
                </div>

                <Button type="submit" variant="quote" size="xl" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9023055692385!2d79.85153231477282!3d6.905610794997826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963dc0df6fd%3A0xe9fa0b0d87b47d8f!2sCeyline%20Building!5e0!3m2!1sen!2slk!4v1706000000000!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[50%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
