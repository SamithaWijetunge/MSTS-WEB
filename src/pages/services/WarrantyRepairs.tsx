import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const WarrantyRepairs = () => {
  const service = getServiceById('warranty-repairs');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default WarrantyRepairs;
