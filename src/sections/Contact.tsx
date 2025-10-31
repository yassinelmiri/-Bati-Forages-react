import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  message: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    alert(t('contact.form_submit'));
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_name')} *
                </label>
                <input
                  {...register('name', { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#003366]`}
                  placeholder={t('contact.form_name')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_phone')} *
                </label>
                <input
                  {...register('phone', { required: true })}
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#003366]`}
                  placeholder={t('contact.form_phone')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_email')} *
                </label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#003366]`}
                  placeholder={t('contact.form_email')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_city')}
                </label>
                <input
                  {...register('city')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003366]"
                  placeholder={t('contact.form_city')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_project')} *
                </label>
                <select
                  {...register('project', { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.project ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#003366]`}
                >
                  <option value="">{t('contact.form_project')}</option>
                  <option value="drilling">{t('contact.project_drilling')}</option>
                  <option value="stabilization">{t('contact.project_stabilization')}</option>
                  <option value="maintenance">{t('contact.project_maintenance')}</option>
                  <option value="other">{t('contact.project_other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form_message')} *
                </label>
                <textarea
                  {...register('message', { required: true })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#003366]`}
                  placeholder={t('contact.form_message')}
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">
                {t('contact.form_submit')}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">
                Contact Direct
              </h3>

              <div className="flex items-start gap-4">
                <Phone className="text-[#003366] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.phone')}</p>
                  <a href="tel:0954913571" className="text-gray-700 hover:text-[#003366]">
                    09 54 91 35 71
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#003366] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.mobile')}</p>
                  <a href="tel:0610516605" className="text-gray-700 hover:text-[#003366]">
                    06 10 51 66 05
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#003366] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.email')}</p>
                  <a href="mailto:batiforages@gmail.com" className="text-gray-700 hover:text-[#003366]">
                    batiforages@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#003366] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.address')}</p>
                  <p className="text-gray-700">{t('contact.address_full')}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="primary" icon={MessageCircle} href="https://wa.me/33610516605">
                  WhatsApp
                </Button>
                <Button variant="secondary" icon={Phone} href="tel:0954913571">
                  {t('contact.call')}
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44923.67587371873!2d-0.548!3d44.857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d8c4c4c4c4c4d%3A0x4c4c4c4c4c4c4c4!2s33150%20Cenon%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
