import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Ship, Users, Globe, Award, Anchor } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import reeferImage from '@/assets/reefer-containers.jpg';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  delay: number;
}

const StatItem = ({ value, label, suffix = '', icon: Icon, delay }: StatItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  // Calculate progress for circular ring (0 to 1)
  const progress = count / value;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="glass rounded-3xl p-8 text-center relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 animate-glow-pulse">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Circular progress ring */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-border/50"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: isVisible ? strokeDashoffset : circumference,
              }}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: isVisible ? strokeDashoffset : circumference }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
          </motion.div>
        </div>

        {/* Value */}
        <motion.div 
          className="font-display font-bold text-4xl lg:text-5xl gradient-text mb-2"
          key={count}
        >
          {count}{suffix}
        </motion.div>

        {/* Label */}
        <div className="text-muted-foreground text-sm lg:text-base uppercase tracking-wider font-medium">
          {label}
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export const EnhancedStats = () => {
  const stats = [
    { value: 38, label: 'Years of Excellence', suffix: '+', icon: Award },
    { value: 4, label: 'Main Brands', suffix: '', icon: Ship },
    { value: 40, label: 'Trained Technicians', suffix: '+', icon: Users },
    { value: 50, label: 'Global Partners', suffix: '+', icon: Globe },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={reeferImage}
          alt="Reefer containers background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated wave background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-30"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
            fill="url(#wave-gradient)"
            animate={{
              d: [
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
                "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,40 L1440,120 L0,120 Z",
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles - more colorful */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3 bg-accent/30' : 
              i % 3 === 1 ? 'w-2 h-2 bg-primary/25' : 
              'w-2 h-2 bg-secondary/20'
            }`}
            style={{
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}

        {/* Floating anchor icons */}
        <motion.div
          className="absolute top-20 right-20 text-primary/10"
          animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Anchor className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-accent/10"
          animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Ship className="w-16 h-16" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
