import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const CargoLogistics = () => {
  const service = getServiceById('cargo-logistics');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default CargoLogistics;
