import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Surf Ranch - Hostel & Café | Chapadmalal',
  description: 'Somos un puente entre la ciudad y la naturaleza. Hostel y café en Chapadmalal con experiencias únicas de surf, aventura y gastronomía de alta calidad.',
  keywords: 'hostel, café, surf, chapadmalal, argentina, viajes, aventura, gastronomía',
  authors: [{ name: 'Surf Ranch' }],
  openGraph: {
    title: 'Surf Ranch - Hostel & Café',
    description: 'Somos un puente entre la ciudad y la naturaleza',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
