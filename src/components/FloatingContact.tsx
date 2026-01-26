import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export const FloatingContact = () => {
  const contactButtons = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+94760372341',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      hoverGlow: 'hover:shadow-[0_0_20px_hsl(142,70%,45%/0.5)]',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/94760372341',
      bgColor: 'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
      hoverGlow: 'hover:shadow-[0_0_20px_hsl(142,70%,45%/0.5)]',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:thamiza@msts.lk',
      bgColor: 'bg-gradient-to-br from-accent to-primary',
      hoverGlow: 'hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {contactButtons.map((button, index) => (
        <motion.a
          key={button.label}
          href={button.href}
          target={button.external ? '_blank' : undefined}
          rel={button.external ? 'noopener noreferrer' : undefined}
          aria-label={button.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${button.hoverGlow} transition-shadow duration-300`}
        >
          <div
            className={`w-12 h-12 rounded-full ${button.bgColor} flex items-center justify-center shadow-lg transition-all duration-300`}
          >
            <button.icon className="w-5 h-5 text-white" />
          </div>
        </motion.a>
      ))}
    </div>
  );
};
