import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Send, User, Building, Package, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

const services = [
  'Reefer Container Repairs & Maintenance',
  'Reefer Container Warranty Repairs',
  'Supply of Reefer Container Spare Parts',
  'Pre Trip Inspections (PTI)',
  'Reefer Container Monitoring',
  'Reefer Container Surveys',
  'Reefer Container Renting Services',
  'Container & Cargo Surveys',
  'Vessel Surveys',
  'Other',
];

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Company', icon: Building },
  { id: 3, title: 'Service', icon: Package },
  { id: 4, title: 'Details', icon: FileText },
];

export const MultiStepForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will prepare a customized quote and contact you within 24 hours.",
    });
    setFormData({ name: '', company: '', email: '', phone: '', service: '', details: '' });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="bg-background h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="bg-background h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+94 XX XXX XXXX"
                className="bg-background h-12"
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company name"
                className="bg-background h-12"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Optional: Add your company name to receive a business quote with appropriate pricing.
            </p>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <label className="block text-sm font-medium text-foreground mb-4">Select Service *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <motion.button
                  key={service}
                  type="button"
                  onClick={() => setFormData({ ...formData, service })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl text-left text-sm font-medium transition-all ${
                    formData.service === service
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
              <Textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us more about your requirements, quantities, timelines, etc."
                rows={6}
                className="bg-background"
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass rounded-3xl p-8 lg:p-12">
      {/* Progress Steps */}
      <div className="mb-10">
        <div className="flex items-center justify-between relative">
          {/* Progress line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isCompleted || isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  )}
                </motion.div>
                <span className={`mt-2 text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>

        {currentStep < 4 ? (
          <Button variant="gradient" onClick={handleNext} className="gap-2">
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="quote" onClick={handleSubmit} className="gap-2">
            <Send className="w-4 h-4" />
            Submit Quote
          </Button>
        )}
      </div>
    </div>
  );
};
