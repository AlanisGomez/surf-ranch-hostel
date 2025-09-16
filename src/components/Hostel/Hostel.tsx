'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Hostel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: "/hostel-interior-1.jpeg", alt: "Interior acogedor del hostel" },
    { src: "/hostel-interior-2.jpeg", alt: "Ambiente relajado del hostel" },
    { src: "/habitacion-huespedes.jpeg", alt: "Habitación de huéspedes" },
    { src: "/Living-hostel.jpeg", alt: "Living del hostel" },
    { src: "/patio-surfranch.jpeg", alt: "Patio Surf Ranch" },
    { src: "/vista-habitacion.jpeg", alt: "Vista desde habitación" }
  ];

  const features = [
    { icon: "/icon-heart.jpg", title: "Desayuno", description: "Desayuno by Palto Café" },
    { icon: "/icon-surf.jpg", title: "Surf", description: "Escuela de surf y alquiler de tablas" },
    { icon: "/icon-surf.jpg", title: "Coworking", description: "Conexión WiFi, trabajá con buena energía" },
    { icon: "/icon-heart.jpg", title: "Espacios compartidos", description: "Living, cocina, patio, fogón y parrilla" },
    { icon: "/icon-heart.jpg", title: "Habitaciones", description: "Compartidas y privadas, con baño, cocina, ventiladores y calefacción" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section 
      id="hostel" 
      className="relative overflow-hidden py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: '#b3ced7' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Títulos */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-subjectivity text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left mb-2 sm:mb-4"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px #ffffff',
                    letterSpacing: '0.1em'
                  }}>
                llegó el momento
              </h2>
              
              <h2 className="font-subjectivity font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white text-center lg:text-left leading-tight"
                  style={{ letterSpacing: '0.1em' }}>
                quedate en nuestro hogar{' '}
                <span style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #ffffff'
                }}>
                  frente al mar
                </span>
              </h2>
            </div>

            {/* Imagen Principal */}
            <div className="w-full relative mb-6 sm:mb-8">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/PALTO33.jpg"
                  alt="Vista del hostel PALTO33"
                  fill
                  className="object-cover shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>

            {/* Botón Reservar */}
            <div className="mb-8 sm:mb-12 text-center">
              <a 
                href="https://api.whatsapp.com/send?phone=542234214038&text=%F0%9F%8F%A0%20ACANTILADOS%20SURF%20RANCH%20%20%F0%9F%8C%8A%F0%9F%92%A8%0ABienvenidxs%20%F0%9F%A4%99%E2%9C%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <div className="bg-white p-4 w-full">
                  <button className="px-6 py-2 sm:px-8 sm:py-2 bg-black text-white font-bold text-base sm:text-lg font-justus hover:scale-105 transition-all duration-200 shadow-lg rounded-sm">
                    RESERVAR
                  </button>
                </div>
              </a>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {/* Columna izquierda */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                {features.filter((_, index) => index % 2 === 0).map((feature, index) => (
                  <div 
                    key={index * 2}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg h-auto"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-subjectivity font-bold text-base sm:text-lg text-black mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-black text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Columna derecha */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                {features.filter((_, index) => index % 2 === 1).map((feature, index) => (
                  <div 
                    key={index * 2 + 1}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg h-auto"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-subjectivity font-bold text-base sm:text-lg text-black mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-black text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image and Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative flex flex-col"
          >
            {/* Hero Image with overlay text */}
            <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
              <div className="aspect-[4/3] lg:aspect-[3/4] relative">
                <Image
                  src="/PALTO8 (1).jpg"
                  alt="Vista de Acantilados - Somos Mar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-6">
                  <h2 className="font-subjectivity text-lg sm:text-xl lg:text-2xl text-white text-center mb-2 sm:mb-4"
                      style={{ letterSpacing: '0.1em' }}>
                    DESCUBRÍ ACANTILADOS
                  </h2>
                  
                  <h2 className="font-gluten font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white text-center"
                      style={{ letterSpacing: '0.2em' }}>
                    SOMOS MAR
                  </h2>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="font-gluten text-white text-xl font-normal text-center mb-2 sm:mb-3"
                style={{ fontSize: '20px' }}>
              ¿estás listo?
            </h2>
            
            <h2 className="font-subjectivity font-bold text-xl sm:text-2xl lg:text-3xl text-white text-center mb-6 sm:mb-8 leading-tight"
                style={{ letterSpacing: '0.1em' }}>
              viví experiencias únicas
              <br />
              <span style={{
                color: 'transparent',
                WebkitTextStroke: '1px #ffffff'
              }}>
                a tu medida
              </span>
            </h2>

            {/* Gallery Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hostel;
