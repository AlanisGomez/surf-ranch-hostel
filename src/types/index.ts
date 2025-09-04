export interface Image {
  src: string;
  alt: string;
  caption?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: Image;
  price?: string;
  duration?: string;
  features: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'drinks' | 'desserts';
}

export interface HostelRoom {
  id: string;
  name: string;
  description: string;
  price: string;
  capacity: number;
  features: string[];
  images: Image[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: Image;
}
