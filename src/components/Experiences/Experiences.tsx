'use client';

import { motion } from 'framer-motion';

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
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-6 font-justus"
            style={{ color: '#333333' }}
          >
            EXPERIENCIAS ÚNICAS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subjectivity">
            Descubre nuestros trips de surf, snow y aventura. 
            Conecta con la naturaleza y vive experiencias inolvidables.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
