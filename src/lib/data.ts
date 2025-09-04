import { Experience, MenuItem, HostelRoom, Testimonial, Image } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Chapadmalal',
    description: 'Fin de semana de surf. Trip de surf para todos los niveles. Te esperamos en nuestra casa frente al mar con yoga, buena música y comida rica por chef locales.',
    image: {
      src: '/images/chapadmalal.jpg',
      alt: 'Chapadmalal surf trip'
    },
    price: 'Desde $45.000',
    duration: '2 días',
    features: ['Surf para todos los niveles', 'Yoga matutino', 'Comida gourmet', 'Alojamiento incluido']
  },
  {
    id: '2',
    title: 'Chapelco',
    description: 'Una semanita en la montaña. Trip de snow en Las Pendientes, San Martin de los Andes. Te recibimos en el medio de la montaña para vivir el cerro desde adentro.',
    image: {
      src: '/images/chapelco.jpg',
      alt: 'Chapelco snow trip'
    },
    price: 'Desde $120.000',
    duration: '7 días',
    features: ['Snowboard y ski', 'Alojamiento en montaña', 'Equipos incluidos', 'Guías especializados']
  },
  {
    id: '3',
    title: 'Itamambuca',
    description: 'Surf y yoga en Brasil. Surf para todos los niveles. Una semana en la selva, durmiendo en una casa increíble a 30 metros de la ola, paseos entre islas y cascadas.',
    image: {
      src: '/images/itamambuca.jpg',
      alt: 'Itamambuca surf trip'
    },
    price: 'Desde $180.000',
    duration: '7 días',
    features: ['Surf en Brasil', 'Yoga en la selva', 'Paseos en islas', 'Cascadas naturales']
  },
  {
    id: '4',
    title: 'Costa Rica',
    description: 'Surftrip a Costa Rica. Una semana en el paraíso tropical. Buenas olas, buena comida, buena gente. Nos vamos a Playa Hermosa, Santa Teresa.',
    image: {
      src: '/images/costa-rica.jpg',
      alt: 'Costa Rica surf trip'
    },
    price: 'Desde $220.000',
    duration: '7 días',
    features: ['Surf en Costa Rica', 'Playa Hermosa', 'Santa Teresa', 'Cultura local']
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Avocado Toast',
    description: 'Pan integral tostado con palta, tomate cherry, semillas y aceite de oliva',
    price: '$3.500',
    category: 'breakfast'
  },
  {
    id: '2',
    name: 'Smoothie Bowl',
    description: 'Bowl de açaí con frutas frescas, granola y miel',
    price: '$4.200',
    category: 'breakfast'
  },
  {
    id: '3',
    name: 'Poke Bowl',
    description: 'Bowl de salmón fresco con arroz, vegetales y salsa teriyaki',
    price: '$6.800',
    category: 'lunch'
  },
  {
    id: '4',
    name: 'Burger Artesanal',
    description: 'Hamburguesa de carne con queso, lechuga, tomate y papas fritas',
    price: '$5.500',
    category: 'lunch'
  },
  {
    id: '5',
    name: 'Café Especial',
    description: 'Café de origen colombiano preparado con métodos especiales',
    price: '$2.200',
    category: 'drinks'
  },
  {
    id: '6',
    name: 'Tarta de Chocolate',
    description: 'Tarta de chocolate negro con frutos rojos',
    price: '$3.800',
    category: 'desserts'
  }
];

export const hostelRooms: HostelRoom[] = [
  {
    id: '1',
    name: 'Dormitorio Compartido',
    description: 'Habitación compartida con 6 camas, ideal para mochileros',
    price: '$15.000/noche',
    capacity: 6,
    features: ['Camas individuales', 'Lockers', 'WiFi', 'Ropa de cama incluida'],
    images: [
      { src: '/images/dorm-room-1.jpg', alt: 'Dormitorio compartido' },
      { src: '/images/dorm-room-2.jpg', alt: 'Vista del dormitorio' }
    ]
  },
  {
    id: '2',
    name: 'Habitación Privada',
    description: 'Habitación privada con cama doble, baño privado',
    price: '$35.000/noche',
    capacity: 2,
    features: ['Cama doble', 'Baño privado', 'TV', 'WiFi', 'Desayuno incluido'],
    images: [
      { src: '/images/private-room-1.jpg', alt: 'Habitación privada' },
      { src: '/images/private-room-2.jpg', alt: 'Baño privado' }
    ]
  },
  {
    id: '3',
    name: 'Suite Familiar',
    description: 'Suite espaciosa para familias con 2 habitaciones',
    price: '$55.000/noche',
    capacity: 4,
    features: ['2 habitaciones', 'Sala de estar', 'Cocina', 'Baño privado', 'Terraza'],
    images: [
      { src: '/images/suite-1.jpg', alt: 'Suite familiar' },
      { src: '/images/suite-2.jpg', alt: 'Sala de estar' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    location: 'Buenos Aires',
    text: 'Una experiencia increíble. El hostel es perfecto y el café tiene la mejor comida. Definitivamente volveré.',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    location: 'Córdoba',
    text: 'Los trips de surf son únicos. Chapadmalal fue una experiencia que nunca olvidaré. Muy recomendable.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ana Silva',
    location: 'Mendoza',
    text: 'El ambiente es perfecto para relajarse. La atención es excelente y la ubicación es ideal.',
    rating: 4
  }
];

export const galleryImages: Image[] = [
  { src: '/images/gallery-1.jpg', alt: 'Vista del hostel desde el mar' },
  { src: '/images/gallery-2.jpg', alt: 'Terraza del café' },
  { src: '/images/gallery-3.jpg', alt: 'Habitación con vista al mar' },
  { src: '/images/gallery-4.jpg', alt: 'Grupo de surfistas' },
  { src: '/images/gallery-5.jpg', alt: 'Interior del café' },
  { src: '/images/gallery-6.jpg', alt: 'Atardecer en la playa' },
  { src: '/images/gallery-7.jpg', alt: 'Sala común del hostel' },
  { src: '/images/gallery-8.jpg', alt: 'Plato del menú' }
];
