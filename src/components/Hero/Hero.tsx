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

      {/* Logo Centrado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex justify-center items-center"
      >
        <Image
          src="/logo-banner-blanco.svg"
          alt="Surf Ranch Logo"
          width={400}
          height={200}
          className="w-auto h-auto max-w-md"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
