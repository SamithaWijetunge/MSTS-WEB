import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Send, ChevronDown, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/hooks/useTheme';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import mstsLogo from '@/assets/msts-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/MSTSReeferServices', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/109811131/admin/dashboard/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/msts_maldives/', label: 'Instagram' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Mobile services list
  const mobileServices = [
    { name: 'Repairs & Maintenance', path: '/services/reefer-repairs' },
    { name: 'Warranty Repairs', path: '/services/warranty-repairs' },
    { name: 'Spare Parts Supply', path: '/services/spare-parts' },
    { name: 'Pre Trip Inspections', path: '/services/pti' },
    { name: 'Container Monitoring', path: '/services/monitoring' },
    { name: 'Reefer Surveys', path: '/services/reefer-surveys' },
    { name: 'Maldives Resort Services', path: '/services/maldives' },
    { name: 'Container Renting', path: '/services/reefer-renting' },
    { name: 'Cargo Surveys', path: '/services/cargo-surveys' },
    { name: 'Vessel Surveys', path: '/services/vessel-surveys' },
    { name: 'Cargo Logistics', path: '/services/cargo-logistics' },
    { name: 'Vessel Logistics', path: '/services/vessel-logistics' },
    { name: 'Bonded Warehouse', path: '/services/bonded-warehouse' },
    { name: 'F&V Exports', path: '/services/fruits-vegetables' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-xl py-2'
          : 'bg-primary/30 backdrop-blur-md shadow-lg py-3'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={mstsLogo}
                alt="MSTS Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-lg"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                MSTS
              </span>
              <span className="text-[9px] text-muted-foreground tracking-wider">
                MARINE SURVEY & TECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group"
              >
                <span
                  className={`text-sm font-semibold transition-colors drop-shadow-sm ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: location.pathname === link.path ? '60%' : 0,
                  }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}

            {/* Services Mega Menu */}
            <ServicesMegaMenu isScrolled={isScrolled} currentPath={location.pathname} />

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group"
              >
                <span
                  className={`text-sm font-semibold transition-colors drop-shadow-sm ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: location.pathname === link.path ? '60%' : 0,
                  }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-accent/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-border/50" />

            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-muted hover:bg-accent/20 transition-colors border border-border/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            <Link to="/quote">
              <Button variant="quote" size="lg" className="gap-2 glow-hover">
                <Send className="w-4 h-4" />
                Request Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted border border-border/50"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-muted border border-border/50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden border border-accent/20"
          >
            <div className="p-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.slice(0, 2).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-accent to-mint text-white'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                    location.pathname.startsWith('/services')
                      ? 'bg-gradient-to-r from-accent to-mint text-white'
                      : 'hover:bg-muted'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 space-y-1 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm rounded-lg text-accent font-semibold hover:bg-muted"
                      >
                        All Services
                      </Link>
                      {mobileServices.map((service, idx) => (
                        <motion.div
                          key={service.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.02 }}
                        >
                          <Link
                            to={service.path}
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path
                                ? 'bg-accent/20 text-accent'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(2).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-accent to-mint text-white'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-center justify-center gap-4 py-4 border-t border-border/50"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Link to="/quote" className="block">
                  <Button variant="quote" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Request Free Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
