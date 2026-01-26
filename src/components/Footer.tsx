import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Anchor,
  ArrowRight,
  Clock,
  Snowflake
} from 'lucide-react';
import { Button } from './ui/button';
import maldivesHvacHero from '@/assets/maldives-hvac-hero.jpg';


const footerLinks = {
  services: [
    { name: 'Reefer Container Repairs', path: '/services' },
    { name: 'Warranty Repairs', path: '/services' },
    { name: 'Pre Trip Inspections', path: '/services' },
    { name: 'Container Monitoring', path: '/services' },
    { name: 'Container Renting', path: '/services' },
    { name: 'Marine Surveys', path: '/services' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
};

export const Footer = () => {

  // Get current time in Sri Lanka
  const sriLankaTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Colombo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
      <footer className="relative text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={maldivesHvacHero} 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/65 to-primary/80" />
        </div>


        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Top CTA Section */}
          <div className="py-12 border-b border-white/15">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Cold Chain Excellence</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                  Ready to get started?
                </h3>
                <p className="text-primary-foreground/70">
                  Get your questions answered by our experts
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button variant="hero" size="xl" className="gap-2 glow-hover">
                    Request Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+94114511080">
                  <Button variant="glass" size="xl" className="gap-2">
                    <Phone className="w-5 h-5" />
                    +94 114 511 080
                  </Button>
                </a>
              </div>
            </div>
          </div>


          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-mint flex items-center justify-center shadow-lg shadow-accent/30"
                >
                  <Anchor className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl">MSTS</span>
                  <span className="text-[10px] text-primary-foreground/60 tracking-wider">
                    MARINE SURVEY & TECH
                  </span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Marine Survey & Technology Services (Pvt) Ltd. - The leader in reefer 
                container operations & marine survey services in Sri Lanka since 1988.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/MSTSReeferServices' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/109811131/admin/dashboard/' },
                  { Icon: Instagram, href: 'https://www.instagram.com/msts_maldives/' },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors group border border-white/10"
                  >
                    <Icon className="w-5 h-5 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/70 text-sm">
                    Marine Survey & Technology Services (Pvt) Ltd,
                    <br />Colombo, Sri Lanka
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+94114511080"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    +94 11 4511 080 to 86
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:thushara@msts.lk"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    thushara@msts.lk
                  </a>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  Sri Lanka Time: {sriLankaTime}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Marine Survey & Technology Services (Pvt) Ltd. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
              A subsidiary of 
              <a 
                href="https://www.ceyline-group.lk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Ceyline Group
              </a>
            </p>
          </div>
        </div>
      </footer>
  );
};
