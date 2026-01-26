import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { servicesData, getServicesByCategory } from '@/data/servicesData';

interface ServicesMegaMenuProps {
  isScrolled: boolean;
  currentPath: string;
}

export const ServicesMegaMenu = ({ isScrolled, currentPath }: ServicesMegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const reeferServices = getServicesByCategory('reefer');
  const surveyServices = getServicesByCategory('survey');
  const logisticsServices = getServicesByCategory('logistics');

  const hoveredServiceData = hoveredService 
    ? servicesData.find(s => s.id === hoveredService) 
    : reeferServices[0];

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredService(null);
      }}
    >
      {/* Trigger */}
      <Link
        to="/services"
        className="relative px-4 py-2 group flex items-center gap-1"
      >
        <span
          className={`text-sm font-semibold transition-colors drop-shadow-sm ${
            isServicesActive
              ? 'text-accent'
              : 'text-foreground hover:text-accent'
          }`}
        >
          Services
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } ${isServicesActive ? 'text-accent' : 'text-foreground'}`}
        />
        <motion.span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent to-mint rounded-full"
          initial={{ width: 0 }}
          animate={{
            width: isServicesActive ? '60%' : 0,
          }}
          whileHover={{ width: '60%' }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] inset-x-0 pt-4 px-4 z-[60]"
          >
            <div className="mx-auto w-full max-w-[900px] glass rounded-2xl border border-border/50 shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="grid grid-cols-12 gap-0">
                {/* Service Categories */}
                <div className="col-span-8 p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Reefer Services */}
                    <div>
                      <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                        Reefer Container
                      </h3>
                      <ul className="space-y-1">
                        {reeferServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.li
                              key={service.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                to={service.path}
                                onMouseEnter={() => setHoveredService(service.id)}
                                className="group flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  {service.shortTitle}
                                </span>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Survey Services */}
                    <div>
                      <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                        Survey Services
                      </h3>
                      <ul className="space-y-1">
                        {surveyServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.li
                              key={service.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 + 0.1 }}
                            >
                              <Link
                                to={service.path}
                                onMouseEnter={() => setHoveredService(service.id)}
                                className="group flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  {service.shortTitle}
                                </span>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>

                      {/* Logistics Services */}
                      <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4 mt-6">
                        Logistics & Specialized
                      </h3>
                      <ul className="space-y-1">
                        {logisticsServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.li
                              key={service.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 + 0.2 }}
                            >
                              <Link
                                to={service.path}
                                onMouseEnter={() => setHoveredService(service.id)}
                                className="group flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  {service.shortTitle}
                                </span>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                          Quick Links
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/quote"
                              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              <ArrowRight className="w-4 h-4" />
                              Request a Quote
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              <ArrowRight className="w-4 h-4" />
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link
                        to="/services"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="col-span-4 relative overflow-hidden min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {hoveredServiceData && (
                      <motion.div
                        key={hoveredServiceData.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={hoveredServiceData.image}
                          alt={hoveredServiceData.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {hoveredServiceData.shortTitle}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {hoveredServiceData.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
