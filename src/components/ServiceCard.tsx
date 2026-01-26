import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-mint/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass rounded-2xl p-6 lg:p-8 h-full border border-border/50 hover:border-accent/50 transition-all duration-500 shine-effect">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-mint flex items-center justify-center mb-5 shadow-lg shadow-accent/30"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-mint to-accent rounded-b-2xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};
