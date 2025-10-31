import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  services: string[];
  index: number;
}

export default function ServiceCard({ icon: Icon, title, services, index }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
    >
      <motion.div
        className="bg-[#003366] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={32} />
      </motion.div>

      <h3 className="text-2xl font-bold text-[#003366] mb-4">{title}</h3>

      <ul className="space-y-3 mb-6">
        {services.map((service, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <span className="text-[#003366] mt-1">•</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <motion.button
        className="text-[#003366] font-semibold hover:underline"
        whileHover={{ x: 5 }}
      >
        {t('services.learn_more')} →
      </motion.button>
    </motion.div>
  );
}
