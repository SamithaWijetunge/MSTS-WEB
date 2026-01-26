import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const BondedWarehouse = () => {
  const service = getServiceById('bonded-warehouse');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default BondedWarehouse;
