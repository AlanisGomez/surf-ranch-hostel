'use client';

import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hostel: [
      { name: 'Habitaciones', href: '#hostel' },
      { name: 'Servicios', href: '#hostel' },
      { name: 'Ubicación', href: '#contacto' },
      { name: 'Reservas', href: '#hostel' },
    ],
    cafe: [
      { name: 'Menú', href: '#cafe' },
      { name: 'Especialidades', href: '#cafe' },
      { name: 'Horarios', href: '#cafe' },
      { name: 'Eventos', href: '#cafe' },
    ],
    experiences: [
      { name: 'Chapadmalal', href: '#experiencias' },
      { name: 'Chapelco', href: '#experiencias' },
      { name: 'Itamambuca', href: '#experiencias' },
      { name: 'Costa Rica', href: '#experiencias' },
    ],
    company: [
      { name: 'Nosotros', href: '#home' },
      { name: 'Blog', href: '#' },
      { name: 'Trabajos', href: '#' },
      { name: 'Contacto', href: '#contacto' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: HeartIcon, href: '#' },
    { name: 'Facebook', icon: ChatBubbleLeftRightIcon, href: '#' },
    { name: 'Twitter', icon: ShareIcon, href: '#' },
  ];

  return (
    <footer id="contacto" className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-secondary mb-4">
                SURF RANCH
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Somos un puente entre la ciudad y la naturaleza. 
                Conectamos personas con experiencias únicas de surf, 
                aventura y gastronomía de alta calidad.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPinIcon className="h-5 w-5 mr-3 text-primary" />
                  <span>Chapadmalal, Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                  <span>+54 9 11 1234-5678</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-primary" />
                  <span>hola@surfranch.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Hostel</h4>
              <ul className="space-y-2">
                {footerLinks.hostel.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Café</h4>
              <ul className="space-y-2">
                {footerLinks.cafe.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Experiencias</h4>
              <ul className="space-y-2">
                {footerLinks.experiences.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 text-secondary">
              NEWSLETTER DE SURF RANCH
            </h4>
            <p className="text-gray-300 mb-6">
              Enterate de todas las novedades de nuestros Trips y accedé a 
              beneficios especiales de último momento con hasta un 40% de descuento.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} SURF RANCH. Todos los derechos reservados.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
