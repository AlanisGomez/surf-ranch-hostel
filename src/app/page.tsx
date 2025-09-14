import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Hostel from '@/components/Hostel/Hostel';
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
      <Cafe />
      <Footer />
    </main>
  );
}
