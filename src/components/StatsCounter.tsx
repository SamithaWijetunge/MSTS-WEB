import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem = ({ value, label, suffix = '', prefix = '' }: StatItemProps) => {
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl gradient-text mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm lg:text-base uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export const StatsCounter = () => {
  const stats = [
    { value: 37, label: 'Years of Excellence', suffix: '+' },
    { value: 500, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Expert Technicians', suffix: '+' },
    { value: 50, label: 'Global Partners', suffix: '+' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};
