import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const FruitsVegetablesExports = () => {
  const service = getServiceById('fruits-vegetables');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default FruitsVegetablesExports;
