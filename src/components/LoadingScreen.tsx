import { motion } from 'framer-motion';
import mstsLogo from '@/assets/msts-logo.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${
        isLoading ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, hsl(210, 100%, 12%) 0%, hsl(217, 91%, 20%) 50%, hsl(199, 89%, 30%) 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Wave animation at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg
            viewBox="0 0 1440 120"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.05)"
              animate={{
                d: [
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
                  "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,40 L1440,120 L0,120 Z",
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
          <svg
            viewBox="0 0 1440 120"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,60 1440,40 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.03)"
              animate={{
                d: [
                  "M0,40 C360,0 720,80 1080,40 C1260,20 1380,60 1440,40 L1440,120 L0,120 Z",
                  "M0,60 C360,100 720,20 1080,80 C1260,60 1380,40 1440,80 L1440,120 L0,120 Z",
                  "M0,40 C360,0 720,80 1080,40 C1260,20 1380,60 1440,40 L1440,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
          </svg>
        </div>
      </div>

      {/* Logo Container */}
      <div className="relative">
        {/* Rotating ring */}
        <motion.div
          className="absolute -inset-8 rounded-full border-2 border-dashed border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Logo */}
        <motion.img
          src={mstsLogo}
          alt="MSTS Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 0.5,
            },
          }}
        />
      </div>

      {/* Company Name */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wider">
          MSTS
        </h1>
        <p className="text-white/60 text-sm md:text-base tracking-widest mt-1">
          MARINE SURVEY & TECHNOLOGY SERVICES
        </p>
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="mt-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        <span className="text-white/50 text-sm ml-2">Loading...</span>
      </motion.div>
    </motion.div>
  );
};
