import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Shield, TrendingUp, X, ChevronLeft, ChevronRight, Eye, ZoomIn } from 'lucide-react';
import { useState, useEffect } from 'react';

// Définir le type pour les images de la galerie
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export default function About() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const stats = [
    { icon: TrendingUp, label: t('about.experience'), value: '15+' },
    { icon: Shield, label: t('about.warranty'), value: '10 ans' },
    { icon: Award, label: t('about.insurance'), value: '100%' }
  ];

  const values = [
    {
      icon: Award,
      title: t('about.quality'),
      description: t('about.quality_desc')
    },
    {
      icon: Shield,
      title: t('about.security'),
      description: t('about.security_desc')
    },
    {
      icon: TrendingUp,
      title: t('about.durability'),
      description: t('about.durability_desc')
    }
  ];

  // Galerie de photos avec typage explicite
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://image.jimcdn.com/app/cms/image/transf/none/path/s3b088fbcd26b6494/image/i38d4e8ae4056761e/version/1439740132/image.jpg",
      alt: "Projet 1",
      description: t('about.gallery.project1_desc', "Description détaillée du premier projet")
    },
    {
      id: 2,
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=1024x532:format=jpg:rotate=90/path/s3b088fbcd26b6494/image/ic9c926bebc32d386/version/1446656918/image.jpg",
      alt: "Projet 2",
      description: t('about.gallery.project2_desc', "Description détaillée du deuxième projet")
    },
    {
      id: 3,
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=710x1024:format=png/path/s3b088fbcd26b6494/image/i5b42cdf627eb6e24/version/1446657233/image.png",
      alt: "Projet 3",
      description: t('about.gallery.project3_desc', "Description détaillée du troisième projet")
    },
    {
      id: 4,
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=710x1024:format=jpg/path/s3b088fbcd26b6494/image/id7b8757fc65ac538/version/1446544188/image.jpg",
      alt: "Projet 4",
      description: t('about.gallery.project4_desc', "Description détaillée du quatrième projet")
    },
    {
      id: 5,
      src: "https://image.jimcdn.com/app/cms/image/transf/none/path/s3b088fbcd26b6494/image/ib4380ff862679d8b/version/1446544787/image.jpg",
      alt: "Projet 5",
      description: t('about.gallery.project5_desc', "Description détaillée du cinquième projet")
    },
    {
      id: 6,
      src: "https://image.jimcdn.com/app/cms/image/transf/none/path/s3b088fbcd26b6494/image/i54219ee871b52f3a/version/1439798927/image.jpg",
      alt: "Projet 6",
      description: t('about.gallery.project6_desc', "Description détaillée du sixième projet")
    }
  ];

  // Carousel automatique
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length, isAutoPlaying]);

  const nextImage = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <stat.icon size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
              <div className="text-gray-200 group-hover:text-white transition-colors duration-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#003366] text-center mb-12"
          >
            {t('about.values_title')}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-[#003366]"
              >
                <value.icon size={40} className="mx-auto mb-4 text-[#003366] group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#004488] transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Galerie avec Carousel Automatique */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#003366] text-center mb-12"
          >
            {t('about.gallery_title', "Notre Galerie")}
          </motion.h3>

          {/* Carousel Principal */}
          <div 
            className="relative max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="aspect-video relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full cursor-zoom-in relative"
                  onClick={() => setSelectedImage(galleryImages[currentIndex])}
                >
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay avec icône eye au hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1 }}
                      className="scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Eye size={60} className="text-white drop-shadow-2xl" />
                    </motion.div>
                  </div>

                  {/* Badge "Cliquez pour zoomer" */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    <ZoomIn size={16} />
                    Cliquez pour zoomer
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Boutons de navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group/nav"
              >
                <ChevronLeft size={24} className="text-[#003366] group-hover/nav:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group/nav"
              >
                <ChevronRight size={24} className="text-[#003366] group-hover/nav:scale-110 transition-transform" />
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 group/indicator ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75 group-hover/indicator:scale-110'
                    }`}
                  />
                ))}
              </div>

              {/* Bouton play/pause */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 group/play"
              >
                {isAutoPlaying ? (
                  <div className="w-6 h-6 flex items-center justify-center group-hover/play:scale-110 transition-transform">
                    <div className="w-2 h-6 bg-[#003366] mx-0.5"></div>
                    <div className="w-2 h-6 bg-[#003366] mx-0.5"></div>
                  </div>
                ) : (
                  <div className="w-0 h-0 border-l-[12px] border-l-[#003366] border-y-[8px] border-y-transparent ml-1 group-hover/play:scale-110 transition-transform"></div>
                )}
              </button>
            </div>
          </div>

          {/* Miniatures */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                className={`aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 relative group/thumbnail ${
                  index === currentIndex 
                    ? 'border-[#003366] shadow-lg' 
                    : 'border-transparent hover:border-[#003366]'
                }`}
                onClick={() => goToImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  } group-hover/thumbnail:scale-110`}
                  loading="lazy"
                />
                
                {/* Overlay avec icône eye pour les miniatures */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/thumbnail:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredImage === image.id ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white bg-opacity-90 rounded-full p-2"
                  >
                    <Eye size={16} className="text-[#003366]" />
                  </motion.div>
                </div>

                {/* Indicateur de sélection */}
                {index === currentIndex && (
                  <div className="absolute top-1 right-1 bg-[#003366] text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal 3D */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 hover:scale-110 transform duration-200 group/close"
              >
                <X size={32} className="group-hover/close:rotate-90 transition-transform duration-200" />
              </button>

              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-square group/image">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-10 transition-all duration-300"></div>
                  </div>

                  {/* Description */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 flex flex-col justify-center bg-gray-50"
                  >
                    <h3 className="text-2xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                      <Eye size={24} />
                      {selectedImage.alt}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedImage.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(null)}
                      className="mt-6 bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004488] transition-colors self-start flex items-center gap-2 group/btn"
                    >
                      <X size={18} className="group-hover/btn:rotate-90 transition-transform duration-200" />
                      {t('about.close', "Fermer")}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}