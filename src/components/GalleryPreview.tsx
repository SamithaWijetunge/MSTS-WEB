import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './ui/button';

// Gallery Images
import containerYard1 from '@/assets/gallery/container-yard-1.jpg';
import portWalkway from '@/assets/gallery/port-walkway.jpg';
import reeferCorridor1 from '@/assets/gallery/reefer-corridor-1.jpg';
import mscContainerYard from '@/assets/gallery/msc-container-yard.jpg';
import hapagLloydTerminal from '@/assets/gallery/hapag-lloyd-terminal.jpg';
import maerskContainers from '@/assets/gallery/maersk-containers.jpg';
import reeferMaintenance from '@/assets/gallery/reefer-maintenance.jpg';
import reeferCorridor2 from '@/assets/gallery/reefer-corridor-2.jpg';

const galleryImages = [
  {
    id: 1,
    src: hapagLloydTerminal,
    alt: 'Hapag-Lloyd Container Terminal Operations',
    size: 'large',
    category: 'Port Operations',
    color: 'from-primary/80 to-blue-600/80',
  },
  {
    id: 2,
    src: maerskContainers,
    alt: 'Maersk Reefer Container Stack',
    size: 'medium',
    category: 'Container Terminal',
    color: 'from-cyan-500/80 to-teal-600/80',
  },
  {
    id: 3,
    src: containerYard1,
    alt: 'Reefer Container Stacking Operations',
    size: 'large',
    category: 'Container Yard',
    color: 'from-orange-400/80 to-red-500/80',
  },
  {
    id: 4,
    src: portWalkway,
    alt: 'Port Reefer Inspection Walkway',
    size: 'medium',
    category: 'Port Operations',
    color: 'from-green-400/80 to-emerald-600/80',
  },
  {
    id: 5,
    src: reeferMaintenance,
    alt: 'Reefer Control Panel Maintenance',
    size: 'medium',
    category: 'Repairs & Maintenance',
    color: 'from-primary/80 to-blue-600/80',
  },
  {
    id: 6,
    src: mscContainerYard,
    alt: 'MSC Container Terminal Yard',
    size: 'small',
    category: 'Container Yard',
    color: 'from-blue-400/80 to-indigo-600/80',
  },
  {
    id: 7,
    src: reeferCorridor1,
    alt: 'Reefer Unit Service Corridor',
    size: 'small',
    category: 'Reefer Facility',
    color: 'from-teal-400/80 to-cyan-600/80',
  },
  {
    id: 8,
    src: reeferCorridor2,
    alt: 'Reefer Monitoring Corridor',
    size: 'small',
    category: 'Reefer Facility',
    color: 'from-amber-400/80 to-orange-600/80',
  },
];

export const GalleryPreview = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-mint/10 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-mint/15 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Work</span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See our expertise in action through reefer container operations we manage worldwide
          </p>
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`
                relative group overflow-hidden rounded-2xl border-glow
                ${image.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${image.size === 'medium' ? 'col-span-1 row-span-2 lg:row-span-1' : ''}
                ${image.size === 'small' ? 'col-span-1' : ''}
              `}
            >
              <div
                className="relative h-48 lg:h-64 w-full shine-effect"
                style={{ height: image.size === 'large' ? '100%' : undefined }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category-colored overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {image.category}
                </motion.div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-medium text-sm lg:text-base text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {image.alt}
                  </p>
                </div>

                {/* Glow border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-accent/50 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link to="/gallery">
            <Button size="lg" className="group gap-2 hover-lift">
              <ImageIcon className="w-5 h-5" />
              View Full Gallery
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
