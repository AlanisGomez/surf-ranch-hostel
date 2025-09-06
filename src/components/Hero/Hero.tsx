'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from '../Logo';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/banner_horizontal_v2.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo con animación de círculo rotatorio */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative w-40 h-40">
          {/* Círculo rotatorio */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 border-4 border-white rounded-full"
            style={{
              borderStyle: 'dashed',
              borderWidth: '3px'
            }}
          />
          {/* Logo en el centro */}
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="/LogoSRNegro.png"
              alt="Surf Ranch Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white"
        >
          <ChevronDownIcon className="h-8 w-8" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-tertiary/20 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;
