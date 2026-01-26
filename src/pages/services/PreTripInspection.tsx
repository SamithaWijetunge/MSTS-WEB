import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const PreTripInspection = () => {
  const service = getServiceById('pti');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default PreTripInspection;
