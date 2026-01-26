import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MasonryGallery } from '@/components/MasonryGallery';
import { GradientMesh } from '@/components/GradientMesh';
import reeferContainers from '@/assets/reefer-containers.jpg';

// Gallery Images
import containerYard1 from '@/assets/gallery/container-yard-1.jpg';
import portWalkway from '@/assets/gallery/port-walkway.jpg';
import reeferCorridor1 from '@/assets/gallery/reefer-corridor-1.jpg';
import mscContainerYard from '@/assets/gallery/msc-container-yard.jpg';
import hapagLloydTerminal from '@/assets/gallery/hapag-lloyd-terminal.jpg';
import maerskContainers from '@/assets/gallery/maersk-containers.jpg';
import reeferMaintenance from '@/assets/gallery/reefer-maintenance.jpg';
import reeferCorridor2 from '@/assets/gallery/reefer-corridor-2.jpg';
// New images
import containerInspection from '@/assets/gallery/container-inspection.jpg';
import craneShipArrival from '@/assets/gallery/crane-ship-arrival.jpg';
import gantryCranes from '@/assets/gallery/gantry-cranes.jpg';
import craneOperations from '@/assets/gallery/crane-operations.jpg';
import daikinTraining1 from '@/assets/gallery/daikin-training-1.jpg';
import teamTraining from '@/assets/gallery/team-training.jpg';
import daikinTraining2 from '@/assets/gallery/daikin-training-2.jpg';
import daikinTraining3 from '@/assets/gallery/daikin-training-3.jpg';
// Additional images
import reeferContainerUnit from '@/assets/gallery/reefer-container-unit.jpg';
import maerskContainerHandling from '@/assets/gallery/maersk-container-handling.jpg';
import thermokingReeferStack from '@/assets/gallery/thermoking-reefer-stack.jpg';
import mstsCarrierPanel from '@/assets/gallery/msts-carrier-panel.jpg';

const categories = [
  'All',
  'Container Yard',
  'Port Operations',
  'Reefer Facility',
  'Repairs & Maintenance',
  'Factory Trainings',
];

const galleryImages = [
  { src: containerYard1, category: 'Container Yard', title: 'Reefer Container Stacking Operations' },
  { src: portWalkway, category: 'Port Operations', title: 'Port Reefer Inspection Walkway' },
  { src: reeferCorridor1, category: 'Reefer Facility', title: 'Reefer Unit Service Corridor' },
  { src: mscContainerYard, category: 'Container Yard', title: 'MSC Container Terminal Yard' },
  { src: hapagLloydTerminal, category: 'Port Operations', title: 'Hapag-Lloyd Container Stack' },
  { src: maerskContainers, category: 'Port Operations', title: 'Maersk Reefer Container Operations' },
  { src: reeferMaintenance, category: 'Repairs & Maintenance', title: 'Reefer Control Panel Maintenance' },
  { src: reeferCorridor2, category: 'Reefer Facility', title: 'Reefer Monitoring Corridor' },
  // New images
  { src: containerInspection, category: 'Repairs & Maintenance', title: 'Container Inspection & Repairs' },
  { src: craneShipArrival, category: 'Port Operations', title: 'Gantry Crane Ship Arrival' },
  { src: gantryCranes, category: 'Port Operations', title: 'Port Gantry Cranes Delivery' },
  { src: craneOperations, category: 'Port Operations', title: 'Crane Lifting Operations' },
  { src: daikinTraining1, category: 'Factory Trainings', title: 'Daikin Training Certificate Award' },
  { src: teamTraining, category: 'Factory Trainings', title: 'MSTS Team Training Session' },
  { src: daikinTraining2, category: 'Factory Trainings', title: 'Daikin Factory Training Certification' },
  { src: daikinTraining3, category: 'Factory Trainings', title: 'Daikin Technical Training Award' },
  // Additional images
  { src: reeferContainerUnit, category: 'Reefer Facility', title: 'Reefer Container Unit' },
  { src: maerskContainerHandling, category: 'Container Yard', title: 'Maersk Container Handling Operations' },
  { src: thermokingReeferStack, category: 'Reefer Facility', title: 'Thermo King Reefer Stack' },
  { src: mstsCarrierPanel, category: 'Repairs & Maintenance', title: 'MSTS Branded Carrier Control Panel' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryCount = (category: string) => {
    if (category === 'All') return galleryImages.length;
    return galleryImages.filter(img => img.category === category).length;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={reeferContainers} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <GradientMesh />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm">{galleryImages.length}+ Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Projects{' '}
              <span className="relative inline-block">
                <span className="text-accent">Gallery</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary-foreground/80 text-xl max-w-2xl"
            >
              This projects gallery gives you an overview of our work in the areas of 
              reefer container operations & survey services in Sri Lanka.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 relative">
        <GradientMesh className="opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'text-primary-foreground shadow-lg'
                      : 'glass hover:bg-accent/20 text-foreground'
                  }`}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {category}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      selectedCategory === category 
                        ? 'bg-white/20' 
                        : 'bg-muted'
                    }`}>
                      {categoryCount(category)}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Masonry Gallery */}
          <MasonryGallery images={galleryImages} selectedCategory={selectedCategory} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
