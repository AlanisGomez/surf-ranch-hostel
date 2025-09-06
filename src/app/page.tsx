import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Hostel from '@/components/Hostel/Hostel';
import Spinner from '@/components/Spinner/Spinner';
import Gallery from '@/components/Gallery/Gallery';
import Cafe from '@/components/Cafe/Cafe';
import Experiences from '@/components/Experiences/Experiences';
import Footer from '@/components/Footer/Footer';
import { galleryImages } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Hostel />
      <Gallery images={galleryImages} title="Galería del Hostel" />
      <Cafe />
      <Experiences />
      <Footer />
    </main>
  );
}
