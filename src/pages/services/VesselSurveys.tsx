import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const VesselSurveys = () => {
  const service = getServiceById('vessel-surveys');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default VesselSurveys;
