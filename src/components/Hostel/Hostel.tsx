'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hostel = () => {
  return (
    <section 
      id="hostel" 
      className="relative overflow-hidden py-12" 
      style={{ 
        backgroundColor: '#cee7ef',
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
            className="mb-16 mt-4"
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
              <Image
                src="/icon-heart.jpg"
                alt="Heart Icon"
                width={80}
                height={80}
                className="object-contain"
              />
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
                  <button 
                    className="px-6 py-2 text-black font-bold text-lg font-justus"
                    style={{
                      backgroundColor: '#000000',
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none'
                    }}
                  >
                    RESERVAR
                  </button>
            </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hostel;
