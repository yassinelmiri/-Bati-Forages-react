import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004488] to-[#0055aa] opacity-95"></div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=560x10000:format=jpg/path/s3b088fbcd26b6494/image/iab8eca74835d72e3/version/1625757476/image.jpg" 
              alt="Bâti Forages Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-lg"
            />
            <div className="text-white font-bold text-xl md:text-2xl">
              Bâti Forages
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 items-center text-white"
          >
            <a href="#about" className="hover:text-gray-200 transition">{t('nav.about')}</a>
            <a href="#services" className="hover:text-gray-200 transition">{t('nav.services')}</a>
            <a href="#testimonials" className="hover:text-gray-200 transition">{t('nav.testimonials')}</a>
            <a href="#contact" className="hover:text-gray-200 transition">{t('nav.contact')}</a>
            <LanguageSwitcher />
          </motion.div>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-100"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button variant="secondary" onClick={scrollToContact}>
            {t('hero.cta_quote')}
          </Button>
          <Button variant="outline" icon={Phone} href="tel:0954913571">
            09 54 91 35 71
          </Button>
          <Button variant="outline" icon={MessageCircle} href="https://wa.me/33610516605">
            WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-8 justify-center text-sm"
        >
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>09 54 91 35 71</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>batiforages@gmail.com</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}