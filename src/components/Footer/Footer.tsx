'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hostel: [
      { name: 'Ubicación', href: '#contacto' },
      { name: 'Reservas', href: '#hostel' },
    ],
    cafe: [
      { name: 'Menú', href: '#cafe' },
    ]
  };

  return (
    <footer id="contacto" className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src="/Logo-footer-blanco.svg"
                  alt="Surf Ranch"
                  width={200}
                  height={60}
                  className="!h-12 sm:!h-16 w-auto mx-auto sm:mx-0"
                />
              </div>
              
              <p className="text-white mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                Alma vibrante, conexión con la naturaleza, experiencias únicas.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start text-white text-sm sm:text-base justify-center sm:justify-start">
                  <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-center sm:text-left">Los Acantilados Mar del Plata, Buenos Aires, Argentina</span>
                </div>
                
                <div className="flex items-center text-white text-sm sm:text-base justify-center sm:justify-start">
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-white flex-shrink-0" />
                  <a href="tel:+542234214038" className="hover:text-[#00b0b9] transition-colors">
                    +54 223 4214038
                  </a>
                </div>
                
                <div className="flex items-center text-white text-sm sm:text-base justify-center sm:justify-start">
                  <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-white flex-shrink-0" />
                  <a href="mailto:acantiladossurfranch@gmail.com" className="hover:text-[#00b0b9] transition-colors break-all">
                    acantiladossurfranch@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hostel Links */}
          <div className="text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-subjectivity text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                Hostel
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.hostel.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-[#00b0b9] transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Café Links */}
          <div className="text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-subjectivity text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                Café
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.cafe.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-[#00b0b9] transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-subjectivity text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                Seguinos
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="https://instagram.com/acantiladossurfranch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00b0b9] transition-colors duration-200 flex items-center justify-center sm:justify-start text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="break-all">@acantiladossurfranch</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/palto.cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00b0b9] transition-colors duration-200 flex items-center justify-center sm:justify-start text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@palto.cafe</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
           
        {/* Google Maps */}
        <div className="mt-8 sm:mt-12">
          <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-57.5992849!3d-38.1200768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e19b31d5e717%3A0x99ce58ffec34266c!2sAcantilados%20Surf%20Ranch!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Ubicación de Acantilados Surf Ranch"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-2 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white text-xs sm:text-sm text-center"
            >
              © {currentYear} ACANTILADOS SURF RANCH. Todos los derechos reservados.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
