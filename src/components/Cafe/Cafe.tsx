'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Cafe = () => {

  return (
    <>
      <section id="cafe" className="py-20 bg-white relative overflow-hidden">
        {/* Background color that starts at half of the image and spans full width */}
        <div 
          className="absolute w-full"
          style={{
            top: '30%',
            height: '70%',
            backgroundColor: '#ffea98',
            zIndex: 1
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h2
                className="text-left"
                style={{
                  fontFamily: 'Gluten, sans-serif',
                  fontSize: '24px',
                  color: 'black',
                  letterSpacing: '0.1em',
                  lineHeight: '1.5'
                } as React.CSSProperties}
              >
                Despertá en Surf Ranch
                <br />
                <span
                  style={{
                    fontFamily: 'Subjectivity Serif, serif',
                    fontSize: '50px',
                    fontWeight: 'bold',
                    color: '#000000'
                  } as React.CSSProperties}
                >
                  disfrutá en 
                </span>
                <Image
                  src="/Logo PALTO 2025 - Negro.png"
                  alt="PALTO Logo"
                  width={100}
                  height={100}
                  className="object-contain inline-block ml-4"
                />
              </h2>
              
              
              {/* Photo Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Image
                  src="/cafe-plato-1.jpeg"
                  alt="Plato de Palto Café"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <Image
                  src="/cafe-plato-2.jpeg"
                  alt="Comida gourmet Palto"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <Image
                  src="/cafe-plato-3.jpeg"
                  alt="Especialidades del café"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <Image
                  src="/cafe-plato-4.jpeg"
                  alt="Desayunos Palto Café"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <Image
                  src="/cafe-plato-5.jpeg"
                  alt="Meriendas y café"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <Image
                  src="/cafe-plato-6.jpeg"
                  alt="Almuerzos de Palto"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
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
                    href="https://api.whatsapp.com/send?phone=5492234214038&text=Hola%20Palto%20%F0%9F%A5%91"
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
                      VER MENÚ
                    </button>
                  </a>
              </div>
              <div className="mt-8">
                  <p
                    className="text-center mb-4"
                    style={{
                      fontFamily: 'Subjectivity Serif, serif',
                      fontSize: '22px',
                      fontWeight: '500',
                      color: '#ffffff',
                      letterSpacing: '-0.05em',
                    } as React.CSSProperties}
                  >
                    VIVÍ LA EXPERIENCIA COMPLETA
                  </p>
                  <p
                    className="text-center"
                    style={{
                      fontFamily: 'Subjectivity Serif, serif',
                      fontSize: '35px',
                      fontWeight: 'bold',
                      color: '#ffffff'
                    } as React.CSSProperties}
                  >
                    saboreá desayunos,
                    almuerzos y meriendas
                  </p>
                
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
              >
                <Image
                  src="/PALTO12.jpg"
                  alt="PALTO12"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="w-full relative">
        <Image
          src="/PALTO15.jpg"
          alt="PALTO15 Banner"
          width={1920}
          height={400}
          className="w-full h-[450px] object-cover"
          priority
        />
      </div>
    </>
  );
};

export default Cafe;
