'use client';

import { motion } from 'framer-motion';
import { WifiIcon, HomeIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import { hostelRooms } from '@/lib/data';
import { HostelRoom } from '@/types';

const Hostel = () => {
  const features = [
    { icon: WifiIcon, text: 'WiFi Gratuito' },
    { icon: HomeIcon, text: 'Ubicación Privilegiada' },
    { icon: UsersIcon, text: 'Ambiente Social' },
    { icon: StarIcon, text: 'Atención Personalizada' },
  ];

  return (
    <section id="hostel" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
            BEACH HOUSE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una experiencia única compartiendo un hogar lejos de casa. 
            Fusionando gastronomía y buenos momentos.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-dark font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rooms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostelRooms.map((room: HostelRoom, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Room Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏠</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-dark">{room.capacity} personas</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{room.price}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Reservar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
            className="bg-tertiary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-tertiary/90 transition-colors duration-200 shadow-lg"
          >
            VER TODAS LAS HABITACIONES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hostel;
