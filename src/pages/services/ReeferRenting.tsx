import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const ReeferRenting = () => {
  const service = getServiceById('reefer-renting');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default ReeferRenting;
