'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigation = [
    { name: 'Surf Hostel', href: '#hostel' },
    { name: 'Palto Café', href: '#cafe' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection ? `#${currentSection}` : '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 bg-white sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/Logo-header-negro.svg"
                alt="Surf Ranch"
                width={120}
                height={40}
                className="!h-20 sm:!h-22 lg:!h-24 w-auto"
                priority
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm lg:text-base transition-colors duration-200 font-subjectivity font-semibold ${
                    activeSection === item.href 
                      ? 'text-[#00b0b9]' 
                      : 'text-gray-700 hover:text-[#00b0b9]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00b0b9] p-2 rounded-md"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 text-base font-subjectivity font-semibold rounded-md transition-colors ${
                      activeSection === item.href 
                        ? 'text-[#00b0b9] bg-[#00b0b9]/10' 
                        : 'text-gray-700 hover:text-[#00b0b9] hover:bg-gray-50'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        const elementPosition = targetElement.offsetTop;
                        const offsetPosition = elementPosition - 80; // Offset para el header sticky
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
