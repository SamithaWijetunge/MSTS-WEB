import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const CargoSurveys = () => {
  const service = getServiceById('cargo-surveys');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default CargoSurveys;
