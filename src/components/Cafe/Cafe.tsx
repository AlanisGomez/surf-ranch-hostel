'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { menuItems } from '@/lib/data';
import { MenuItem } from '@/types';
import Image from 'next/image';

const Cafe = () => {

  return (
    <section id="cafe" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern - Left Side Only */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q25 25 0 50' stroke='%23636b2f' stroke-width='1' fill='none'/%3E%3Cpath d='M0 0 Q30 30 0 60' stroke='%23636b2f' stroke-width='1' fill='none'/%3E%3Cpath d='M0 0 Q35 35 0 70' stroke='%23636b2f' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 0',
          clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)'
        }} />
      </div>

      <div className="mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo PALTO 2025 - Negro.png"
              alt="PALTO CAFÉ Logo"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Menu Section with Green Background */}
        <div className="py-16 px-8" style={{ backgroundColor: '#636b2f' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Menu Categories and Items */}
            <div>
              {/* Menu Categories */}
              <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src="/PALTO13.jpg"
                    alt="PALTO13"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* White space with text below */}
                <div 
                  className="mt-4 p-4 text-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '4px'
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
                    VER MENÚ
                  </button>
                </div>
              </div>
            </motion.div>

            </div>

            {/* Right Side - Image and Photo Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Photo Grid */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.42.16.jpeg"
                      alt="Foto 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.43.21.jpeg"
                      alt="Foto 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.44.23.jpeg"
                      alt="Foto 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.45.00.jpeg"
                      alt="Foto 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.46.35.jpeg"
                      alt="Foto 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/WhatsApp Image 2025-09-05 at 15.47.49.jpeg"
                      alt="Foto 6"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full mt-16">
          <img 
            src="/PALTO15.jpg" 
            alt="PALTO15" 
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Cafe;
