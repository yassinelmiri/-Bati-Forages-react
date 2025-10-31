import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Droplet, Building2, Wrench } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Droplet,
      title: t('services.drilling_title'),
      services: t('services.drilling_services', { returnObjects: true }) as string[]
    },
    {
      icon: Building2,
      title: t('services.stabilization_title'),
      services: t('services.stabilization_services', { returnObjects: true }) as string[]
    },
    {
      icon: Wrench,
      title: t('services.technical_title'),
      services: t('services.technical_services', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              services={service.services}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
