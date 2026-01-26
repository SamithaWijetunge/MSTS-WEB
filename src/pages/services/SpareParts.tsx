import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const SpareParts = () => {
  const service = getServiceById('spare-parts');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default SpareParts;
