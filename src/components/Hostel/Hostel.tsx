'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Hostel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: "/habitacion-huespedes.jpeg", alt: "Habitación de huéspedes" },
    { src: "/Living-hostel.jpeg", alt: "Living del hostel" },
    { src: "/patio-surfranch.jpeg", alt: "Patio Surf Ranch" },
    { src: "/vista-habitacion.jpeg", alt: "Vista desde habitación" },
    { src: "/hostel-interior-1.jpeg", alt: "Interior acogedor del hostel" },
    { src: "/hostel-interior-2.jpeg", alt: "Ambiente relajado del hostel" }
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
      className="relative overflow-hidden py-12" 
      style={{ 
        backgroundColor: '#b3ced7',
        paddingTop: '50px',
        paddingBottom: '50px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <h2
                className="text-left"
                style={{
                  fontFamily: 'Subjectivity Serif, serif',
                  fontSize: '38px',
                  color: 'transparent',
                  WebkitTextStroke: '1px #ffffff',
                  textStroke: '1px #ffffff',
                  letterSpacing: '0.1em'
                } as React.CSSProperties}
              >
                llegó el momento
              </h2>
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: 'Subjectivity Serif, serif',
                fontSize: '50px',
                color: 'white',
                letterSpacing: '0.1em',
                lineHeight: '1.2'
              } as React.CSSProperties}
            >
              quedate en nuestro hogar{' '}
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #ffffff',
                  textStroke: '2px #ffffff'
                } as React.CSSProperties}
              >
                frente al mar
              </span>
            </h2>

            {/* PALTO33 Image */}
            <div className="w-full relative" style={{ marginTop: '50px', marginBottom: '32px' }}>
              <Image
                src="/PALTO33.jpg"
                alt="PALTO33"
                width={800}
                height={600}
                className="object-cover shadow-lg w-full"
              />
            </div>
            <div 
                  className="mt-4 p-4 text-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    marginBottom: '50px'
                  }}
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=542234214038&text=%F0%9F%8F%A0%20ACANTILADOS%20SURF%20RANCH%20%20%F0%9F%8C%8A%F0%9F%92%A8%0ABienvenidxs%20%F0%9F%A4%99%E2%9C%A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button 
                      className="px-6 py-2 text-black font-bold text-lg font-justus hover:cursor-pointer transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: '#000000',
                        color: 'white',
                        borderRadius: '4px',
                        border: 'none'
                      }}
                    >
                      RESERVAR
                    </button>
                  </a>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* DESAYUNO */}
                  <div 
                    className="flex items-start gap-3 p-4"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icon-heart.jpg"
                        alt="Desayuno"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'Subjectivity Serif, serif',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: 'black'
                        }}
                      >
                        Desayuno
                      </h3>
                      <p className="text-black text-sm">Desayuno by Palto Café</p>
                    </div>
                  </div>

                  {/* Coworking */}
                  <div 
                    className="flex items-start gap-3 p-4"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icon-surf.jpg"
                        alt="Coworking"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'Subjectivity Serif, serif',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: 'black'
                        }}
                      >
                        Coworking
                      </h3>
                      <p className="text-black text-sm">Conexión WiFi, trabajá con buena energía</p>
                    </div>
                  </div>

                  {/* HABITACIONES */}
                  <div 
                    className="flex items-start gap-3 p-4"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icon-heart.jpg"
                        alt="Habitaciones"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'Subjectivity Serif, serif',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: 'black'
                        }}
                      >
                        Habitaciones
                      </h3>
                      <p className="text-black text-sm">Con baño privado, cocina, ventiladores y calefacción</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* SURF */}
                  <div 
                    className="flex items-start gap-3 p-4"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icon-surf.jpg"
                        alt="Surf"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'Subjectivity Serif, serif',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: 'black'
                        }}
                      >
                        Surf
                      </h3>
                      <p className="text-black text-sm">Escuela de surf y alquiler de tablas</p>
                    </div>
                  </div>

                  {/* Espacios compartidos */}
                  <div 
                    className="flex items-start gap-3 p-4"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icon-heart.jpg"
                        alt="Espacios compartidos"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'Subjectivity Serif, serif',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: 'black'
                        }}
                      >
                        Espacios compartidos
                      </h3>
                      <p className="text-black text-sm">Living, cocina, patio, fogón y parrilla</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            {/* Image with overlay text */}
            <div className="relative w-full mb-12" style={{ height: '550px' }}>
              <Image
                src="/PALTO8 (1).jpg"
                alt="PALTO8"
                fill
                className="object-cover"
              />
              
              {/* Overlay text at center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/40 to-transparent p-6">
                {/* DESCRUBI ACANTILADOS Title */}
                <h2
                  className="text-center mb-4"
                  style={{
                    fontFamily: 'Subjectivity Serif, serif',
                    fontSize: '26px',
                    color: 'white',
                    letterSpacing: '0.1em'
                  } as React.CSSProperties}
                >
                  DESCUBRÍ ACANTILADOS
                </h2>
                
                {/* SOMOS MAR Title */}
                <h2
                  className="text-4xl sm:text-5xl font-bold text-center font-gluten"
                  style={{
                    fontSize: '50px',
                    color: 'white',
                    letterSpacing: '0.2em'
                  } as React.CSSProperties}
                >
                  SOMOS MAR
                </h2>
              </div>
            </div>

            <h2
              className="font-bold text-center"
              style={{
                fontFamily: 'Subjectivity Serif, serif',
                fontSize: '35px',
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                lineHeight: '1.5'
              } as React.CSSProperties}
            >
              habitaciones compartidas y privadas
              <br />
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #ffffff',
                  textStroke: '1px #ffffff'
                } as React.CSSProperties}
              >
                a tu medida
              </span>
            </h2>

            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 relative"
              style={{ height: '500px' }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                />
                
                {/* Flechas de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
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
