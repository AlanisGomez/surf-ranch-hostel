'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Cafe = () => {

  return (
   <section id="cafe" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2
              className="text-left"
              style={{
                fontFamily: 'Gluten, sans-serif',
                fontSize: '36px',
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
                  color: 'transparent',
                  WebkitTextStroke: '1px #000000',
                  textStroke: '1px #000000'
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
          </div>

          {/* Right Side */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
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
  );
};

export default Cafe;
