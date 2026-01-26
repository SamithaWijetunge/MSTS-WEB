import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const ReeferRepairs = () => {
  const service = getServiceById('reefer-repairs');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default ReeferRepairs;
