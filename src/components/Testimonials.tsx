import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Captain Ahmed Hassan',
    role: 'Fleet Manager',
    company: 'Gulf Maritime Lines',
    content: 'MSTS has been our go-to partner for reefer container maintenance for over 5 years. Their 24/7 support and expert technicians have saved us countless times during critical shipments.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Pacific Cold Chain',
    content: 'The quality of service and quick turnaround time from MSTS is unmatched. They handle our entire fleet with precision and care. Highly recommended for any shipping company.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Mohammed Al-Rashid',
    role: 'CEO',
    company: 'Falcon Shipping Co.',
    content: 'Partnering with MSTS was one of the best decisions we made. Their expertise in reefer technology and commitment to quality has helped us maintain perfect cargo conditions.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Logistics Manager',
    company: 'TransGlobal Shipping',
    content: 'From emergency repairs to routine maintenance, MSTS delivers excellence every time. Their team is professional, knowledgeable, and always available when we need them.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/20 to-muted/40" />
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [-50, 0, -50] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [50, 0, 50] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-mint/15 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Client Testimonials</span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by shipping companies worldwide for our exceptional service
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="glow-card p-8 lg:p-12 h-full flex flex-col items-center text-center border border-accent/20">
                  {/* Quote icon */}
                  <div className="absolute top-6 left-6 opacity-20">
                    <Quote className="w-20 h-20 text-accent" />
                  </div>

                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="relative mb-6"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg shadow-accent/20">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-gradient-to-br from-accent to-mint text-white rounded-full p-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg lg:text-xl text-foreground/90 mb-8 max-w-2xl leading-relaxed">
                    "{current.content}"
                  </blockquote>

                  {/* Author info */}
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg">
                      {current.name}
                    </h4>
                    <p className="text-accent font-medium">{current.role}</p>
                    <p className="text-muted-foreground text-sm">{current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg z-10 hover-lift"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg z-10 hover-lift"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-10'
                    : 'bg-muted-foreground/30 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
