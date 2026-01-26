import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative">
      {/* Horizontal line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />

      <div className="relative flex justify-between items-center">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          >
            {/* Dot */}
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary border-4 border-background shadow-lg z-10"
              whileHover={{ scale: 1.3 }}
            />

            {/* Content - alternating top/bottom */}
            <div
              className={`absolute ${
                index % 2 === 0 ? 'bottom-full mb-6' : 'top-full mt-6'
              } text-center w-32`}
            >
              <motion.div
                className="glass rounded-xl p-4"
                whileHover={{ y: index % 2 === 0 ? -5 : 5 }}
              >
                <span className="text-2xl font-display font-bold gradient-text">
                  {item.year}
                </span>
                <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
