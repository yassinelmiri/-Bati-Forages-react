import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Award, CheckCircle } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  const { t } = useTranslation();
  const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    text: string;
    rating: number;
  }>;

  const certifications = [
    { icon: Shield, title: t('testimonials.decennial_warranty') },
    { icon: Award, title: t('testimonials.full_insurance') },
    { icon: CheckCircle, title: t('testimonials.certified') }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              name={review.name}
              location={review.location}
              text={review.text}
              rating={review.rating}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            {t('testimonials.certifications_title')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <cert.icon size={48} className="mx-auto mb-4" />
                <p className="font-semibold text-lg">{cert.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
