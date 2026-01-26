import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const MaldivesServices = () => {
  const service = getServiceById('maldives');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default MaldivesServices;
