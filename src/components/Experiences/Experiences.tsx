'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import { experiences } from '@/lib/data';
import { Experience } from '@/types';

const Experiences = () => {
  return (
    <section id="experiencias" className="py-20 bg-white">
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
            EXPERIENCIAS ÚNICAS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros trips de surf, snow y aventura. 
            Conecta con la naturaleza y vive experiencias inolvidables.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience: Experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Experience Image */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">
                    {experience.title === 'Chapadmalal' && '🏄‍♂️'}
                    {experience.title === 'Chapelco' && '🏔️'}
                    {experience.title === 'Itamambuca' && '🌴'}
                    {experience.title === 'Costa Rica' && '🌊'}
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-dark">{experience.duration}</span>
                </div>
                <div className="absolute top-4 right-4 bg-tertiary text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">{experience.price}</span>
                </div>
              </div>

              {/* Experience Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-3">{experience.title}</h3>
                <p className="text-gray-600 mb-6">{experience.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {experience.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    Reservar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    Info
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Viajeros Felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Destinos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfacción</div>
            </div>
          </div>
        </motion.div>

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
            VER TODAS LAS EXPERIENCIAS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
