import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceById } from '@/data/servicesData';

const ReeferMonitoring = () => {
  const service = getServiceById('monitoring');
  
  if (!service) return null;
  
  return <ServicePageTemplate service={service} />;
};

export default ReeferMonitoring;
