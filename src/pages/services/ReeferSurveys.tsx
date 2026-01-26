import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const ReeferSurveys = () => {
  const service = getServiceById('reefer-surveys');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default ReeferSurveys;
