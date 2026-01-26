import { motion } from 'framer-motion';

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export const WaveDivider = ({ flip = false, className = '' }: WaveDividerProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-24"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-muted/30"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,40 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,80 C480,40 960,100 1440,60 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-muted/20"
          animate={{
            d: [
              "M0,80 C480,40 960,100 1440,60 L1440,120 L0,120 Z",
              "M0,60 C480,100 960,40 1440,80 L1440,120 L0,120 Z",
              "M0,80 C480,40 960,100 1440,60 L1440,120 L0,120 Z"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
};
