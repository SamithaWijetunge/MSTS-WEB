import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const VesselLogistics = () => {
  const service = getServiceById('vessel-logistics');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default VesselLogistics;
