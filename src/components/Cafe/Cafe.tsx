'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { menuItems } from '@/lib/data';
import { MenuItem } from '@/types';

const Cafe = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Todo' },
    { id: 'breakfast', name: 'Desayunos' },
    { id: 'lunch', name: 'Almuerzos' },
    { id: 'drinks', name: 'Bebidas' },
    { id: 'desserts', name: 'Postres' },
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const features = [
    { icon: BeakerIcon, text: 'Café de Origen', description: 'Café especial de granos seleccionados' },
    { icon: ClockIcon, text: 'Horario Extendido', description: 'Abierto de 7:00 a 22:00' },
    { icon: StarIcon, text: 'Calidad Premium', description: 'Ingredientes frescos y locales' },
  ];

  return (
    <section id="cafe" className="py-20 bg-gray-50">
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
            RESTO & CAFÉ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una experiencia única fusionando gastronomía y buenos momentos. 
            Descubre nuestro menú cuidadosamente elaborado.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{feature.text}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredMenu.map((item: MenuItem, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-dark">{item.name}</h3>
                <span className="text-2xl font-bold text-primary">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 capitalize">{item.category}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-tertiary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tertiary/90 transition-colors duration-200"
                >
                  Pedir
                </motion.button>
              </div>
            </motion.div>
          ))}
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
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
          >
            VER MENÚ COMPLETO
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cafe;
