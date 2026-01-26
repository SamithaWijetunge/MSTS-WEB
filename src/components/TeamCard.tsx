import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export const TeamCard = ({ name, role, image, bio, linkedin, email }: TeamCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-80 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
            <h3 className="font-display font-bold text-xl">{name}</h3>
            <p className="text-primary-foreground/80">{role}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">{name}</h3>
            <p className="text-accent font-medium mb-4">{role}</p>
            <p className="text-muted-foreground text-sm">{bio}</p>
          </div>
          
          <div className="flex gap-3">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
