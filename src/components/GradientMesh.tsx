import { motion } from 'framer-motion';

interface GradientMeshProps {
  className?: string;
}

export const GradientMesh = ({ className = '' }: GradientMeshProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
        animate={{
          x: ['-25%', '25%', '-25%'],
          y: ['-25%', '25%', '-25%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '-20%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-secondary/30 to-primary/20 blur-3xl"
        animate={{
          x: ['25%', '-25%', '25%'],
          y: ['25%', '-25%', '25%'],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '-20%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/20 to-secondary/20 blur-3xl"
        animate={{
          x: ['0%', '30%', '0%'],
          y: ['30%', '0%', '30%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '40%', left: '30%' }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
