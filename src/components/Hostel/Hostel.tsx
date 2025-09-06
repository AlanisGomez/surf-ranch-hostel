'use client';

import { motion } from 'framer-motion';
import { WifiIcon, HomeIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import { hostelRooms } from '@/lib/data';
import { HostelRoom } from '@/types';
import Image from 'next/image';

const Hostel = () => {
  const features = [
    { icon: WifiIcon, text: 'WiFi Gratuito' },
    { icon: HomeIcon, text: 'Ubicación Privilegiada' },
    { icon: UsersIcon, text: 'Ambiente Social' },
    { icon: StarIcon, text: 'Atención Personalizada' },
  ];

  return (
    <section id="hostel" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Waves Pattern - Right Side Only */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='60' viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q20 10 40 30 T80 30' stroke='%2300b0b9' stroke-width='3' fill='none'/%3E%3Cpath d='M0 45 Q15 25 30 45 T60 45' stroke='%2300b0b9' stroke-width='2.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 60px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'right 0',
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Icono Hostel */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/icon-hoste.jpg"
                    alt="Icono Hostel"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <h2 
                className="text-4xl sm:text-5xl font-bold mb-6 text-left font-subjectivity"
                style={{
                  color: '#333333'
                } as React.CSSProperties}
              >
                Hostel frente al mar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl text-left mb-8">
                Una experiencia única compartiendo un hogar lejos de casa.
                <br />
                Fusionando gastronomía y buenos momentos.
              </p>

              {/* Features Images - Left Side Only */}
              <div className="flex gap-4 mb-8">
                <Image
                  src="/icon-desaynos.jpg"
                  alt="Desayunos"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/icon-heart.jpg"
                  alt="Experiencias"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/icon-surf.jpg"
                  alt="Surf"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>


      </div>
      
      {/* Banner de ancho completo sobre el background de olas */}
      <div className="relative z-10 mt-16">
        <img 
          src="/PALTO41.jpg" 
          alt="Banner PALTO41" 
          className="w-full h-80 lg:h-96 object-cover"
        />
      </div>
      
    </section>
  );
};

export default Hostel;
