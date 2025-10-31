import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bâti Forages</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <a href="tel:0954913571" className="hover:text-white transition">
                  09 54 91 35 71
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <a href="tel:0610516605" className="hover:text-white transition">
                  06 10 51 66 05
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <a href="mailto:batiforages@gmail.com" className="hover:text-white transition">
                  batiforages@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-1" />
                <span>33150 Cenon, France</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {t('footer.legal')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-300">
          <p>© {currentYear} Bâti Forages. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
