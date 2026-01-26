import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Anchor, Ship, Container, ThermometerSnowflake, Waves, Fish, Apple, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';
import heroVideo2 from '@/assets/hero-video-2.mp4';
import heroVideo3 from '@/assets/hero-video-3.mp4';
import { GradientMesh } from './GradientMesh';

const heroSlides = [
  {
    title: 'Best Reefer Container Services',
    subtitle: 'in Sri Lanka',
    description: 'The most innovative reefer container service provider with industry leading expertise, resources and reliability.',
    icon: Container,
  },
  {
    title: 'Global Standard Marine Surveys',
    subtitle: 'Audits & Certifications',
    description: 'We offer a broad range of marine surveys, audits & certifications to promote safety and operational efficiency.',
    icon: Ship,
  },
  {
    title: 'Leader in Reefer Operations',
    subtitle: '& Marine Surveys',
    description: 'The cutting-edge technology and specialist knowledge has made us the No. 01 choice for reefer container operations.',
    icon: ThermometerSnowflake,
  },
];

const videos = [heroVideo, heroVideo2, heroVideo3];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  // Slide auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Initialize first video
  useEffect(() => {
    const video1 = videoRef1.current;
    if (video1) {
      video1.src = videos[0];
      video1.load();
      video1.play().catch(() => {});
    }
  }, []);

  // Preload next video in inactive player
  useEffect(() => {
    const nextVideoIndex = (currentVideo + 1) % videos.length;
    const inactiveRef = activePlayer === 1 ? videoRef2 : videoRef1;
    
    if (inactiveRef.current) {
      inactiveRef.current.src = videos[nextVideoIndex];
      inactiveRef.current.load();
    }
  }, [currentVideo, activePlayer]);

  const handleVideoEnd = useCallback(() => {
    const nextVideoIndex = (currentVideo + 1) % videos.length;
    
    // Switch to the other player (which has the next video preloaded)
    setActivePlayer(prev => prev === 1 ? 2 : 1);
    setCurrentVideo(nextVideoIndex);
    
    // Start playing the now-active video
    const nextRef = activePlayer === 1 ? videoRef2 : videoRef1;
    if (nextRef.current) {
      nextRef.current.play().catch(() => {});
    }
  }, [currentVideo, activePlayer]);

  const handleVideoError = useCallback(() => {
    // Skip to next video if current fails
    handleVideoEnd();
  }, [handleVideoEnd]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <GradientMesh className="z-0" />

      {/* Dual Video Background - Seamless Transitions */}
      <div className="absolute inset-0">
        {/* Video Player 1 */}
        <video
          ref={videoRef1}
          muted
          playsInline
          preload="auto"
          onEnded={activePlayer === 1 ? handleVideoEnd : undefined}
          onError={activePlayer === 1 ? handleVideoError : undefined}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700"
          style={{ opacity: activePlayer === 1 ? 1 : 0 }}
        />
        
        {/* Video Player 2 */}
        <video
          ref={videoRef2}
          muted
          playsInline
          preload="auto"
          onEnded={activePlayer === 2 ? handleVideoEnd : undefined}
          onError={activePlayer === 2 ? handleVideoError : undefined}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700"
          style={{ opacity: activePlayer === 2 ? 1 : 0 }}
        />
        
        {/* Rich Blue Gradient Overlays - Reduced opacity to show video */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-primary/45 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-mint/15" />
      </div>

      {/* Animated Particles - More colorful */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2.5 h-2.5 bg-accent/50' : 
              i % 4 === 1 ? 'w-2 h-2 bg-mint/40' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-white/40' : 
              'w-1 h-1 bg-secondary/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -180],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes - Enhanced with richer colors */}
      <motion.div
        className="absolute top-1/4 right-10 w-44 h-44 border-2 border-accent/40 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/4 right-10 w-36 h-36 border border-mint/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-32 h-32 border-2 border-accent/30"
        animate={{ rotate: -360, borderRadius: ['20%', '50%', '20%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-24 h-24 border border-mint/25"
        style={{ transform: 'rotate(45deg)' }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Glowing orbs - Rich blue colors */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-accent/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-mint/20 rounded-full blur-3xl"
        animate={{ scale: [1.5, 1, 1.5], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      {/* Floating food icons */}
      <motion.div
        className="absolute top-1/2 right-[12%] text-accent/40"
        animate={{ y: [-15, 15, -15], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Fish className="w-14 h-14" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[15%] text-mint/35"
        animate={{ y: [10, -15, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Apple className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-[18%] text-white/25"
        animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Snowflake className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[20%] text-accent/30"
        animate={{ y: [15, -10, 15], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Waves className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute top-2/3 right-[25%] text-white/20"
        animate={{ y: [10, -10, 10], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Anchor className="w-10 h-10" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex"
          >
            <div className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white">Keeping Your Cargo Fresh</span>
            </div>
          </motion.div>

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 inline-flex"
          >
            <div className="w-22 h-22 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Anchor className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20"
                >
                  {(() => {
                    const Icon = heroSlides[currentSlide].icon;
                    return <Icon className="w-8 h-8 text-primary-foreground" />;
                  })()}
                </motion.div>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-primary-foreground leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block text-glow"
                >
                  {heroSlides[currentSlide].title}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/services">
              <Button variant="hero" size="xl" className="gap-2 min-w-[200px] glow-hover">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="glass" size="xl" className="gap-2 min-w-[200px]">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </motion.button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-10 bg-accent'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </motion.button>
          </div>
        </div>
      </div>

    </section>
  );
};
