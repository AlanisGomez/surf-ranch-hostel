import Header from '@/components/Header/Header';
import Hostel from '@/components/Hostel/Hostel';
import Cafe from '@/components/Cafe/Cafe';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hostel />
      <Cafe />
      <Footer />
    </main>
  );
}
