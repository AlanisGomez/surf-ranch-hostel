'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Cafe = () => {
  const cafeImages = [
    { src: "/cafe-plato-1.jpeg", alt: "Plato de Palto Café" },
    { src: "/cafe-plato-2.jpeg", alt: "Comida gourmet Palto" },
    { src: "/cafe-plato-3.jpeg", alt: "Especialidades del café" },
    { src: "/cafe-plato-4.jpeg", alt: "Desayunos Palto Café" },
    { src: "/cafe-plato-5.jpeg", alt: "Meriendas y café" },
    { src: "/cafe-plato-6.jpeg", alt: "Almuerzos de Palto" }
  ];

  return (
    <>
      <section id="cafe" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background color section */}
        <div 
          className="absolute w-full bg-yellow-200"
          style={{
            top: '30%',
            height: '70%',
            backgroundColor: '#ffea98',
            zIndex: 1
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              {/* Título Principal */}
              <div className="mb-6 sm:mb-8">
                <h2 className="font-gluten text-lg sm:text-xl lg:text-2xl text-black text-center lg:text-left mb-2"
                    style={{ letterSpacing: '0.1em' }}>
                  Despertá en Surf Ranch
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 sm:gap-4">
                  <span className="font-subjectivity font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black">
                    disfrutá en
                  </span>
                  <div className="w-16 sm:w-20 lg:w-24 h-auto">
                    <Image
                      src="/Logo PALTO 2025 - Negro.png"
                      alt="PALTO Logo"
                      width={100}
                      height={100}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {cafeImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-square relative overflow-hidden rounded-lg shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Botón Ver Menú */}
              <div className="mb-8 sm:mb-12 text-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=5492234214038&text=Hola%20Palto%20%F0%9F%A5%91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <div className="bg-white p-4 sm:p-4 w-full">
                    <button className="px-6 py-2 sm:px-8 sm:py-2 bg-black text-white font-bold text-base sm:text-lg font-justus hover:scale-105 transition-all duration-200 shadow-lg rounded-sm">
                      VER MENÚ
                    </button>
                  </div>
                </a>
              </div>

              {/* Texto descriptivo */}
              <div className="text-center space-y-4">
                <p className="font-subjectivity text-lg sm:text-xl lg:text-2xl font-medium text-white"
                   style={{ letterSpacing: '-0.05em' }}>
                  VIVÍ LA EXPERIENCIA COMPLETA
                </p>
                <p className="font-subjectivity font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                  saboreá desayunos, almuerzos y meriendas
                </p>
              </div>
            </div>

            {/* Right Side - Main Image */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] relative overflow-hidden shadow-lg">
                  <Image
                    src="/PALTO12.jpg"
                    alt="Interior de Palto Café"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="w-full">
        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="/PALTO15.jpg"
            alt="Banner Palto Café - Experiencia gastronómica"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          
          {/* Optional overlay for better mobile readability */}
          <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
        </div>
      </section>
    </>
  );
};

export default Cafe;
