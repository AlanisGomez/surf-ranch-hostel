'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Image as ImageType } from '@/types';
import Image from 'next/image';

interface GalleryProps {
  images: ImageType[];
  title?: string;
}

const Gallery = ({ images, title = "Galería" }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Experiencias de viaje
  const experiences = [
    {
      id: 'chapadmalal',
      title: 'CHAPADMALAL',
      subtitle: 'Fin de semana de surf',
      description: 'Trip de surf para todos los niveles. Te esperamos en nuestra casa frente al mar con yoga, buena música y comida rica por chef locales.',
      image: images[0] || { src: '/habitacion-huespedes.jpeg', alt: 'Chapadmalal' },
      icon: '🌊'
    },
    {
      id: 'chapelco',
      title: 'CHAPELCO',
      subtitle: 'Una semanita en la montaña',
      description: 'Trip de snow en Las Pendientes, San Martin de los Andes. Te recibimos en el medio de la montaña para vivir el cerro desde adentro.',
      image: images[1] || { src: '/Living-hostel.jpeg', alt: 'Chapelco' },
      icon: '🏔️'
    },
    {
      id: 'itamambuca',
      title: 'ITAMAMBUCA',
      subtitle: 'Surf y yoga en Brasil',
      description: 'Surf para todos los niveles. Una semana en la selva, durmiendo en una casa increíble a 30 metros de la ola, paseos entre islas y cascadas.',
      image: images[2] || { src: '/patio-surfranch.jpeg', alt: 'Itamambuca' },
      icon: '🌴'
    },
    {
      id: 'costa-rica',
      title: 'COSTA RICA',
      subtitle: 'Surftrip a Costa Rica',
      description: 'Una semana en el paraíso tropical. Buenas olas, buena comida, buena gente. Nos vamos a Playa Hermosa, Santa Teresa.',
      image: images[3] || { src: '/vista-habitacion.jpeg', alt: 'Costa Rica' },
      icon: '🏄‍♂️'
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#cee7ef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent"
            >
              {/* Image */}
              <div className="relative h-48 cursor-pointer mb-4" onClick={() => setSelectedImage(experience.image)}>
                <Image
                  src={experience.image.src}
                  alt={experience.image.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-transparent">
                {/* Subtitle */}
                <h4 className="text-lg font-bold mb-3 font-subjectivity" style={{ color: '#333333' }}>
                  {experience.subtitle}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-subjectivity">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reservas Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 px-8 text-white font-bold text-xl font-justus"
            style={{
              backgroundColor: '#333333',
              borderRadius: '4px'
            }}
          >
            RESERVAS
          </motion.button>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-96 lg:h-[500px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
